import Express from "express";
import Stripe from "stripe";
import {
  createsProfile,
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
  getSelectedService,
  getServicesByProvider,
  getServicesByType,
  createDonation,
  getDonation,
  createRenter,
  getRenter,
  getRenterById,
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
  getDocumentary,
  createBooking,
  getServicesBooking,
  getProviderBooking,
  getCustomerBooking,
} from "../Controller/Controller.js";

import { getCheckoutSession } from "../Controller/StripeApi.mjs";

const routes = Express.Router();

routes.post("/create-profile", createsProfile);

routes.post("/get-profile", getsProfile);

routes.post("/create-staffs", createsStaffs);

routes.get("/find-staffs", findStaffs);

routes.get("/get-staffs/:id", getsStaffs);

routes.post("/create-credit-card", createCreditID);

routes.get("/get-Card-number/:id", getCreditID);

routes.post("/create-payment-record", createPaymentRecord);

routes.get("/get-Customer-History/:id", getCustomerHistory);

routes.get("/gets-Staffs-History/:id", getsStaffsHistory);

routes.get("/get-Service-History/:id", getServiceHistory);

routes.post("/create-Service", createService);

routes.get("/get-Service", getService);

routes.get("/get-select-service/:id", getSelectedService);

routes.get("/get-Services-By-Provider/:id", getServicesByProvider);

routes.get("/get-Services-By-Type/:type", getServicesByType);

routes.post("/create-Donation", createDonation);

routes.get("/get-Donation", getDonation);

routes.post("/create-Renter", createRenter);

routes.get("/get-Renter", getRenter);

routes.get("/get-Renter/:id", getRenterById);

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

routes.post("/create-Booking", createBooking);

routes.get("/get-Services-Booking/:id", getServicesBooking);

routes.get("/get-Provider-Booking/:id", getProviderBooking);

routes.get("/get-Customer-Booking/:id", getCustomerBooking);

routes.get("/checkout-session/:renterID", getCheckoutSession);

const stripe = new Stripe(
  `sk_test_51MWJnHLLp5TfvpYyrGRsXnRgtBQzskW3NlBnGlLcqXoZeiwdWn1QOPPXwnfkTtRbrSbizv8M64E6y9nLYXDwPM3K00jjIWUyCw`
);

routes.post("/create-payment-intent", async (req, res) => {
  const payment = req.body;
  const price = payment.price;
  const amount = price * 100;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"] /*  */,
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

export default routes;
