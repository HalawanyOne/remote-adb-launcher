const RemoteADB = require("remote-adb");

const index = require("../index.js");

const port = 3000;

exports.handler = async (event, context) => {
  try {
   // Start the server
   index.app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};