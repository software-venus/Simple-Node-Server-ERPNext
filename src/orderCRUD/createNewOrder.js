const axios = require('axios');

const createOrderCtr = async (req, res) => {
  const orderData = req.body;
  console.log("Sending Create Orders request from Node with :", orderData);
  try {
      const response = await axios.post(
        'https://testwebapp.ctgalega.com/api/resource/Sales%20Order', orderData, {
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Cookie': [ 'sid=fa975975f3c17ae7d1e355cdbfbe7926ed87024d86380a4ff9864a71; Expires=Tue, 25 Mar 2025 06:06:06 GMT; Max-Age=612000; Secure; HttpOnly; Path=/; SameSite=Lax', 'system_user=yes; Secure; Path=/; SameSite=Lax', 'full_name=Constantin; Secure; Path=/; SameSite=Lax', 'user_id=constantin%40freelancer.com; Secure; Path=/; SameSite=Lax', 'user_image=; Secure; Path=/; SameSite=Lax' ],
          },
      });
      const data = response.data;
      console.log("Create Orders Success");
      res.status(response.status).json(data);
  } catch (error) {
      console.log('something went wrong while Create Orders', error);
      res.status(error.response?.status || 500).json({
          message: 'Error occurred while processing your request',
          error: error.message,
      });
  }
}

module.exports = { createOrderCtr };
