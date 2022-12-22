import Mongoose from "mongoose";

const connectDB = async () => {
    try {
        await Mongoose.connect(process.env.MongoDB1, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Server connected successfully")
        });
    } catch (error) {
        console.log(`Error connecting to Mongoose: ${error.message}`);
    }
};

export default connectDB;