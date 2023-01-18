import {profilesModel, 
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
        DocumentaryModel} from '../Model/Models.js';

const createsProfile = async (req, res) => {
    const { userName, fullName, img, email, password, address, type } = req.body;
    
    const CreatedProfile = await profilesModel.create({
        userName, fullName, img, email, password, address, type
    });

    if (CreatedProfile) {
        res.send(CreatedProfile);
    }else {
        res.status(500).send("Unsuccessful");
    }
};

const getsProfile = async (req, res) => {
    const { email, password } = req.body;

    const Profile = await profilesModel.find({
        email: email,
        password: password
    });

    if (Profile.length > 0) {
        res.send(Profile);
    }else {
        res.status(404).send("profile not found");
    }
};

const createsStaffs = async (req, res) => {
    const { name, img, occupation, description, CreditCardID, servicesId, certification } = req.body;

    const CreatedStaff = await staffsModel.create({
        name, img, occupation, description, CreditCardID, servicesId, certification
    });
    
    if (CreatedStaff) {
        res.send(CreatedStaff);
    }else {
        res.status(500).send("Unsuccessful");
    }
};

const findStaffs = async (req, res) => {
    const staffsCards = await staffsModel.find();

    if (staffsCards.length > 0) {
        res.send(staffsCards);
    }else {
        res.status(404).send("No staffs found");
    }
};

const getsStaffs = async (req, res) => {
    const id = req.params.id;
    const staffsCards = await staffsModel.find({
        _id: id
    });

    if (staffsCards.length > 0) {
        res.send(staffsCards);
    }else {
        res.status(404).send("No staffs found");
    }
};

const createCreditID = async (req, res) => {
    const { UserID, CardNumber } = req.body;

    const CreateCreditNumber = await CreditCardModel.create({
        UserID, CardNumber
    });

    if (CreateCreditNumber) {
        res.send(CreateCreditNumber);
    }else {
        res.status(500).send("Unsuccessful");
    }
};

const getCreditID = async (req, res) => {
    const id = req.params.id;
    const CreditCard = await CreditCardModel.find({
        _id: id
    });

    if (CreditCard.length > 0) {
        res.send(CreditCard);
    }else {
        res.status(404).send("No card found");
    }
};

const createPaymentRecord = async (req, res) => {
    const { FromUserID, PaidUserID, TransactionId, ServiceName, Amount } = req.body;

    const CreatePaymentRecord = await TransactionModel.create({
        FromUserID, PaidUserID, TransactionId, ServiceName, Amount
    });
    if (CreatePaymentRecord) {
        res.send(CreatePaymentRecord);
    }else {
        res.status(500).send("Unsuccessful");
    }
};

const getCustomerHistory = async (req, res) => {
    const id = req.params.id;

    const CustomerHistory = await TransactionModel.find({
        FromUserID: id
    });
    if (CustomerHistory.length > 0) {
        res.send(CustomerHistory);
    }else {
        res.status(404).send("No History found");
    }
};

const getsStaffsHistory = async (req, res) => {
    const id = req.params.id;

    const StaffsHistory = await TransactionModel.find({
        PaidUserID: id
    });
    if (StaffsHistory.length > 0) {
        res.send(StaffsHistory);
    }else {
        res.status(404).send("No History found");
    }
};

const getServiceHistory = async (req, res) => {
    const id = req.params.id;

    const ServicesHistory = await TransactionModel.find({
        ServiceName: id
    });
    if (ServicesHistory.length > 0) {
        res.send(ServicesHistory);
    }else {
        res.status(404).send("No History found");
    }
}

const createService = async (req, res) => {
    const { ServiceName,ServiceType, Description, Price, Img, ServicesProviderId } = req.body;

    const CreateService = await ServiceModel.create({
        ServiceName, ServiceType, Description, Price, Img, ServicesProviderId
    });
    if (CreateService) {
        res.send(CreateService);
    }else {
        res.status(500).send("Unsuccessful");
    }
};

const getService = async (req, res) => {
    const ListOfServices = await ServiceModel.find();
    if (ListOfServices.length > 0) {
        res.send(ListOfServices);
    }else {
        res.status(404).send("No Service found");
    }
};

const getServicesByProvider = async (req, res) => {
    const id = req.params.id;
    const ListOfServices = await ServiceModel.find({
        ServicesProviderId: id
    });
    if (ListOfServices.length > 0) {
        res.send(ListOfServices);
    }else {
        res.status(404).send("No Service found");
    }
};

const getServicesByType = async (req, res) => {
    const type = req.params.type;
    const ListOfServices = await ServiceModel.find({
        ServiceType: type
    });
    if (ListOfServices.length > 0) {
        res.send(ListOfServices);
    }else {
        res.status(404).send("No Service found");
    }
};

