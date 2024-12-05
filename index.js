const express = require("express");
const RemoteADB = require("remote-adb");
const net = require("net");


const app = express();


// Example usage of remote-adb
app.get("/", async (req, res) =>  {
  try {
    await new RemoteADB.Server({port:8888}).start();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

