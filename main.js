var canvas = document.getElementById("canvas");
var clearall = document.getElementById("clearall");
var ctx = canvas.getContext("2d");
var mycolor;

document.getElementById("color").oninput = function() {
    mycolor = this.value;
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

clearall.addEventListener("click", function (e) {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
});

canvas.ontouchstart = function(event) {
    canvas.ontouchmove = function(event) {
        var clear = document.getElementById("kl").value;
        var size = document.getElementById("size").value;
        if (clear == "1") {
            var x = event.offsetX
            var y = event.offsetY
            ctx.fillRect(x-size/2, y-size/2, size, size)
            ctx.fillStyle = mycolor
        }else {
            var x = event.offsetX
            var y = event.offsetY
            ctx.clearRect(x-size/2, y-size/2, size, size);
        }
    }
    canvas.onmouseup = function() {
        canvas.onmousemove = null
    }
}