const axios = require('axios');

const getAllCustomersCtr = async (req, res) => {
  console.log("Sending GET All Customers request from Node");
  try {
      const response = await axios.get(
        'https://testwebapp.ctgalega.com/api/resource/Customer?fields=[\"*\"]', {
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Cookie': [ 'sid=fa975975f3c17ae7d1e355cdbfbe7926ed87024d86380a4ff9864a71; Expires=Tue, 25 Mar 2025 06:06:06 GMT; Max-Age=612000; Secure; HttpOnly; Path=/; SameSite=Lax', 'system_user=yes; Secure; Path=/; SameSite=Lax', 'full_name=Constantin; Secure; Path=/; SameSite=Lax', 'user_id=constantin%40freelancer.com; Secure; Path=/; SameSite=Lax', 'user_image=; Secure; Path=/; SameSite=Lax' ],
          },
      });
      const data = response.data.data;
      realData = data.map(item => ({
        name: item.name,
        customer_group: item.customer_group,
        owner: item.owner,
        image: item.image,
      }))
      console.log("GET All Customers Success");
      res.status(response.status).json(realData);
  } catch (error) {
      console.log('something went wrong while GET All Customers', error);
      res.status(error.response?.status || 500).json({
          message: 'Error occurred while processing your request',
          error: error.message,
      });
  }
}

module.exports = { getAllCustomersCtr };
