//Google Login Button & SignOut

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log("Name: " + profile.getName());

    var username = document.getElementById("username");
    var frm = document.getElementById("myForm");
    username.value = profile.getName();
     frm.submit();
  }
  function signOut() {
    var auth2 = gapi.auth.getAuthInstance().disconnect();
    var frm = document.getElementById("myForm2");
    auth2.signOut().then(function () {
      console.log("User signed out.");
      document.getElementById("addToFavs").style.display = "none";
    });
    frm.submit();
  }