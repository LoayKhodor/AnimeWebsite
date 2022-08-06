const express = require("express");
var bodyParser = require("body-parser"); //post
const app = express();
app.use(express.static("public"));
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.set("view engine", "ejs");

const MongoClient = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectID;
const conURL = "mongodb+srv://loaykhodor:cheerup@cluster0.ctxlqx3.mongodb.net/animeUsers?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";

//test Connection
var dbo;
MongoClient.connect(conURL, function (err, database) {
  if (err) throw err;
  dbo = database.db("animeUsers");
  console.log("Connected");
  database.close();
});

//get root
app.get("/", function (req, res) {
  console.log("Got index.html");
  res.sendFile(__dirname, "index.html");
});

app.get("/discover", async (req, res) => {
  console.log("Got discover.ejs\n" + req.query.username);

  //insert username into collection "animeUser" in db animeUsers
  var myObj = { _id: req.query.username };
  MongoClient.connect(conURL, function (err, database) {
    if (err) throw err;
    const dbo = database.db("animeUsers");
    dbo
      .collection("animeUser")
      .countDocuments({ _id: req.query.username }, function (err, count) {
        //if this username already exists do not add
        if (count > 0) {
          console.log(count);
        } else {
          dbo.collection("animeUser").insertOne(myObj, function (err, result) {
            if (err) throw err;
            if (!result) {
              console.log("no results");
              return;
            } else {
              console.log(result);
            }
          });
        }
      });
    //fetch all favorites for this user from the db
    dbo
      .collection("animeAdded")
      .find({ username: req.query.username }, { animeImage: 1, _id: 0 })
      .toArray(function (err, results) {
        if (err) throw err;
        if (!results) {
          console.log("no results");
          return;
        }
        res.render("discover", { fullname: req.query.username, rslt: results });
      });
  });
});

//send to new page & insert then reload discover page
app.post("/addToFav", urlencodedParser, async (req, res) => {
  console.log("Got addToFav.ejs");
  console.log(req.body.animeTitle2);
  console.log(req.body.username2);
  res.render("addToFav", {
    animeTitle: req.body.animeTitle2,
    animeStatus: req.body.animeStatus2,
    animeEpisodes: req.body.animeEpisodes2,
    animeScore: req.body.animeScore2,
    animeRated: req.body.animeRated2,
    animeImage: req.body.animeURL2,
    animeSynopsis: req.body.animeSynopsis2,
  });
  const animeAdded = [
    {
      username: req.body.username2,
      animeTitle: req.body.animeTitle2,
      animeStatus: req.body.animeStatus2,
      animeEpisodes: req.body.animeEpisodes2,
      animeScore: req.body.animeScore2,
      animeRated: req.body.animeRated2,
      animeImage: req.body.animeURL2,
      animeSynopsis: req.body.animeSynopsis2,
      malURL: req.body.myAnimeListURL,
    },
  ];
  //check if anime to add already exists in db
  MongoClient.connect(conURL, function (err, database) {
    const dbo = database.db("animeUsers");

    const anime = dbo.collection("animeAdded").countDocuments(
      { animeTitle: req.body.animeTitle2, username: req.body.username2 },

      function (err, count) {
        if (count > 0) {
          console.log("Already Added");
        } else {
          if (err) throw err;
          dbo
            .collection("animeAdded")
            .insertMany(animeAdded, function (err, result) {
              if (err) throw err;
              if (!result) {
                console.log("no result");
                return;
              } else {
                console.log(result);
              }
            });
        }
      }
    );
  });
});

app.get("/index4", function (req, res) {
  console.log("index4 Received");
  res.sendFile(__dirname, "index4.html");
});

app.post("/remove", urlencodedParser, async (req, res) => {
  console.log("Posted");
  console.log(req.body.ID);
  MongoClient.connect(conURL, function (err, database) {
    if (err) throw err;
    const dbo = database.db("animeUsers");

    //checking
    dbo
      .collection("animeAdded")
      .find({ _id: ObjectId(req.body.ID) })
      .toArray(function (err, result) {
        console.log(result[0].animeTitle);
        console.log(result[0].animeScore);
        console.log(result[0].animeEpisodes);

        if (err) throw err;
        if (!result) {
          console.log("no results");
          return;
        }
      });

    dbo
      .collection("animeAdded")
      .deleteOne({ _id: ObjectId(req.body.ID) }, function (err, res) {
        if (err) throw err;
        if (!res) {
          console.log("no results");
          return;
        }
        console.log(res + "\nRemoved Anime");
      });
  });
});

app.listen(8081, () => {
  console.log("Server is running on Port 8081");
});

app.get("*", function (req, res) {
  res.sendFile(__dirname + "/public/error.html");
});
