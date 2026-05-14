const formulario = document.getElementById("formContacto");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("inputNombre");
    const email = document.getElementById("inputEmail");
    const celular = document.getElementById("inputCelular");
    const mensaje = document.getElementById("inputEscribenos");

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexCelular = /^\+?[0-9]{8,15}$/;

    let formularioValido = true;

    [nombre, email, celular, mensaje].forEach(campo => {
        campo.classList.remove("is-invalid");
    });

    if (nombre.value.trim() === "") {
        nombre.classList.add("is-invalid");
        formularioValido = false;
    }

    if (!regexEmail.test(email.value.trim())) {
        email.classList.add("is-invalid");
        formularioValido = false;
    }

    if (!regexCelular.test(celular.value.trim())) {
        celular.classList.add("is-invalid");
        formularioValido = false;
    }

    if (mensaje.value.trim().length < 10) {
        mensaje.classList.add("is-invalid");
        formularioValido = false;
    }

    if (formularioValido) {
        alert("Formulario enviado correctamente.");
        formulario.submit();
    }
});

const campos = [
    document.getElementById("inputNombre"),
    document.getElementById("inputEmail"),
    document.getElementById("inputCelular"),
    document.getElementById("inputEscribenos")
];

campos.forEach(campo => {
    campo.addEventListener("input", function () {
        campo.classList.remove("is-invalid");
    });
});