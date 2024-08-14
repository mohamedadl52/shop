const { json } = require('body-parser');
const mongoose = require('mongoose');
const Product = require("../models/products")
const catogresss = require("../models/catogres")
const user = require("../models/user")
const faker = require("faker")
const cloudinary = require('cloudinary').v2
var axios = require("axios").default;
var catogress  =  require('../config/control.catogress')
// var ImageKit = require("imagekit");
cloudinary.config({ 
                            
                        cloud_name: 'dekh1kgki', 
                       api_key: '719669252214716', 
                        api_secret: '2kArDtlF1XjteFo3PX0YsnjVTCo'  ,
                      secure: true
                       })
                        
// let imageKit = new ImageKit({
//   publicKey : "public_hZ/JvPqU+rs3EP/MZhS9NTXbey8=",
//   privateKey : "private_88hk+hLT8plIFeicsVF8aryjbhc=",
//   urlEndpoint : "https://ik.imagekit.io/rtibtwyp6t"
// });
exports.getProduct = (req, res) =>{

// axios.get('https://ipwhois.app/json/').then(function (response) {
//      console.log(response.data);
//   }).catch(function () {
//      console.error("error");
//   })

// const filterProduct = async ()=>{

//   const cat = await catogresss.findOne({type :'خدمات الكترونيه'})
//   //  console.log(cat._id)
//    let prro = await Product.find({catogres : cat._id})

//    return prro
  
// }
// filterProduct().then(pro=>{
//   console.log(pro)
// })
 Product.find({})

.populate({
  path :  "catogres" }).exec(function(err,orders) {
    // populated and filtered twice
    res.json(orders)
    console.log(err)
    }
    )
   

}

exports.getOneProduct = (req, res) =>{
  
const products =  Product.findById(req.params.id , function (err, doc) {
  
  res.json(doc)
  
})
}
exports.create = (req, res) => {
    console.log(req.files)
  
    const ProductrData = new Product({
      title :     req.body.title ,
      img_url :   imgUrls ,
      price :     req.body.price , 
      catogres : req.body.catogres , 
      description : req.body.description , 
      qyt : req.body.qyt  
        });

        
        
        // Save Tutorial in the database
        // catogress.find({ type : req.body.catogres }).then((res)=>{
          //        return catogress.findById(req.body.catogres).then((product)=>{
            //       return  catogress.findByIdAndUpdate(product.id , {Number :  product.Number + 1 })
            
            //        }).catch(err=> console.log(err))
            
            // }).catch(err=>{
              //   console.log(err)
              // })
              
              catogress.updateCatogress(req)
              
              ProductrData.save()
              
              .then(()=>{
                
               
                        
                        // imageKit.url({
                        //   path : req.file.path,
                        //   urlEndpoint : "https://ik.imagekit.io/rtibtwyp6t/",
                        //   transformation : [{
                        //       "height" : "300",
                        //       "width" : "400"
                        //   }]
                        // });
                      
                      // console.log(req.file.filename)
      // imageKit.upload({
      //   file: req.file,
      //   fileName: req.file.filename,   //required
      
      // }, function(error, result) {
      //   if(error) console.log(error);
      //   else console.log(result);
      // });
                req.files.map(file => {
            return cloudinary.uploader.upload(file.path , {public_id : file.filename} , function(error, result) {console.log(result, error)});
                  
               });
                      
                        
    }).then(data => {

      return res.json(data)

    })
      
    .catch(err => {
    
      console.log(err)
    
    });

      // Create a Tutorial

    };

exports.deleteOneProduct = (req,res)=>{

  products = Product.findByIdAndDelete(req.params.id , function (err, doc) {

    res.json({'deleted' : true })

  })

}

exports.updateProduct = (req,res)=>{
if(req.files) {
  const imgUrls = req.files.map(file => {
    return file.filename; // Assuming Multer saves the files in the 'path' property
});
} 
  

return Product.findByIdAndUpdate(req.params.id, {

  price : req.body.price , 
  title : req.body.title  ,   
  description : req.body.description, 
  qyt : req.body.qyt   , 
  img_url : if (imgUrls) return imgUrls || req.body.files,
  catogres : req.body.catogres 

  }).then((product)=>{
    
    product.price = req.body.price 
    product.title = req.body.title  
    product.description = req.body.description  
    product.qyt = req.body.qyt  
    product.img_url =   imgUrls 
    product.catogres =   req.body.catogres 
   
    
    cloudinary.config({ 
                            
      cloud_name: 'dekh1kgki', 
      api_key: '719669252214716', 
      api_secret: '2kArDtlF1XjteFo3PX0YsnjVTCo'  ,
      secure: true
    })
    if(req.files) {
req.files.map(file => {
      return cloudinary.uploader.upload(file.path , {public_id : file.filename} , function(error, result) {console.log(result, error)});
            
         });
      
    } 
    
    res.json(product)
  
  }).catch(err=>{
  
    res.json(err)
  
  })

}

exports.filterProduct  = (req, res)=>{

  const filterProduct = async ()=>{

  const cat = await catogresss.findOne({type :req.body.catogry})
  //  console.log(cat._id)
   let prro = await Product.find({catogres : cat._id})

   return prro
  
}
filterProduct().then(pro=>{
  console.log(pro)
})

}
