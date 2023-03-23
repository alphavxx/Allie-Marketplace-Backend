const catchAsync = require("../utils/catchAsync.js");
const AppError = require("./../utils/appError.js");
const Collection = require("./../model/collectionModel");

exports.createCollection = catchAsync(async (req, res, next) => {

  const collection = await Collection.create(req.body);

  res.status(201).json({
    status: "success",
    collection,
  });
});

exports.getCollection = catchAsync(async (req, res, next) => {
  const metadata_id = req.params.metadata_id;

  const collection = await Collection.findOne({ metadata_id });

  if (!collection) {
    return next(new AppError("No collection found with that MetaData ID", 404));
  }

  res.status(200).json({
    status: "success",
    collection,
  });
});

exports.getCollections = catchAsync(async (req, res, next) => {
  const collection = await Collection.find();

  res.status(200).json({
    status: "success",
    collection,
  });
});

exports.editCollection = catchAsync(async (req, res, next) => {
  // This controller only needs to edit the files not any other data
  // Bcoz the other data all from the NFT itself

  req.body.files = [];

  if (req.files) {
    await req.files.files.forEach((el) => {
      req.body.files.push(`/img/collection-image/${el.filename}`);
    });
  }

  const collection = await Collection.find({ metadata_id });

  if (!collection) {
    return next(new AppError("No document found with that ID", 404));
  }

  const updatedCollection = await Collection.findOneAndUpdate(
    req.params.id,
    req.body
  );

  res.status(201).json({
    status: "success",
    updatedCollection,
  });
});

exports.deleteCollection = catchAsync(async (req, res, next) => {
  const metadata_id = req.params.metadata_id;

  const isCollection = await Collection.findOne({ metadata_id });

  if (!isCollection) {
    return next(new AppError("No document found with that ID", 404));
  }

  const collection = await Collection.deleteOne({ metadata_id });

  res.status(204).json({
    status: "success",
    msg: "Collection Deleted",
    collection,
  });
});
