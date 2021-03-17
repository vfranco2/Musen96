const trackList = [
	{
    SongId: 0, SongLink: "musen/songs/citypop/spacescraper.mp3",
    SongTitle: "SPACE SCRAPER", SongArtist: "TOSHIKI KADOMATSU",
    SongLength: 330000, SongImage: "musen/songs/covers/spacescraper.jpg"
	},
	{
    SongId: 1, SongLink: "musen/songs/citypop/plasticlove.mp3",
    SongTitle: "PLASTIC LOVE", SongArtist: "竹内 まりや",
    SongLength: 294000, SongImage: "musen/songs/covers/plasticlove.jpg"
	},
	{
    SongId: 2, SongLink: "musen/songs/citypop/sunset.mp3",
    SongTitle: "SUNSET", SongArtist: "BLU-SWING",
    SongLength: 209000, SongImage: "musen/songs/covers/sunset.jpg"
	},
	{
    SongId: 3, SongLink: "musen/songs/citypop/baycity.mp3",
    SongTitle: "BAY CITY", SongArtist: "黄昏の",
    SongLength: 250000, SongImage: "musen/songs/covers/baycity.jpg"
	},
	{
    SongId: 4, SongLink: "musen/songs/citypop/summerbreeze.mp3",
    SongTitle: "SUMMER BREEZE", SongArtist: "PIPER",
    SongLength: 203000, SongImage: "musen/songs/covers/summerbreeze.jpg"
	},
	{
    SongId: 5, SongLink: "musen/songs/citypop/catseye.mp3",
    SongTitle: "CAT'S EYE", SongArtist: "杏里",
    SongLength: 189000, SongImage: "musen/songs/covers/timely.jpg"
	},
	{
    SongId: 6, SongLink: "musen/songs/jazz/itcouldhappen.mp3",
    SongTitle: "IT COULD HAPPEN TO YOU", SongArtist: "RYO FUKUI",
    SongLength: 257000, SongImage: "musen/songs/covers/scenery.jpg"
	},
	{
    SongId: 7, SongLink: "musen/songs/lofi/aruarian.mp3",
    SongTitle: "ARUARIAN DANCE", SongArtist: "NUJABES",
    SongLength: 252000, SongImage: "musen/songs/covers/champloo.jpg"
	},
	{
    SongId: 8, SongLink: "musen/songs/acid/zenmai.mp3",
    SongTitle: "ZENMAI", SongArtist: "ススム ヨコタ",
    SongLength: 250000, SongImage: "musen/songs/covers/fuji.jpg"
	},
	{
    SongId: 9, SongLink: "musen/songs/lofi/feel.mp3",
    SongTitle: "FEEL", SongArtist: "吉村弘",
    SongLength: 274000, SongImage: "musen/songs/covers/green.jpg"
	},
	{
    SongId: 10, SongLink: "musen/songs/lofi/green.mp3",
    SongTitle: "GREEN", SongArtist: "吉村弘",
    SongLength: 314000, SongImage: "musen/songs/covers/green.jpg"
	},
	{
    SongId: 11, SongLink: "musen/songs/lofi/mist.mp3",
    SongTitle: "MIST", SongArtist: "吉村弘",
    SongLength: 294000, SongImage: "musen/songs/covers/wetland.jpg"
	},
	/*{
    SongLink: "musen/songs/lofi/kawamo.mp3",
    SongTitle: "かわも", SongArtist: "吉村弘",
    SongLength: 250000, SongImage: "musen/songs/covers/wetland.jpg"
	},*/
	{
    SongId: 12, SongLink: "musen/songs/jazz/rush.mp3",
    SongTitle: "RUSH", SongArtist: "THE SEATBELTS",
    SongLength: 215000, SongImage: "musen/songs/covers/bebop.jpg"
	},
	{
    SongId: 13, SongLink: "musen/songs/citypop/joke.mp3",
    SongTitle: "JUST A JOKE", SongArtist: "YURIE KOKUBU",
    SongLength: 180000, SongImage: "musen/songs/covers/relief.jpg"
	},
	{
    SongId: 14, SongLink: "musen/songs/citypop/shuffle.mp3",
    SongTitle: "MIDNIGHT SHUFFLE", SongArtist: "COSMOS",
    SongLength: 295000, SongImage: "musen/songs/covers/cosmos.jpg"
	},
	{
    SongId: 15, SongLink: "musen/songs/lofi/ole.mp3",
    SongTitle: "OLE", SongArtist: "FAT JON",
    SongLength: 208000, SongImage: "musen/songs/covers/champloo.jpg"
	},
	{
    SongId: 16, SongLink: "musen/songs/lofi/justforget.mp3",
    SongTitle: "JUST FORGET", SongArtist: "FORCE OF NATURE",
    SongLength: 231000, SongImage: "musen/songs/covers/champloo.jpg"
	},
	{
    SongId: 17, SongLink: "musen/songs/lofi/process.mp3",
    SongTitle: "PROCESS", SongArtist: "TSUTCHIE",
    SongLength: 281000, SongImage: "musen/songs/covers/champloo.jpg"
	},
	{
    SongId: 18, SongLink: "musen/songs/jazz/adrenaline.mp3",
    SongTitle: "ADRENALINE", SongArtist: "INDIGO JAM UNIT",
    SongLength: 269000, SongImage: "musen/songs/covers/realism.webp"
	},
	{
    SongId: 19, SongLink: "musen/songs/jazz/breeze.mp3",
    SongTitle: "BREEZE", SongArtist: "JIRO INAGAKI & SOUL MEDIA",
    SongLength: 278000, SongImage: "musen/songs/covers/funkystuff.webp"
	},
	{
    SongId: 20, SongLink: "musen/songs/jazz/qualia.mp3",
    SongTitle: "QUALIA", SongArtist: "PRIMITIVE ART ORCHESTRA",
    SongLength: 233000, SongImage: "musen/songs/covers/qualia.jpg"
	},
	{
    SongId: 21, SongLink: "musen/songs/jazz/fragile.mp3",
    SongTitle: "FRAGILE", SongArtist: "中村春香",
    SongLength: 162000, SongImage: "musen/songs/covers/fragile.jpg"
	},
	{
    SongId: 22, SongLink: "musen/songs/indie/passion.mp3",
    SongTitle: "PASSION", SongArtist: "KEYTALK",
    SongLength: 223000, SongImage: "musen/songs/covers/sugar.jpg"
	},
	{
    SongId: 23, SongLink: "musen/songs/indie/bond.mp3",
    SongTitle: "BOND", SongArtist: "LITE",
    SongLength: 175000, SongImage: "musen/songs/covers/installation.jpg"
	},
	{
    SongId: 24, SongLink: "musen/songs/citypop/lostinparadise.mp3",
    SongTitle: "LOST IN PARADISE", SongArtist: "ALI",
    SongLength: 328000, SongImage: "musen/songs/covers/paradise.jpg"
	}
]

module.exports.trackList = trackList;
