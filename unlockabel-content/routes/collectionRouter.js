const express = require("express");
const authController = require("../controller/authController.js");
const collectionController = require("../controller/collectionController.js");
const fileUpload = require("../utils/fileUpload.js");
const router = express.Router();

// for API (Have to remove later)
router.post(
  "/addCollection",
  fileUpload.uploadFiles,
  collectionController.formatImages,
  collectionController.createCollection
);

router.delete("/deleteCollection", collectionController.deleteCollection);

// For APP

// To display the all collections without the content files
router.get("/", collectionController.getCollections);

// to get the single collections (used post here to the data to verify the user owns that NFT or not)
router.post(
  "/:metadata_id",
  authController.protect,
  authController.isNFTOwned,
  collectionController.getCollection
);

// For Admin Access
router.post(
  "/addCollection",
  authController.protect,
  authController.isAdmin,
  fileUpload.uploadFiles,
  collectionController.formatImages,
  collectionController.createCollection
);

// PATCH to edit the collection
router.patch(
  "/:metadata_id",
  authController.protect,
  authController.isAdmin,
  fileUpload.uploadFiles,
  collectionController.editCollection
);

router.delete(
  "/:metadata_id",
  authController.protect,
  authController.isAdmin,
  collectionController.deleteCollection
);

module.exports = router;
