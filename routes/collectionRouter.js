const express = require("express");
const authController = require("../controller/authController.js");
const collectionController = require("../controller/collectionController.js");
const router = express.Router();
// For APP

// To display the all collections without the content files
router.get("/", collectionController.getCollections);

// For Admin Access
router.post(
  "/addCollection",
  authController.connectedAccount,
  authController.isAdmin,
  collectionController.createCollection
);

// to get the single collections (used post here to the data to verify the user owns that NFT or not)
router.post(
  "/:metadata_id",
  authController.connectedAccount,
  authController.isNFTOwned,
  collectionController.getCollection
);

// PATCH to edit the collection
router.patch(
  "/:metadata_id",
  authController.connectedAccount,
  authController.isAdmin,
  collectionController.editCollection
);

router.delete(
  "/:metadata_id",
  authController.connectedAccount,
  authController.isAdmin,
  collectionController.deleteCollection
);

module.exports = router;
