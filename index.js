const tracklist = [
	["musen/songs/citypop/spacescraper.mp3", "SPACE SCRAPER", "TOSHIKI KADOMATSU", 330000, "musen/songs/covers/spacescraper.jpg"],
	["musen/songs/citypop/plasticlove.mp3", "PLASTIC LOVE", "竹内 まりや", 476000, "musen/songs/covers/plasticlove.jpg" ],
	["musen/songs/citypop/sunset.mp3", "SUNSET", "BLU-SWING", 209000, "musen/songs/covers/sunset.jpg" ],
	["musen/songs/citypop/baycity.mp3", "BAY CITY", "黄昏の", 250000, "musen/songs/covers/baycity.jpg" ],
	["musen/songs/citypop/summerbreeze.mp3", "SUMMER BREEZE", "PIPER", 203000, "musen/songs/covers/summerbreeze.jpg" ],
	["musen/songs/citypop/catseye.mp3", "CAT'S EYE", "杏里", 189000, "musen/songs/covers/catseye.jpg" ],
	["musen/songs/jazz/itcouldhappen.mp3", "IT COULD HAPPEN TO YOU", "RYO FUKUI", 257000, "musen/songs/covers/itcouldhappen.jpg" ],
	["musen/songs/lofi/aruarian.mp3", "ARUARIAN DANCE", "NUJABES", 252000, "musen/songs/covers/aruarian.jpg" ],
	["musen/songs/acid/zenmai.mp3", "ZENMAI", "ススム ヨコタ", 250000, "musen/songs/covers/zenmai.jpg" ]
]

const http = require("http");
const WebSocketServer = require("websocket").server
let connection = null;
//create a raw http server (this will help us create the TCP which will then pass to the websocket to do the job)
const httpserver = http.createServer((req, res) =>
                console.log("we have received a request"))
 //pass the httpserver object to the WebSocketServer library to do all the job, this class will override the req/res
const websocket = new WebSocketServer({
    "httpServer": httpserver
})
httpserver.listen(5940, () => console.log("Server listening on port 5940"))
//when a legit websocket request comes listen to it and get the connection .. once you get a connection thats it!
websocket.on("request", request=> {
    connection = request.accept(null, request.origin)
    connection.on("open", () => console.log("Opened Connection"))
    connection.on("close", () => console.log("Closed Connection"))
    connection.on("message", message => {
        console.log(`Server received: ${message.utf8Data}`)
				sendSong(currentSongPlaying)
    })
})

var currentSongPlaying = ""
let currentSongLength = 10000;

getNewSong()

function getNewSong() {
	var counter = Math.floor(Math.random()*9)
	var songInfo = `${ tracklist[counter][0] },${ tracklist[counter][1] }|${ tracklist[counter][2] }?${ tracklist[counter][3] }@${ tracklist[counter][4] }`
	console.log(`Next Song: ${ tracklist[counter][1] } - ${ tracklist[counter][2] }`)
	currentSongPlaying = songInfo
	currentSongLength = tracklist[counter][3]
	console.log(currentSongLength)
	if (connection!=null){
		sendSong(currentSongPlaying)
	}
	setTimeout(getNewSong, currentSongLength)
}

//Send Song Currently Playing
function sendSong(currentSongPlaying){
	let songSender = currentSongPlaying
	let songLogger = currentSongPlaying.split('|').shift();
	songLogger = songLogger.split(',').pop();
	console.log(`Broadcasting: ${ songLogger }`)
	connection.send(songSender)
}
