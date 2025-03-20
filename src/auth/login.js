const axios = require('axios');

const loginCtr = async (req, res) => {
  const requestData = req.body;
  console.log('Sending Login request from Node with ', requestData);
  try {
      const response = await axios.post('https://testwebapp.ctgalega.com/api/method/login', requestData, {
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
      });
      const data = {
        ...response.data,
        ...response.headers,
      }
      console.log('login success');
      res.status(response.status).json(data);
  } catch (error) {
      console.log('something went wrong while login');
      res.status(error.response?.status || 500).json({
          message: 'Error occurred while processing your request',
          error: error.message,
      });
  }
}

module.exports = { loginCtr };
