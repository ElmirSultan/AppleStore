import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    productCategory: {
      type: String,
      required: true,
    },
    categoryscategory:{
      type:String
    },
    oldPrice: {
      type: Number,
      required: true,
    },
    newPrice: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    cpu:{type:String},
    display:{type:String},
    batteryLife:{type:String},
    usb:{type:String},
    weight:{type:String},
    about:{type:String},
    frontCamera:{type:String},
    backCamera:{type:String},
    storage:{type:String}
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
