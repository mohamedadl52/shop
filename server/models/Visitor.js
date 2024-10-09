const mongoose = require('mongoose');

// تعريف هيكل موديل الزائر
const visitorSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0 // القيمة الافتراضية لعدد الزوار
  }
});

// تعريف موديل الزائر باستخدام الهيكل السابق
const Visitor = mongoose.model('Visitor', visitorSchema);

module.exports = Visitor;
