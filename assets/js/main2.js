// Seleccionar botones y caja
const botones = document.querySelectorAll('[id^="btn-"]');
const caja = document.getElementById('caja');

// Asignar eventos a los botones
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const color = boton.style.backgroundColor;
        caja.style.backgroundColor = color;
    });
});