const createDonation = async (req, res) => {
    const { Email, Phone, CardNumber, DonationAmount } = req.body;

    const CreateDonation = await DonationModel.create({
        Email, Phone, CardNumber, DonationAmount
    });
    if (CreateDonation) {
        res.send(CreateDonation);
    }else {
        res.status(500).send("Unsuccessful");
    }
};

const getDonation = async (req, res) => {
    const ListOfDonation = await DonationModel.find();

    if(ListOfDonation.length > 0) {
        res.send(ListOfDonation);
    } else {
        res.status(500).send("List not found");
    }
};

const createRenter = async (req, res) => {
    const { name, address, city, RelativePhoneNumber, PhoneNumber, StartingDate, EndingDate, PackageType } = req.body;

    const CreatedRenter = await RenterModel.create({ 
        name, address, city, RelativePhoneNumber, PhoneNumber, StartingDate, EndingDate, PackageType 
    });
    if (CreatedRenter) {
        res.send(CreatedRenter);
    } else {
        res.status(500).send("Unsuccessful");
    }
};

const getRenter = async (req, res) => {
    const ListOfRenter = await RenterModel.find();
    if(ListOfRenter.length > 0) {
        res.send(ListOfRenter);
    } else {
        res.status(500).send("List not found");
    }
};

const CreateNurse = async (req, res) => {
    const { NurseName, email, phone, address, city, description, status, Img, certification } = req.body;

    const CreatedNurse = await NurseModel.create({
        NurseName, email, phone, address, city, description, status, Img, certification
    });
    if (CreatedNurse) {
        res.send(CreatedNurse);
    } else {
        res.status(500).send("Unsuccessful");
    }
};

const getNurse = async (req, res) => {
    const ListOfNurse = await NurseModel.find();
    if(ListOfNurse.length > 0) {
        res.send(ListOfNurse);
    } else {
        res.status(500).send("List not found");
    }
};

const CreateDoctor = async (req, res) => {
    const { DoctorName, phone, email, description, Img, certification } = req.body;

    const CreatedDoctor = await DoctorModel.create({ 
        DoctorName, phone, email, description, Img, certification 
    });
    if (CreatedDoctor) {
        res.send(CreatedDoctor);
    } else {
        res.status(500).send("Unsuccessful");
    }
};

const getDoctor = async (req, res) => {
    const ListOfDoctor = await DoctorModel.find();
    if(ListOfDoctor.length > 0) {
        res.send(ListOfDoctor);
    } else {
        res.status(500).send("List not found");
    }
};

const createCareGiver = async (req, res) => {
    const { name, email, phone, description, status, Img, certification } = req.body;

    const CreatedCareGiver = await CareGiverModel.create({ 
        name, email, phone, description, status, Img, certification
    });
    if (CreatedCareGiver) {
        res.send(CreatedCareGiver);
    } else {
        res.status(500).send("Unsuccessful");
    }
};

const getCareGiver = async (req, res) => {
    const ListOfCareGiver = await CareGiverModel.find();
    if(ListOfCareGiver.length > 0) {
        res.send(ListOfCareGiver);
    } else {
        res.status(500).send("List not found");
    }
};

const CreateDaycare = async (req, res) => {
    const { name, phone, email, city, duration, certification } = req.body;

    const CreatedDaycare = await DaycareModel.create({
        name, phone, email, city, duration, certification
    });
    if (CreatedDaycare) {
        res.send(CreatedDaycare);
    } else {
        res.status(500).send("Unsuccessful");
    }
};

const getDaycare = async (req, res) => {
    const ListOfDaycare = await DaycareModel.find();
    if(ListOfDaycare.length > 0) {
        res.send(ListOfDaycare);
    } else {
        res.status(500).send("List not found");
    }
};

const CreateDocumentary = async (req, res) => {
    const { name, details, link } = req.body;

    const CreatedDocumentary = await DocumentaryModel.create({
        name, details, link
    });
    if (CreatedDocumentary) {
        res.send(CreatedDocumentary);
    } else {
        res.status(500).send("Unsuccessful");
    }
};

const getDocumentary = async (req, res) => {
    const ListOfDocumentary = await DocumentaryModel.find();
    if(ListOfDocumentary.length > 0) {
        res.send(ListOfDocumentary);
    } else {
        res.status(500).send("List not found");
    }
};


export { createsProfile, 
         getsProfile,
         createsStaffs,
         findStaffs,
         getsStaffs,
         createCreditID,
         getCreditID,
         createPaymentRecord,
         getCustomerHistory,
         getsStaffsHistory,
         getServiceHistory,
         createService,
         getService,
         getServicesByProvider,
         getServicesByType,
         createDonation,
         getDonation,
         createRenter,
         getRenter,
         CreateNurse,
         getNurse,
         CreateDoctor,
         getDoctor,
         createCareGiver,
         getCareGiver,
         CreateDaycare,
         getDaycare,
         CreateDocumentary,
         getDocumentary };