const Collection = require("../model/collectionModel.js");

const catchAsync = require("../utils/catchAsync.js");
const data = require("./../fake-data/collectionData");

exports.homePage = catchAsync(async (req, res, next) => {
  const collections = await data.collections;

  res.status(200).render("home", { collections });
});

exports.getCollectionPage = catchAsync(async (req, res, next) => {

  // const collection = await data.collections.filter(obj => {
  //   return obj.slug === slug
  // });

  const collection = await data.collections[1];

  if (!collection) {
    return next(
      new AppError("No collection found with that collection Name", 404)
    );
  }

  res.status(200).render("collectionPage", { collection });
});

exports.mePage =  catchAsync(async (req, res, next) => {
  const slug = req.params.slug;

  const collection = await data.collections[1];

  if (!collection) {
    return next(
      new AppError("No collection found with that collection Name", 404)
    );
  }

  res.status(200).render("collectionPage", { collection });
});
