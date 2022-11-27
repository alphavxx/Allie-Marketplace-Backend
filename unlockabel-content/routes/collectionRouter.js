const express = require("express");
const authController = require("../controller/authController.js");
const collectionController = require("../controller/collectionController.js");
const fileUpload = require("../utils/fileUpload.js");
const router = express.Router();

// To display the all collections without the content files
router.get("/", collectionController.getCollections);

// to get the single collections (used post here to the data to verify the user owns that NFT or not)
router.post(
  "/:metadata_id",
  authController.protect,
  authController.isNFTOwned,
  collectionController.getCollection
);

router.post(
  "/addCollection",
  authController.protect,
  authController.isAdmin,
  fileUpload.uploadFile,
  collectionController.createCollection
);

// router.delete("/deleteCollection", authController.protect, authController.isAdmin, collectionController.deleteCollection);

// router.patch(
//   "/:id",
//   authController.protect,
//   authController.isAdmin,
//   fileUpload.uploadFile,
//   collectionController.editCollection
// );

module.exports = router;
