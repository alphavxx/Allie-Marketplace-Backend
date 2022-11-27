const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const { uuid } = require("uuidv4");
const catchAsync = require("../utils/catchAsync.js");
const Collection = require("./../model/collectionModel");

exports.formatImages = catchAsync(async (req, res, next) => {
  if (!req.files) return next();

  await req.files.files.forEach(async (el) => {
    el.filename = `collection-${uuid()}.jpeg`;
    await sharp(el.buffer)
      .jpeg()
      .toFile(`public/img/collection-image/${el.filename}`);
  });

  // this setTimeout function to make sure that all file is saved completely
  setTimeout(() => {
    next();
  }, 2000);
});

exports.getCollection = catchAsync(async (req, res, next) => {
  const metadata_id = req.params.metadata_id;

  const collection = await await Collection.find({ metadata_id });

  if (!collection) {
    return next(
      new AppError("No collection found with that collection Name", 404)
    );
  }

  res.status(200).json({
    status: "success",
    collection,
  });
});

exports.getCollections = catchAsync(async (req, res, next) => {
  const collection = await await Collection.find();

  res.status(200).json({
    status: "success",
    collection,
  });
});

exports.createCollection = catchAsync(async (req, res, next) => {
  // this collection only needds to be created by process.env.OWNER_WALLET (if  Allie then her wallet ID)

  req.body.files = [];

  if (req.files) {
    await req.files.files.forEach((el) => {
      req.body.files.push({
        imgData: fs.readFileSync(
          path.join(
            __dirname,
            `./../public/img/collection-image/${el.filename}`
          )
        ),
        contentType: "image/jpeg",
      });
    });
  }

  const collection = await Collection.create(req.body);

  res.status(201).json({
    status: "success",
    collection,
  });
});

exports.deleteCollection = catchAsync(async (req, res, next) => {
  const metadata_id = req.body.metadata_id;

  const collection = await Collection.deleteOne({ metadata_id });

  if (!collection) {
    return next(new AppError("No collection found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
  });
});
