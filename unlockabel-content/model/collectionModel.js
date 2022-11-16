const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide collection name"],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
  },
  metadata_id: {
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

collectionSchema.index({ metadata_id: 1 });

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;
