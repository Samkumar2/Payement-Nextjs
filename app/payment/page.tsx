"use client";
import React,{useState} from "react";
import Script from "next/script";




declare global{
  interface Window{
    Razorpay:any;
  }
}

const PayementPage =( ) =>{
    const AMOUNT = 100;
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePayement = async () => {
      setIsProcessing(true);

      try{
        const response = await fetch( "/api/create-order",{ method:"POST"});
        const data = await response.json();

        const options = {
          
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: AMOUNT * 100,
          currency: "INR",
          name: "STREBEN TECHNIK",
          description: "For Test Transaction",
          order_id: data.orderId,
          handler: function(response:any){
            console.log("Payement Successfull",response);

          },
    

         theme:{
          color:"#3399cc ",
         },
        };

          const rzp1 = new window.Razorpay(options);
          rzp1.open();

      }
      catch(eroor){
        console.error("Payement failed",eroor);

      }
      finally{
        setIsProcessing(false);
      }
    };

    return(
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Script src="https://checkout.razorpay.com/v1/checkout.js"/>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Payement Page</h1>
        <p className="mb-4">Amount to pay: {AMOUNT} INR</p>
        
        <button
        onClick={handlePayement}
        disabled={isProcessing}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-500 disabled:bg-gray-400"
        >
          {isProcessing ? "Proceesing ...": "PayNow"}
        </button>
      </div>

      </div>
    );
};
export default PayementPage ;