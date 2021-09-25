const mongoose = require ('mongoose')

const {schema} =  mongoose;

const categorySchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: tru
      }
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category;
