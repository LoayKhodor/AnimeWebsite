var a1 = document.getElementById("FMABSong");
document.getElementById("FMABSong").loop = true;
var a2 = document.getElementById("DNTheme");
document.getElementById("DNTheme").loop = true;
var a3 = document.getElementById("AOTSong");
document.getElementById("AOTSong").loop=true;
var a4 = document.getElementById("OPTheme");
document.getElementById("OPTheme").loop=true;
var a5 = document.getElementById("NarutoSong");
document.getElementById("NarutoSong").loop = true;
var a6 = document.getElementById("BleachSong");
document.getElementById("BleachSong").loop = true;

function playFMAB() {
   a1.play();
}
function stopFMAB() {
   a1.src= "";
}

function playDN() {
  a2.play();
}
function stopDN() {
    a2.src = "";
}

function playAOT() {
  a3.play();
}
function stopAOT() {
  a3.src = "";
}

function playOP() {
  a4.play();
}
function stopOP() {
    a4.src = "";
}

function playNaruto() {
  a5.play();
}
function stopNaruto() {
    a5.src = "";
}

function playBleach() {
  a6.play();
}
function stopBleach() {
  a6.src = "";
}
