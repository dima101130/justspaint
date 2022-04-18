var canvas = document.getElementById("canvas");
var clearall = document.getElementById("clearall");
var ctx = canvas.getContext("2d");
var mycolor;

window.addEventListener("scroll", preventMotion, false);
window.addEventListener("touchmove", preventMotion, false);

function preventMotion(event)
{
    window.scrollTo(0, 0);
    event.preventDefault();
    event.stopPropagation();
}

document.getElementById("color").oninput = function() {
    mycolor = this.value;
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

clearall.addEventListener("click", function (e) {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
});

canvas.addEventListener("touchstart", function (e) {
    canvas.addEventListener("touchmove", function (e) {
        var clear = document.getElementById("kl").value;
        var size = document.getElementById("size").value;
        if (clear == "1") {
            var x = e.touches[0].pageX
            var y = e.touches[0].pageY
            ctx.fillRect(x-size/2, y-size/2, size, size)
            ctx.fillStyle = mycolor
        }else {
            var x = e.touches[0].pageX
            var y = e.touches[0].pageY
            ctx.clearRect(x-size/2, y-size/2, size, size);
        }
    });
});
