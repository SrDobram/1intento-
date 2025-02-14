document.getElementById("si").addEventListener("click", function() {
    alert("¡Sabía que dirías que sí,y asi te hacias la dificil mamita! 💕");
});

document.getElementById("no").addEventListener("mouseover", function() {
    this.style.left = Math.random() * window.innerWidth + "px";
    this.style.top = Math.random() * window.innerHeight + "px";
});
