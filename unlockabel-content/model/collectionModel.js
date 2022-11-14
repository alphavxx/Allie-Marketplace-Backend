const mongoose = require("mongoose");
const slugify = require("slugify");

const collectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide collection name"],
    unique: true,
    trim: true,
  },
  slug: {
    type: String,
  },
  description: {
    type: String,
  },
  nftID: {
    type: String,
    required: [
      true,
      "Without NFT ID the collection can't be create. Please provide nft id",
    ],
    unique: true,
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'A collection must have a price'],
  },
  media: [String],
});

collectionSchema.index({ slug: 1 });

collectionSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;
