let homeStr = document.getElementById("home");
let home = parseInt(homeStr.innerText);
let guestStr = document.getElementById("guest");
let guest = parseInt(guestStr.innerText);

function addOneHome() {
  home = home + 1;
  homeStr.textContent = home;
}/*  */

function addTwoHome() {
  home = home + 2;
  homeStr.textContent = home;
}

function addThreeHome() {
  home = home + 3;
  homeStr.textContent = home;
}

function addOneGuest() {
  guest = guest + 1;
  guestStr.textContent = guest;
}

function addTwoGuest() {
  guest = guest + 2;
  guestStr.textContent = guest;
}

function addThreeGuest() {
  guest = guest + 2;
  guestStr.textContent = guest;
}


function resetGuest() {
guestStr.textContent = 0;

}

function resetHome () {
homeStr.textContent=0;
}