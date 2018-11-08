require("dotenv").config();
var fs = require("fs");
var Spotify = require("node-spotify-api");
var keys = require("./keys");
var moment = require("moment");
var axios = require("axios");
var spotify = new Spotify(keys.spotify);