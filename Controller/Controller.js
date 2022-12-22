import {profilesModel, staffsModel} from '../Model/Models.js';

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
    const { name, occupation, description, certification } = req.body;

    const CreatedStaff = await staffsModel.create({
        name, occupation, description, certification
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

export {createsProfile, getsProfile, createsStaffs, findStaffs, getsStaffs};