import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        //referencing a specific model for this objectId
        ref: 'User'
    },
}, {
    timestamps: true
})

// creating a user schema
const productSchema = mongoose.Schema({
    // creating a relationship between the product and the user
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        //referencing a specific model for this objectId
        ref: 'User'
    },
    name:{
        type:String,
        required: true
    },
    image:{
        type:String,
        required: true
    },
    brand:{
        type:String,
        required: true
    },
    category:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    reviews: [reviewSchema],
    rating:{
        type:Number,
        required: true,
        default: 0
    },
    numReviews:{
        type:Number,
        required: true,
        default: 0
    },
    price:{
        type:Number,
        required: true,
        default: 0
    },
    countInStock:{
        type:Number,
        required: true,
        default: 0
    },
}, 
{
    // creates fields automatically
    timestamps:true
})

// creating a model from the schema
const Product = mongoose.model('Product', productSchema)

export default Product