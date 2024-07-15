const catogress = require('../models/catogres')
exports.updateCatogress = (req)=>{

    catogress.find({ type : req.body.catogres }).then((res)=>{
        return catogress.findById(req.body.catogres).then((product)=>{
       return  catogress.findByIdAndUpdate(product.id , {Number :  product.Number + 1 })
    
        }).catch(err=> console.log(err))
    
    }).catch(err=>{
    console.log(err)
    })
    
}
exports.DeleteCatogress = (req)=>{
    // catogress.find({ type : req.body.catogres }).then((res)=>{
    //   return catogress.findById(req.body.catogres).then((product)=>{
    //   return  catogress.findByIdAndUpdate(product.id , {Number :  product.Number - 1 })
         
    //   }).catch(err=> console.log(err))
    
    // }).catch(err=>{
    //   console.log(err)
    // })
    
}