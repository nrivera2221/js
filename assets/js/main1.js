document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    // Capturar valores
    const nombre = document.getElementById('nombre').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Selección de elementos de error
    const errorNombre = document.querySelector('.errorNombre');
    const errorAsunto = document.querySelector('.errorAsunto');
    const errorMensaje = document.querySelector('.errorMensaje');
    const resultado = document.querySelector('.resultado');

    // Regex para validar alfabético
    const regex = /^[a-zA-Z\s]+$/;

    // Limpiar mensajes
    errorNombre.textContent = '';
    errorAsunto.textContent = '';
    errorMensaje.textContent = '';
    resultado.textContent = '';

    let isValid = true;

    // Validaciones
    if (!regex.test(nombre)) {
        errorNombre.textContent = 'El nombre debe contener solo letras.';
        isValid = false;
    }
    if (!regex.test(asunto)) {
        errorAsunto.textContent = 'El asunto debe contener solo letras.';
        isValid = false;
    }
    if (!mensaje) {
        errorMensaje.textContent = 'El mensaje no puede estar vacío.';
        isValid = false;
    }

    // Mensaje de éxito
    if (isValid) {
        resultado.textContent = 'Formulario enviado con éxito.';
    }
});
