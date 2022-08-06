// function addToFav() {
//   const animeTitle = document.getElementById("animeTitle").innerText;
//   const airing = document.getElementById("airing");
//   const epsisodes = document.getElementById("episodes");
//   const score = document.getElementById("score");
//   const rated = document.getElementById("rating");
//   const synopsis = document.getElementById("synopsisText");
//   const imgSrc = document.getElementById("newAnimeImage");

//   fetch("http://localhost:8081/addToFav", {
//     method: "post",
//     header: {
//       "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
//     },
//     body: `animeTitle=${animeTitle}``airing=${airing}`,
//   })
//     .then(
//       (response) => response.text() // if the response is a JSON object
//     )
//     .then(
//       (success) => console.log(success) // Handle the success response object
//     )
//     .catch(
//       (error) => console.log(error) // Handle the error response object
//     );
// }

// <%if (rslt.length != 0){%>
//     <h1 id="title8">Favorites</h1>
//     <div id="favContainer">
//       <div id="favs">
//         <%rslt.forEach(document =>{%>
//         <img src="<%=document.animeURL%>" onclick="fetchAnime()" />
//         <%})%>
//       </div>
//     </div>
//     <%}%>
{/* <script>
function addToFav() {
  const animeTitle = document.getElementById("animeTitle").innerText;
  console.log(animeTitle);
  const airing = document.getElementById("airing");
  const epsisodes = document.getElementById("episodes");
  const score = document.getElementById("score");
  const rated = document.getElementById("rating");
  const synopsis = document.getElementById("synopsisText");
  const imgSrc = document.getElementById("newAnimeImage");

  fetch("http://localhost:8081/addToFav", {
    method: "post",
    header: {
      "Content-Type": " multipart/form-data; charset=UTF-8",
    },
    body: `animeTitle=${animeTitle}``airing=${airing}`,
  })
    .then(
      (response) => response.text() // if the response is a JSON object
    )
    .then(
      (success) => console.log(success) // Handle the success response object
    )
    .catch(
      (error) => console.log(error) // Handle the error response object
    );
}
</script> */}