


function valida() {
    var renzo = "renzo@renzo.cl";
    var passrenzo = "123";
    var usuario = document.getElementById('user').value;
    var password = document.getElementById('pass').value;
    if (usuario == '') {
        alert("El usuario no puede ser vacio");
        return false;
    }
    if (password == '') {
        alert("El password no puede ser vacio");
        return false;
    }
    if (usuario != renzo || password != passrenzo) {
        alert("Usuario o contraseña no corresponden");
        return false;
    }

    alert("Credenciales correctas");
}