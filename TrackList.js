const trackList = [
	{
    songId: 0, songLink: "musen/songs/citypop/spacescraper.mp3",
    songTitle: "SPACE SCRAPER", songArtist: "TOSHIKI KADOMATSU",
    songLength: 330000, songImage: "musen/songs/covers/spacescraper.jpg"
	},
	{
    songId: 1, songLink: "musen/songs/citypop/plasticlove.mp3",
    songTitle: "PLASTIC LOVE", songArtist: "竹内 まりや",
    songLength: 294000, songImage: "musen/songs/covers/plasticlove.jpg"
	},
	{
    songId: 2, songLink: "musen/songs/citypop/sunset.mp3",
    songTitle: "SUNSET", songArtist: "BLU-SWING",
    songLength: 209000, songImage: "musen/songs/covers/sunset.jpg"
	},
	{
    songId: 3, songLink: "musen/songs/citypop/baycity.mp3",
    songTitle: "BAY CITY", songArtist: "黄昏の",
    songLength: 250000, songImage: "musen/songs/covers/baycity.jpg"
	},
	{
    songId: 4, songLink: "musen/songs/citypop/summerbreeze.mp3",
    songTitle: "SUMMER BREEZE", songArtist: "PIPER",
    songLength: 203000, songImage: "musen/songs/covers/summerbreeze.jpg"
	},
	{
    songId: 5, songLink: "musen/songs/citypop/catseye.mp3",
    songTitle: "CAT'S EYE", songArtist: "杏里",
    songLength: 189000, songImage: "musen/songs/covers/timely.jpg"
	},
	{
    songId: 6, songLink: "musen/songs/jazz/itcouldhappen.mp3",
    songTitle: "IT COULD HAPPEN TO YOU", songArtist: "RYO FUKUI",
    songLength: 257000, songImage: "musen/songs/covers/scenery.jpg"
	},
	{
    songId: 7, songLink: "musen/songs/lofi/aruarian.mp3",
    songTitle: "ARUARIAN DANCE", songArtist: "NUJABES",
    songLength: 252000, songImage: "musen/songs/covers/champloo.jpg"
	},
	{
    songId: 8, songLink: "musen/songs/acid/zenmai.mp3",
    songTitle: "ZENMAI", songArtist: "ススム ヨコタ",
    songLength: 250000, songImage: "musen/songs/covers/fuji.jpg"
	},
	{
    songId: 9, songLink: "musen/songs/lofi/feel.mp3",
    songTitle: "FEEL", songArtist: "吉村弘",
    songLength: 274000, songImage: "musen/songs/covers/green.jpg"
	},
	{
    songId: 10, songLink: "musen/songs/lofi/green.mp3",
    songTitle: "GREEN", songArtist: "吉村弘",
    songLength: 314000, songImage: "musen/songs/covers/green.jpg"
	},
	{
    songId: 11, songLink: "musen/songs/lofi/mist.mp3",
    songTitle: "MIST", songArtist: "吉村弘",
    songLength: 294000, songImage: "musen/songs/covers/wetland.jpg"
	},
	/*{
    songLink: "musen/songs/lofi/kawamo.mp3",
    songTitle: "かわも", songArtist: "吉村弘",
    songLength: 250000, songImage: "musen/songs/covers/wetland.jpg"
	},*/
	{
    songId: 12, songLink: "musen/songs/jazz/rush.mp3",
    songTitle: "RUSH", songArtist: "THE SEATBELTS",
    songLength: 215000, songImage: "musen/songs/covers/bebop.jpg"
	},
	{
    songId: 13, songLink: "musen/songs/citypop/joke.mp3",
    songTitle: "JUST A JOKE", songArtist: "YURIE KOKUBU",
    songLength: 180000, songImage: "musen/songs/covers/relief.jpg"
	},
	{
    songId: 14, songLink: "musen/songs/citypop/shuffle.mp3",
    songTitle: "MIDNIGHT SHUFFLE", songArtist: "COSMOS",
    songLength: 295000, songImage: "musen/songs/covers/cosmos.jpg"
	},
	{
    songId: 15, songLink: "musen/songs/lofi/ole.mp3",
    songTitle: "OLE", songArtist: "FAT JON",
    songLength: 208000, songImage: "musen/songs/covers/champloo.jpg"
	},
	{
    songId: 16, songLink: "musen/songs/lofi/justforget.mp3",
    songTitle: "JUST FORGET", songArtist: "FORCE OF NATURE",
    songLength: 231000, songImage: "musen/songs/covers/champloo.jpg"
	},
	{
    songId: 17, songLink: "musen/songs/lofi/process.mp3",
    songTitle: "PROCESS", songArtist: "TSUTCHIE",
    songLength: 281000, songImage: "musen/songs/covers/champloo.jpg"
	},
	{
    songId: 18, songLink: "musen/songs/jazz/adrenaline.mp3",
    songTitle: "ADRENALINE", songArtist: "INDIGO JAM UNIT",
    songLength: 269000, songImage: "musen/songs/covers/realism.webp"
	},
	{
    songId: 19, songLink: "musen/songs/jazz/breeze.mp3",
    songTitle: "BREEZE", songArtist: "JIRO INAGAKI & SOUL MEDIA",
    songLength: 278000, songImage: "musen/songs/covers/funkystuff.webp"
	},
	{
    songId: 20, songLink: "musen/songs/jazz/qualia.mp3",
    songTitle: "QUALIA", songArtist: "PRIMITIVE ART ORCHESTRA",
    songLength: 233000, songImage: "musen/songs/covers/qualia.jpg"
	},
	{
    songId: 21, songLink: "musen/songs/jazz/fragile.mp3",
    songTitle: "FRAGILE", songArtist: "中村春香",
    songLength: 162000, songImage: "musen/songs/covers/fragile.jpg"
	},
	{
    songId: 22, songLink: "musen/songs/indie/passion.mp3",
    songTitle: "PASSION", songArtist: "KEYTALK",
    songLength: 223000, songImage: "musen/songs/covers/sugar.jpg"
	},
	{
    songId: 23, songLink: "musen/songs/indie/bond.mp3",
    songTitle: "BOND", songArtist: "LITE",
    songLength: 175000, songImage: "musen/songs/covers/installation.jpg"
	},
	{
    songId: 24, songLink: "musen/songs/citypop/lostinparadise.mp3",
    songTitle: "LOST IN PARADISE", songArtist: "ALI",
    songLength: 328000, songImage: "musen/songs/covers/paradise.jpg"
	}
]

module.exports.trackList = trackList;
