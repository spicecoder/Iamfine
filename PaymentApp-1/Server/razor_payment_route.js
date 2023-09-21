
const express = require('express');
// const COLLECTION_NAME = 'payment';
// var payment_collection = "";
//shall connect to mongo db 
// const setDb = (db) => {
//   payment_collection = db.collection(COLLECTION_NAME);
// };

/* payload from client 
  {
        KH_OrderId: `${kh_orderIdparams}`,
        KH_ConsumerId: `${kh_consumerIdparams}`,
        KH_cook: `${kh_cookparams}`,
        KH_amount_tobepaid:`${amountparams}`
      })
*/
var router = Express().router;
const setRouter = (router) => 
{
router.post("/orders", async (req, res) => {
  try {

    //we need to update the kh_server                                                                                
    const instance = new Razorpay({
      key_id: "rzp_test_BR6tPXm6pV8zRG", // YOUR RAZORPAY KEY
      key_secret: "qDl4gNkyPv8rEe7or1UDmUfX", // YOUR RAZORPAY SECRET
    });

    const options = {
      amount: req.body.KH_amount_tobepaid,
      currency: "INR",
      receipt: "receipt_order_74394", // should come from kitchenhamara site 

    };
    console.log(JSON.stringify(options));
    const order = await instance.orders.create(options,(err, order)=>{
      if(err){
        console.log(err)
      }else{
        console.log(order);
        // res.send(order_id);
      }
    });

    if (!order) return res.status(500).send("Some error occured");

    res.json(order); //interaction with the client
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/success", async (req, res) => {
  try {
    const {
      orderCreationId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
    } = req.body;

  

    const shasum = crypto.createHmac("sha256", "<YOUR RAZORPAY SECRET>");
    shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
    const digest = shasum.digest("hex");

    if (digest !== razorpaySignature)
      return res.status(400).json({ msg: "Transaction not legit!" });

    const PaymentDetails= {
      razorpayDetails: {
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
        signature: razorpaySignature,
      },
      success: true,
    };
    console.log('success payment to be lodged on kh :', PaymentDetails );
    // await newPayment.save(); Need to save to the mongoDB

    res.json({
      msg: "success",
      orderId: razorpayOrderId,
      paymentId: razorpayPaymentId,
    })
    console.log(JSON.stringify(res.json));
  } catch (error) {
    res.status(500).send(error);
  }
});
return(router);
}

exports.router = router;
exports.setRouter = setRouter;
