
const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
 //we need to update the kh_server                                                                                
 const instance = new Razorpay({
  key_id: "rzp_test_BR6tPXm6pV8zRG", // YOUR RAZORPAY KEY
  key_secret: "qDl4gNkyPv8rEe7or1UDmUfX", // YOUR RAZORPAY SECRET
});
router.post("/orders", async (req, res) => {
  try {

    const options = {
      amount: req.body.KH_amount_tobepaid,
      currency: "INR",
      receipt: "receipt_order_74394", // should come from kitchenhamara site 

    };
    console.log(JSON.stringify(options));
    const order =  instance.orders.create(options,(err, order)=>{
      if(err){
        console.log(err)
      }else{
        console.log(order);
        res.json(order)
        // res.send(order_id);
      }
    });

    //if (!order) return res.status(500).send("Some error occured");

    //res.json(order); //interaction with the client

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
module.exports = router;

