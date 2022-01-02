
var PC= ["يزيد", "KA", "خالد"]

var CCTV = ["SS", "KK"]

var WIFI = ["SS", "KK"]

var IP = ["SS", "KK"]

var SERVER = ["SS", "KK"]

var NETWORK = ["SS", "KK"]



function generator() {
  document.getElementById("PC").innerHTML =
   PC[Math.floor(Math.random() * PC.length)];

  document.getElementById("CCTV").innerHTML =
  CCTV[Math.floor(Math.random() * CCTV.length)];

  document.getElementById("WIFI").innerHTML =
  WIFI[Math.floor(Math.random() * WIFI.length)];

  document.getElementById("IP").innerHTML =
  IP[Math.floor(Math.random() * IP.length)];

  document.getElementById("SERVER").innerHTML =
  SERVER[Math.floor(Math.random() * SERVER.length)];

  document.getElementById("NETWORK").innerHTML =
  NETWORK[Math.floor(Math.random() * NETWORK.length)];

}
