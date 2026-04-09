const functions = require("firebase-functions");
const axios = require("axios");
const admin = require("firebase-admin");

admin.initializeApp();

exports.verifyPaystack = functions.https.onCall(async (data, context) => {
  
  const reference = data.reference;
  
  const response = await axios.get(
    `https://api.paystack.co/transaction/verify/${reference}`,
    {
      headers: {
        Authorization: `Bearer YOUR_SECRET_KEY`
      }
    }
  );
  
  const result = response.data.data;
  
  if (result.status === "success") {
    
    const receiptRef = admin.database().ref(`receipts/${studentID}`).push();
    
    await receiptRef.set({
  studentID: result.metadata?.studentID || "UNKNOWN",
  name: result.metadata?.name || "Unknown Student",
  amount: result.amount / 100,
  reference: result.reference,
  status: result.status,
  paidAt: result.paid_at || new Date().toISOString(),
  channel: result.channel || "unknown",
  currency: result.currency || "NGN"
});
    
    return { success: true };
    
  } else {
    return { success: false };
  }
});