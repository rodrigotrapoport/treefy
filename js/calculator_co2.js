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
};
function calcularmedium() {
    var heladeras = document.getElementById("heladeras").value;
    console.log('Heladeras ' + heladeras);
    var caloventores = document.getElementById("caloventores").value;
    console.log('caloventores ' + caloventores);
    var aa = document.getElementById("aa").value;
    console.log('aa ' + aa);
    var lavaropas = document.getElementById("lavaropas").value;
    console.log('lavaropas ' + lavaropas);
    var pavas = document.getElementById("pavas").value;
    console.log('pavas ' + pavas);
    var computadoras = document.getElementById("computadoras").value;
    console.log('computadoras ' + computadoras);
    var planchas = document.getElementById("planchas").value;
    console.log('planchas ' + planchas);
    var aspiradoras = document.getElementById("aspiradoras").value;
    console.log('aspiradoras ' + aspiradoras);
    var hornos_electricos = document.getElementById("hornos_electricos").value;
    console.log('hornos_electricos ' + hornos_electricos);
    var microondas = document.getElementById("microondas").value;
    console.log('microondas ' + microondas);
    var tvleds = document.getElementById("tvleds").value;
    console.log('tvleds ' + tvleds);
    var total = document.getElementById("total");
    valorco2 = (heladeras * 0.02255 * 12) + (caloventores * 0.08 * 12) + (aa * 0.0656 * 12) + (lavaropas * 0.0048 * 12) + (pavas * 0.0097 * 12) + (computadoras * 0.0155 * 12) + (planchas * 0.0111 * 12) + (aspiradoras * 0.0111 * 12) + (hornos_electricos * 0.0105 * 12) + (microondas * 0.0091 * 12) + (tvleds * 0.00175 * 12);
    valorco2 = valorco2.toFixed(2);
    total.innerHTML = valorco2;
};

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
