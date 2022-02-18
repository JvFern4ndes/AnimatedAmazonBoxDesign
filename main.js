let box = document.getElementById('box');
window.onmousemove = function(e) {
    box.style.transform = "rotateX(-30deg) rotateY(" + e.clientX + "deg)"
}