let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [
{
	name: "Love Magic",
	artist: "Why Brake my heart",
	image: "https://i.pinimg.com/originals/5c/b2/82/5cb2824f7c3f7bb72fd489361efa0852.png",
	path: "love.mp3"
},
{
	name: "Enthusiast",
	artist: "Tours",
	image: "https://cdn.shopify.com/s/files/1/1061/1924/products/17_large.png?v=1571606116",
	path: "vroom.mp3"
},
{
	name: "Ship",
	artist: "Chad Crouch",
	image: "https://i.pinimg.com/originals/b1/e8/46/b1e8460632b3b1164f874b20262dfc45.png",
	path: "Shipping_Lanes.mp3",
},
{
	name: "Shianes",
	artist: "Chad Crouch",
	image: "https://i.pinimg.com/originals/30/f4/3e/30f43e8ac82ee74661963a77bbe9a534.png",
	path: "Lanes.mp3",
},
];

    function loadTrack(track_index) {
// Clear the previous seek timer
clearInterval(updateTimer);
resetValues();

// Load a new track
curr_track.src = track_list[track_index].path;
curr_track.load();

// Update details of the track
track_art.style.backgroundImage =
	"url(" + track_list[track_index].image + ")";
track_name.textContent = track_list[track_index].name;
track_artist.textContent = track_list[track_index].artist;
now_playing.textContent =
	"PLAYING " + (track_index + 1) + " OF " + track_list.length;

// Set an interval of 1000 milliseconds
// for updating the seek slider
updateTimer = setInterval(seekUpdate, 1000);

// Move to the next track if the current finishes playing
// using the 'ended' event
curr_track.addEventListener("ended", nextTrack);

// Apply a random background color
random_bg_color();
}
