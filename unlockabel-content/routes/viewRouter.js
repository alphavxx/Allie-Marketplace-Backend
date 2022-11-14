const express = require("express");
const viewController = require("../controller/viewsController.js");
const authController = require("../controller/authController.js");

const router = express.Router();

router.get("/", viewController.homePage);
//return collection page
router.get("/c/:slug",authController.protect,authController.isNFTOwned,viewController.getCollection);

// Later
// for connected user page
router.get("/me", authController.protect, authController.NFTsOwned, viewController.userPage);
// for Admin page
router.get("/admin", authController.protect, authController.isAdmin, userController.adminPage);
router.get("/collection", authController.protect, authController.isAdmin, userController.createCollectionPage);

module.exports = router;
