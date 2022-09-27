const inputtexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")
function btnEncriptar(){
    const incriptador = encriptar(inputtexto.value)
    mensaje.value = incriptador;
    mensaje.style.backgroundImage = "none"
    inputtexto.value = ""
}
function btnDesencriptar(){
    const dencriptador = desencriptar(inputtexto.value)
    mensaje.value = dencriptador;
    mensaje.style.backgroundImage = "none"
    inputtexto.value = ""
}

function encriptar(stringEncriptador){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptador = stringEncriptador.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptador.includes(matrizCodigo[i][0])){
            stringEncriptador = stringEncriptador.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptador;
} 
function desencriptar(stringDencriptador){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDencriptador = stringDencriptador.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDencriptador.includes(matrizCodigo[i][1])){
            stringDencriptador = stringDencriptador.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDencriptador;
} 
function Copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value=""
    Swal.fire({
        title:"Copiado",
        text:"Copiaste el texto",
        icon:"success",
        timer : 1900,
        timerProgressBar: true,
    });
}

function TIEMPO() {
    var today = new Date(),
        hours = today.getHours(),
        minutes = today.getMinutes(),
        date = today.getDate(),
        day = today.getDay(),
        month = today.getMonth();
    hours = (hours == 0) ? 12 : hours;
    hours = (hours > 12) ? hours - 12 : hours;
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    var dia = ["Domingo", " Lunes", "Martes", "Miercoles", "Jueves", "viernes", "Sabado"],
        mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var hr = document.getElementById('time').innerHTML = hours + ":" + minutes,
        dt = document.getElementById('date').innerHTML = dia[day] + ", " + date + " De " + mes[month];
    var time = setTimeout(function() {
        TIEMPO();
    }, 500);
}
function checkTime(e) {
    if (e < 10) {
        e = "0" + e;
    }
    return e;
}