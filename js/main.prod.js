"use strict";


var element = document.getElementById("canvas");
var ctx = element.getContext("2d");
var w = document.body.clientWidth;
var h = document.body.clientHeight;
element.width = w;
element.height = h;
var position = Array(300).join(0).split("");

var initMatrix = function initMatrix() {
  ctx.fillStyle = "rgba(0, 15, 2, 0.20 )";
  ctx.fillRect(0, 0, w, h);
  //rgba cambia la transparecia
  ctx.fillStyle = "#00ff10"; //"rgba(0, 15, 2, 0.45)"; //"#4caf50"

  ctx.font = "60pt";
  position.map(function (y, index) {
      //cambia el tipo de lectra 1e3....1e4..
    var text = String.fromCharCode(1e3 + Math.random() * 30);
    var x = index * 15 + 15;
    canvas.getContext("2d").fillText(text, x, y);
    y > 100 + Math.random() * 1e5 ? position[index] = 0 : position[index] = y + 15;
  });
};
 //cambia la velocidad
setInterval(initMatrix, 60);