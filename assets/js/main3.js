// Selección de elementos
const sumar = document.getElementById('btn-sumar');
const restar = document.getElementById('btn-restar');
const resultado = document.querySelector('.resultado');

// Eventos para sumar
sumar.addEventListener('click', () => {
    const valor1 = parseFloat(document.getElementById('valor1').value) || 0;
    const valor2 = parseFloat(document.getElementById('valor2').value) || 0;
    resultado.textContent = valor1 + valor2;
});

// Eventos para restar
restar.addEventListener('click', () => {
    const valor1 = parseFloat(document.getElementById('valor1').value) || 0;
    const valor2 = parseFloat(document.getElementById('valor2').value) || 0;
    resultado.textContent = Math.max(0, valor1 - valor2);
});
