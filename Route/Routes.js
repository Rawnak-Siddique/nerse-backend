import Express from 'express';
import { createsProfile, 
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
         getSelectedNurse,
         CreateDoctor,
         getDoctor,
         getSelectedDoctor,
         createCareGiver,
         getCareGiver,
         CreateDaycare,
         getDaycare,
         CreateDocumentary,
         getDocumentary } from '../Controller/Controller.js';

const routes = Express.Router();

routes.post('/create-profile', createsProfile);

routes.get('/get-profile', getsProfile);

routes.post('/create-staffs', createsStaffs);

routes.get('/find-staffs', findStaffs);

routes.get('/get-staffs/:id', getsStaffs);

routes.post('/create-credit-card', createCreditID);

routes.get('/get-Card-number/:id', getCreditID);

routes.post("/create-payment-record", createPaymentRecord);

routes.get('/get-Customer-History/:id', getCustomerHistory);

routes.get('/gets-Staffs-History/:id', getsStaffsHistory);

routes.get('/get-Service-History/:id', getServiceHistory);

routes.post("/create-Service", createService);

routes.get("/get-Service", getService);

routes.get('/get-Services-By-Provider/:id', getServicesByProvider);

routes.get('/get-Services-By-Type/:type', getServicesByType);

routes.post("/create-Donation", createDonation);

routes.get("/get-Donation", getDonation);

routes.post("/create-Renter", createRenter);

routes.get("/get-Renter", getRenter);

routes.post("/Create-Nurse", CreateNurse);

routes.get("/get-Nurse", getNurse);

routes.get("/get-Selected-Nurse/:id", getSelectedNurse);

routes.post("/Create-Doctor", CreateDoctor);

routes.get("/get-Doctor", getDoctor);

routes.get("/get-Selected-Doctor/:id", getSelectedDoctor);

routes.post("/create-Care-Giver", createCareGiver);

routes.get("/get-Care-Giver", getCareGiver);

routes.post("/Create-Daycare", CreateDaycare);

routes.get("/get-Daycare", getDaycare);

routes.post("/Create-Documentary", CreateDocumentary);

routes.get("/get-Documentary", getDocumentary);

export default routes;