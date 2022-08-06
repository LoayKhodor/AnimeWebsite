//Fetch JSON from API based on Search Input

function fetching(id) {
  //displayed properties
  const animeTitle = document.getElementById("animeTitle");
  const airing = document.getElementById("airing");
  const episodes = document.getElementById("episodes");
  const score = document.getElementById("score");
  const rated = document.getElementById("rating");
  const synopsis = document.getElementById("synopsisText");
  const imgSrc = document.getElementById("newAnimeImage");
  const suggested = document.getElementById("suggested");
  //hidden textfields
  const animeTitle2 = document.getElementById("animeTitle2");
  const airing2 = document.getElementById("animeStatus2");
  const episodes2 = document.getElementById("animeEpisodes2");
  const score2 = document.getElementById("animeScore2");
  const rated2 = document.getElementById("animeRated2");
  const synopsis2 = document.getElementById("animeSynopsis2");
  const imgSrc2 = document.getElementById("animeURL2");
  const malURL = document.getElementById("myAnimeListURL");

  const l1 = document.getElementById("link1");
  const l2 = document.getElementById("link2");
  const l3 = document.getElementById("link3");

  const xhttp = new XMLHttpRequest();
  const txtfield = document.getElementById("searchedAnime");
  xhttp.open(
    "get",
    "https://jikan1.p.rapidapi.com/search/anime?q=" + txtfield.value
  );
  console.log(txtfield.value);
  xhttp.setRequestHeader("x-rapidapi-host", "jikan1.p.rapidapi.com");
  xhttp.setRequestHeader(
    "x-rapidapi-key",
    "cd49a03ea2msh41b414249d8a5e8p1c0119jsn6dd3bc9459dd"
  );
  xhttp.send();
  xhttp.onload = function () {
    console.log(JSON.parse(xhttp.response));
    let obj = JSON.parse(xhttp.response);

    //display all anime info on discover.ejs
    console.log(obj["results"][id]);
    animeTitle.innerHTML = obj["results"][id]["title"];
    imgSrc.src = obj["results"][id]["image_url"];
    airing.innerHTML = "Status: ";
    airing.innerHTML += obj["results"][id]["airing"]
      ? "<span>Ongoing</span>"
      : "<span>Completed</span>";
    rated.innerHTML =
      "Rated: " + "<span>" + obj["results"][id]["rated"] + "</span>";
    episodes.innerHTML =
      "Episodes: " + "<span>" + obj["results"][id]["episodes"] + "</span>";
    synopsis.innerHTML = obj["results"][id]["synopsis"];
    score.innerHTML =
      "Score: " + "<span>" + obj["results"][id]["score"] + "</span>";
    l1.innerHTML = obj["results"][1]["title"];
    l2.innerHTML = obj["results"][2]["title"];
    l3.innerHTML = obj["results"][3]["title"];

    
    //store them in hidden textfields in a form, to add to favorites later
    animeTitle2.value = animeTitle.innerHTML;
    airing2.value = obj["results"][id]["airing"]
      ? "Ongoing"
      : "Completed";
    episodes2.value = obj["results"][id]["episodes"];
    synopsis2.value = obj["results"][id]["synopsis"];
    score2.value = obj["results"][id]["score"];
    imgSrc2.value = imgSrc.src;
    rated2.value = obj["results"][id]["rated"];
    malURL.value = obj["results"][id]["url"];
  };
}

