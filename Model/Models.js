import Mongoose from 'mongoose';

const profilesSchema = Mongoose.Schema({
    userName: {
        type: String
    },
    fullName: {
        type: String
    }, 
    img: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    address: {
        type: String
    },
    type: {
        type: String
    }
});

const staffsSchema = Mongoose.Schema({
    name: {
        type: String
    },
    occupation: {
        type: String
    },
    description: {
        type: String
    },
    certification: [String]
});


const profilesModel = Mongoose.model("Profiles", profilesSchema);
const staffsModel = Mongoose.model("Staffs",staffsSchema);

export { profilesModel, staffsModel };