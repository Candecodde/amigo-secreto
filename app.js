let amigos = [];


function agregarAmigo() {
    let nuevoNombre = document.getElementById("amigo").value;

    if (nuevoNombre.trim() !== "") {
        amigos.push(nuevoNombre);
        console.log(amigos);
        limpiarCaja();
        listarAmigos();
    } else {
        alert('Campo Vacio, Ingresa un nombre.');
    }
}

function limpiarCaja() {
    document.querySelector("#amigo").value = '';
}

function listarAmigos() {
    let verLista = document.getElementById("listaAmigos");
    verLista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        verLista.innerHTML = "<li>" + amigos[i] + "</li>" + verLista.innerHTML;
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert('No se ha ingresado ningun nombre');
        return
    }
    let nombreRandom = Math.floor(Math.random() * amigos.length + 1);
    let nombreSorteado = document.getElementById("resultado");
    nombreSorteado.innerHTML = 'El nombre sorteado es: ' + amigos[nombreRandom];
}


