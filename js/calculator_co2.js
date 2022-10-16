function calculareasy(){
    var kwatth = document.getElementById("wattsh").value;
    console.log('KiloWatt ' + kwatth);
    var autos = document.getElementById("autos").value;
    console.log('autos ' + autos);
    var camionetas = document.getElementById("camionetas").value;
    console.log('camionetas ' + autos);
    var motos = document.getElementById("motos").value;
    console.log('motos ' + motos);
    var total = document.getElementById("total");
    valorco2 = (kwatth * 0.000348 * 12) + (autos * 0.000143 * 12) + (camionetas * 0.000246 * 12) + (motos * 0.000112 * 12);
    valorco2 = valorco2.toFixed(2);
    total.innerHTML = valorco2;
}

/* document.getElementById('submit').onclick = function () {
    var radios = document.getElementsByName("options_difficulty");
    var selected = Array.from(radios).find(radio => radio.checked);
    alert(selected.value);
    switch(selected.value){
        case "easy":
            document.getElementById('next_form_easy').style.display = '';
            document.getElementById('next_form_medium').style.display = 'none';
            console.log("soy easy");
            break;
        case "medium":
            document.getElementById('next_form_easy').style.display = 'none';
            document.getElementById('next_form_medium').style.display = '';
            console.log("soy m");
            break;
        default:
            console.log("No hay selecciòn");
            break;
    };
}; */
