document.addEventListener("DOMContentLoaded", function () {
    const btnMostrar = document.getElementById("btnMostrar");
    const mensajeDiv = document.getElementById("mensajeDiv");
    const btnMover = document.getElementById("btnMover");
    const corazon = document.getElementById("corazon");
    const besos = document.getElementById("besos");
    const baile = document.getElementById("baile");
    const chileno = document.getElementById("chileno");
    const love = document.getElementById("love");
    const loved = document.getElementById("loved");
    const amo = document.getElementById("amo");
    const oculta = document.getElementById("oculto");
  
    // Al hacer clic en "Mostrar":
    btnMostrar.addEventListener("click", function () {
      // Muestra u oculta el div
      mensajeDiv.classList.toggle("hidden");
      btnMover.classList.toggle("hidden");
      corazon.classList.toggle("hidden");
      besos.classList.toggle("hidden");
      baile.classList.toggle("hidden");
      chileno.classList.toggle("hidden");
      love.classList.toggle("hidden");
      loved.classList.toggle("hidden");
      amo.classList.toggle("hidden");
      oculta.classList.toggle("hidden");
    });

    btnMover.addEventListener("click", function () {
  
      // Aumenta el tamaño del botón "Mostrar"
      const nuevoAncho = btnMostrar.offsetWidth + 25; // Incrementa 20px el ancho
      const nuevoAlto = btnMostrar.offsetHeight + 15;   // Incrementa 10px el alto
      btnMostrar.style.width = `${nuevoAncho}px`;
      btnMostrar.style.height = `${nuevoAlto}px`;
  
      // Mueve el botón a una posición aleatoria en la ventana
      const maxX = window.innerWidth - btnMover.offsetWidth;
      const maxY = window.innerHeight - btnMover.offsetHeight;
      const nuevaX = Math.floor(Math.random() * maxX);
      const nuevaY = Math.floor(Math.random() * maxY);
      btnMover.style.position = "absolute";
      btnMover.style.left = `${nuevaX}px`;
      btnMover.style.top = `${nuevaY}px`;
    });
  });
  