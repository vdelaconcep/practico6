
// Variables para validación de formulario

var form = document.getElementsByClassName("formulario"),
    nombre = document.getElementById("nombre"),
    apellido = document.getElementById("apellido"),
    documento = document.getElementById("documento"),
    nacionalidad = document.getElementById("nacionalidad"),
    mensaje = document.getElementById("mensaje"),
    telefono = document.getElementById("telefono");
    correo = document.getElementById("correo"),
    actividades = document.getElementsByName("actividades"),
    divactividades = document.getElementsByClassName("inputs-actividades"),
    condiciones = document.getElementById("condiciones");
    btnSubmit = document.getElementById("iniciar-afiliacion");

// Expresión regular para validación de email

const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

// Bandera de validación exitosa

var validacion = false;

// Función para validar inputs del tipo texto

function validarInputTexto(inputTexto, minLength, maxLength) {
    let inputValor = inputTexto.value;
    let longitud = inputValor.length;
    let inputValorSinEspacios = inputValor.trim();
    let longitudSinEspacios = inputValorSinEspacios.length;
    if (longitud < minLength) {
        inputTexto.setCustomValidity("Este campo debe tener " + minLength + " caracteres como mínimo");
        validacion = false;
    } else if (longitudSinEspacios > maxLength) {
        inputTexto.setCustomValidity("Este campo no debe tener más de " + maxLength + " caracteres");
        validacion = false;
    } else {
        validacion = true;
    }
    inputTexto.addEventListener("input", function () {
        inputTexto.setCustomValidity("");
    });
    encodeURIComponent(inputValor);
    inputTexto.value = inputValor;
}

// Función para validar inputs numéricos y teléfono

function validarInputNumero(inputNumero, min, max) {
    let valor = inputNumero.value;
    let valorInt = parseInt(valor);
    if (valor == "") {
        inputNumero.setCustomValidity("Este campo no puede estar vacío");
        validacion = false;
    } else if (valorInt < min || valorInt > max) {
        inputNumero.setCustomValidity("Debe ingresar un número válido");
        validacion = false;
    } else {
        validacion = true;
    }
    inputNumero.addEventListener("input", function () {
        inputNumero.setCustomValidity("");
    });
    encodeURIComponent(valor);
    inputNumero.value = valor;
}

// Función para validar select

function validarSelect(select) {
    let valor = select.value;
    if (valor == "") {
        select.setCustomValidity("Debe seleccionar una opción");
        validacion = false;
    } else {
        validacion = true;
    }
    select.addEventListener("change", function () {
        select.setCustomValidity("");
    });
}

// Función para validar mensaje en "textarea"

function validarMensaje(mensaje, maxLength) {
    let valor = mensaje.value;
    let longitud = valor.length;
    if (longitud > maxLength) {
        mensaje.setCustomValidity("Se aceptan hasta " + maxLength + " caracteres");
        validacion = false;
    } else {
        validacion = true;
    }
    mensaje.addEventListener("input", function () {
        mensaje.setCustomValidity("");
    });
    encodeURIComponent(valor);
    mensaje.value = valor;
}

// Función para validar email

function validarEmail() {
    let valor = correo.value;
    if (!regex.test(valor)) {
        correo.setCustomValidity("Debe ingresar un email válido");
        validacion = false;
    } else {
        validacion = true;
    }
    correo.addEventListener("input", function () {
        correo.setCustomValidity("");
    });
    encodeURIComponent(valor);
    correo.value = valor;
}


// Función para validar actividades

function validarActividades(inputs) {
    let check = false;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            check = true;
            break;
        }
    }
    if (!check) {
        inputs[0].setCustomValidity("Debe seleccionar al menos una actividad");
        validacion = false;
    } else {
        validacion = true;
    }
    divactividades[0].addEventListener("click", function () {
        inputs[0].setCustomValidity("");
    });
}

// Función para validar el checkbox condiciones

function validarCondiciones() {
    if (!condiciones.checked) {
        condiciones.setCustomValidity("Debe aceptar las condiciones");
        validacion = false;
    } else {
        validacion = true;
    }
    condiciones.addEventListener("change", function () {
        condiciones.setCustomValidity("");
    });
}

btnSubmit.addEventListener("click", function () {

    validarInputTexto(nombre, 3, 20);
    validarInputTexto(apellido, 3, 30);
    validarInputNumero(documento, 1000000, 999999999);
    validarSelect(nacionalidad);
    validarMensaje(mensaje, 140);
    validarInputNumero(telefono, 1000000000, 9999999999);
    validarEmail();
    validarActividades(actividades);
    validarCondiciones();

    // Si la validación fue exitosa, se envía el formulario
    if (validacion) {
        form[0].submit();
    }
});





