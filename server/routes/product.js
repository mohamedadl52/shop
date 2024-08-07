const router = require('express').Router();
const UserConroller = require("../controller/product");
const multer = require("multer");
const path = require('path');

// SDK initialization

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + '/../public/img');
  },
  filename: (req, file, cb) => {
    const fileName = Date.now() + '-' + file.originalname.toLowerCase().split(' ').join('-');
    cb(null, fileName);
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg formats are allowed!'));
    }
  }
});

router.get('/', UserConroller.getProduct);
router.put('/updateProduct/:id', upload.array('fileImg', 5), UserConroller.updateProduct);
router.get('/:id', UserConroller.getOneProduct);
router.delete('/:id', UserConroller.deleteOneProduct);
router.post('/', upload.array('fileImg', 5), UserConroller.create);

module.exports = router;
