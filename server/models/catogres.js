const mongoose = require("mongoose");

const catogres = mongoose.model(

  "catogres",

  new mongoose.Schema({

    type : String , 

    Number : { type : Number , default   :   0}

  })

  );

module.exports = catogres;