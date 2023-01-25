const RenterModel=require('../Model/Models.js');

const stripe = require('stripe')(process.env.Stripe_Api_Key);

export const getCheckoutSession = async (req, res) => {

    const renterID = res.params.renterID;
    const Renter = await RenterModel.findById(renterID);

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        success_url: '',
        cancel_url: '',
        client_reference_Id: req.params.renterID,
        line_items: [
            {
                name: `${Renter.name} Renter`,
                description: Renter.FeaturesLists,
                images: [`${Renter.Img}`],
                amount: Renter.Price * 100,
                currency: 'usd',
                quantity: 1
            }
        ]
    });
    res.status(200).json({
        status: 'success',
        session
    });
};

export getCheckoutSession;