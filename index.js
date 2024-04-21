const express = require("express");
const app = express();
const http = require("http");
const https = require("https");
const WebSocket = require("ws");
const fs = require("fs");

// const fullchain = fs.readFileSync('/etc/letsencrypt/live/vfranco.me/fullchain.pem', 'utf8')
// const privkey = fs.readFileSync('/etc/letsencrypt/live/vfranco.me/privkey.pem', 'utf8')
// const credentials = {key: privkey, cert: fullchain};

const port = 5940;
const path = "/info";
// const server = https.createServer(credentials, app);
const server = http.createServer(app);
const wss = new WebSocket.Server({ server: server, path: path });

const { trackList } = require("./TrackList");

server.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(data) {
    wss.clients.forEach((client) => {
      if (client.readyState == WebSocket.OPEN) {
        sendSong(client, currentSongPlaying);
      }
    });
  });
});

var currentSongPlaying = "";
let currentSongLength = 10000;
let currentSongStarted = Date.now();

getNewSong();

function getNewSong() {
  var counter = Math.floor(Math.random() * 25);
  var songInfo = trackList[counter];
  console.log(
    `Next Song: ${trackList[counter].songTitle} - ${trackList[counter].songArtist}`
  );
  currentSongPlaying = songInfo;
  currentSongLength = trackList[counter].songLength;
  currentSongStarted = Date.now();
  console.log(`Length: ${currentSongLength}`);

  wss.clients.forEach((client) => {
    if (client.readyState == WebSocket.OPEN) {
      sendSong(client, currentSongPlaying);
    }
  });

  setTimeout(getNewSong, currentSongLength);
  console.log(
    "New Song Picked!----------------------------------------------------------"
  );
}

//Send Song Currently Playing
function sendSong(client, currentSongPlaying) {
  console.log(`Sending: ${currentSongPlaying.songTitle}`);
  console.log(`Timestamp: ${Date.now() - currentSongStarted}`);
  let tempSong = JSON.stringify(currentSongPlaying);
  client.send(
    tempSong.substring(0, tempSong.length - 1) +
      `,"songTimestamp":${Date.now() - currentSongStarted}}`
  );
}
