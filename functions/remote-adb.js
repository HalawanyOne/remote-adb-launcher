const RemoteADB = require("remote-adb");

exports.handler = async (event, context) => {
  try {
    const adb = new RemoteADB();
    const devices = await adb.listDevices();
    return {
      statusCode: 200,
      body: JSON.stringify({ devices }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};