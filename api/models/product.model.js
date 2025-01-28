import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png",
    },
    startingPrice: {
      type: String,
      required: false, // Set to true if mandatory
    },
    motor: {
      type: String,
      required: false, // Set to true if mandatory
    },
    speed: {
      type: String,
      required: false,
    },
    brake: {
      type: String,
      required: false,
    },
    battery: {
      type: String,
      required: false,
    },
    range: {
      type: String,
      required: false,
    },
    instrument: {
      type: String,
      required: false,
    },
    tyre: {
      type: String,
      required: false,
    },
    additional: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
