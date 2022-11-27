const catchAsync = require("../utils/catchAsync.js");
const Collection = require("./../model/collectionModel");
// Fake Data
const data = require("./../fake-data/collectionData");

exports.getCollection = catchAsync(async (req, res, next) => {
  const metadata_id = req.params.metadata_id;

  // console.log(metadata_id);

  // const collection = await data.collections.filter((obj) => {
  //   return obj.metadata_id === metadata_id;
  // });

  // console.log("raw : ", data.collections);
  // console.log("singel : ", collection);

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
  // this collection only needds to be created buy process.env.OWNER_WALLET (if  Allie then her wallet ID)

  // if (req.file) {
  //   req.body.photo = {
  //     imgData:  fs.readFileSync(`public/img/uploaded/${req.file.filename}`),
  //     contentType: 'image/jpeg'
  //   }
  // }
  const collection = await Collection.create(req.body);

  res.status(201).json({
    status: "success",
    collection,
  });
});
