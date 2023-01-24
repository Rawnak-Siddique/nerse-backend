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
    city: {
        type: String
    },
    type: {
        type: String
    },
});

const staffsSchema = Mongoose.Schema({
    name: {
        type: String
    },
    img: {
        type: String
    },
    occupation: {
        type: String
    },
    description: {
        type: String
    },
    CreditCardID: {
        type: String
    },
    servicesId: [String],
    certification: [String],
});

const TransactionSchema = Mongoose.Schema({
    FromUserID : {
        type: String
    },
    PaidUserID: {
        type: String
    },
    TransactionId: {
        type: String
    },
    ServiceName: {
        type: String
    },
    Amount: {
        type: String
    },
    
});

const CreditCardSchema = Mongoose.Schema({
    UserID: {
        type: String
    },
    CardNumber: {
        type: String
    },
});

const FeaturesSchema = Mongoose.Schema({
    features: {
        type: String
    },
});

const ServiceSchema = Mongoose.Schema({
    ServiceName: {
        type: String
    },
    ServiceType: {
        type: String
    },
    Description: {
        type: String
    },
    Price: {
        type: String
    },
    Img: {
        type: String
    },
    ServicesProviderId: {
        type: String
    },
    FeaturesLists: [FeaturesSchema],
});

const DonationSchema = Mongoose.Schema({
    Email: {
        type: String
    },
    Phone: {
        type: String
    },
    CardNumber: {
        type: String
    },
    DonationAmount: {
        type: String
    },
});

const RenterSchema = Mongoose.Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    RelativePhoneNumber: {
        type: String
    },
    PhoneNumber: {
        type: String
    },
    Img: {
        type: String
    },
    StartingDate: {
        type: String
    },
    EndingDate: {
        type: String
    },
    PackageType: {
        type: String
    },
});

const NurseSchema = Mongoose.Schema({
    NurseName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: String
    },
    Img: {
        type: String
    },
    certification: [String],
});

const DoctorSchema = Mongoose.Schema({
    DoctorName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: String
    },
    Img: {
        type: String
    },
    certification: [String],
});

const CareGiverSchema = Mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: String
    },
    Img: {
        type: String
    },
    certification: [String],
});

const DaycareSchema = Mongoose.Schema({
    name: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    city: {
        type: String
    },
    duration: {
        type: String
    },
    certification: [String],
});

const DocumentarySchema = Mongoose.Schema({
    name: {
        type: String
    },
    details: {
        type: String
    },
    link: {
        type: String
    },
});

const BookingSchema = Mongoose.Schema({
    customerId: {
        type: String
    },
    servicesId: {
        type: String
    },
    providerId: {
        type: String
    },
    StartingDate: {
        type: String
    },
    EndingDate: {
        type: String
    },
});

const profilesModel = Mongoose.model("Profiles", profilesSchema);
const staffsModel = Mongoose.model("Staffs",staffsSchema);
const TransactionModel = Mongoose.model("Transaction",TransactionSchema);
const CreditCardModel = Mongoose.model("CreditCardInfo",CreditCardSchema);
const ServiceModel = Mongoose.model("Services", ServiceSchema);
const DonationModel = Mongoose.model("Donations", DonationSchema);
const RenterModel = Mongoose.model("Renters", RenterSchema);
const NurseModel = Mongoose.model("Nurses", NurseSchema);
const DoctorModel = Mongoose.model("Doctors", DoctorSchema);
const CareGiverModel = Mongoose.model("CareGiver", CareGiverSchema);
const DaycareModel = Mongoose.model("Daycare", DaycareSchema);
const DocumentaryModel = Mongoose.model("Documentaries", DocumentarySchema);
const BookingModel = Mongoose.model("Booking", BookingSchema);

export { profilesModel, 
         staffsModel, 
         TransactionModel, 
         CreditCardModel, 
         ServiceModel, 
         DonationModel,
         RenterModel,
         NurseModel,
         DoctorModel,
         CareGiverModel,
         DaycareModel,
         DocumentaryModel,
         BookingModel };