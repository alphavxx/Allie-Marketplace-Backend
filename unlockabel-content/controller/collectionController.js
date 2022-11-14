const catchAsync = require('../utils/catchAsync.js');

// Fake Data
const data = require("./../fake-data/collectionData");

exports.createCollection = catchAsync(async (req, res, next) => {

  // this collection only needds to be created buy process.env.OWNER_WALLET (if  Allie then her wallet ID)

  if (req.file) {
    req.body.photo = {
      imgData:  fs.readFileSync(`public/img/uploaded/${req.file.filename}`),
      contentType: 'image/jpeg'
    }
  }
  const collection = await collection.create(req.body);

  res.status(201).json({
    status: 'success',
    collection,
  });

});

exports.getCollection = catchAsync(async (req, res, next) => {

  // add a aggregation pipeline to remove the file data from database and send to user for only view function

  if(req.param.slug){

    const slug = req.params.slug;

    // const collection = await Collection.findOne({ slug: slug}).populate('media');
  
    const collection =  await data.collections[1];

    if (!collection) {
      return next(
        new AppError("No collection found with that collection Name", 404)
      );
    }
  
    res.status(200).json({
      status: 'success',
      collection,
    });
    
  }

  const collections =  await data.collections;


  res.status(201).json({
    collections,
  });

});
  