const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51J8LYNEW5QikskUQUZ0MxLULqEzstc6cHXHohV9n8Hd3CCG5I9B8sjDkzTm1jwAoOlJ4R1icia8CDKEF38QLz6Gl00ZrAov5o6")

             // API setup//////
               ///////////

//-App config
const app =express();

//-Middlewares
app.use(cors({origin:true}));
app.use(express.json());

//-API Routs
app.get('/',(request,response)=> response.status(200).send('hello world'));

app.post('/payments/create', async(request,response) =>{
   const total = request.query.total;

   console.log('payment request recieved Boom!!!', total )

   const paymentIntent = await stripe.paymentIntents.create({
      amount:total,
      currency:"usd"
   });
   // ok -created
   response.status(201).send({
      clientSecret: paymentIntent.client_secret
   })
})

//-Listen Command
exports.api =  functions.https.onRequest(app);

// endpoint
// http://localhost:5001/clone-b56b2/us-central1/api


 