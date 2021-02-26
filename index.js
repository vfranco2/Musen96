const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const port = 5940;
const server = http.createServer(express);
const wss = new WebSocket.Server({ server });

const {trackList} = require('./TrackList');

server.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});

wss.on('connection', function connection(ws){
    ws.on('message', function incoming(data){
        wss.clients.forEach((client) => {
            if (client.readyState == WebSocket.OPEN){
                sendSong(client, currentSongPlaying)
            }
        });
    })
})

var currentSongPlaying = "";
let currentSongLength = 10000;
let currentSongStarted = Date.now();

getNewSong()

function getNewSong() {
	var counter = Math.floor(Math.random()*25)
	var songInfo = trackList[counter]
	console.log(`Next Song: ${ trackList[counter].SongTitle } - ${ trackList[counter].SongArtist }`)
	currentSongPlaying = songInfo
	currentSongLength = trackList[counter].SongLength
	currentSongStarted = Date.now();
	console.log(`Length: ${ currentSongLength }`)

	wss.clients.forEach((client) => {
      if (client.readyState == WebSocket.OPEN){
          sendSong(client, currentSongPlaying)
      }
  });

	setTimeout(getNewSong, currentSongLength)
	console.log("New Song Picked!----------------------------------------------------------")
}

//Send Song Currently Playing
function sendSong(client, currentSongPlaying){
	console.log(`Sending: ${ currentSongPlaying.SongTitle }`)
	console.log(`Timestamp: ${ Date.now() - currentSongStarted }`)
	let tempSong = JSON.stringify(currentSongPlaying)
	client.send(tempSong.substring(0, tempSong.length - 1)+ `,"SongTimestamp":${ Date.now() - currentSongStarted }}`)
}
