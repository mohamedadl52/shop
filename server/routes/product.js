const router = require('express').Router()
const UserConroller = require("../controller/product")
const multer = require("multer")
const path = require('path')

// SDK initialization

// var ImageKit = require("imagekit");

// var imagekit = new ImageKit({
//     publicKey : "public_hZ/JvPqU+rs3EP/MZhS9NTXbey8=",
//     privateKey : "private_88hk+hLT8p******************",
//     urlEndpoint : "https://ik.imagekit.io/rtibtwyp6t"
// });

const storage = multer.diskStorage({destination : (req,file, cb)=>{

  cb(null , __dirname + '../../../client/src/assets/uploads')
} , filename :(req,file,cb)=>{
    const fileName =  Date.now() + file.originalname.toLowerCase().split(' ').join('-');
    cb(null, fileName)
  
}})
var upload = multer({
  
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);

        
        // var imageURL = imagekit.url({
        //   path : "",
        //   urlEndpoint : "https://ik.imagekit.io/rtibtwyp6t/nodetest",
        //   transformation : [{
        //       "height" : "300",
        //       "width" : "400"
        //   }]
        // });
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});

    router.get('/', UserConroller.getProduct )
    router.put('/updateProduct/:id', upload.single('fileImg') , UserConroller.updateProduct )
    router.get('/:id', UserConroller.getOneProduct )
    router.delete('/:id', UserConroller.deleteOneProduct )
    router.post('/', upload.single('fileImg') , UserConroller.create )


module.exports = router;