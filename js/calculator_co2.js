// let easy = document.querySelectorAll('.easy-input');

// console.log(easy)
// easy.addEventListener('blur', ()=>{
//     calculareasy()
//   });
document.querySelectorAll('.easy-input').forEach(item => {
    item.addEventListener('blur', event => {
        calculareasy()
    })
})
document.querySelectorAll('.medium-input').forEach(item => {
    item.addEventListener('blur', event => {
        calcularmedium()
    })
})
function calculareasy(){
    let kwatth = document.getElementById("wattsh").value;
    console.log('KiloWatt ' + kwatth);
    let autos = document.getElementById("autos").value;
    console.log('autos ' + autos);
    let camionetas = document.getElementById("camionetas").value;
    console.log('camionetas ' + autos);
    let motos = document.getElementById("motos").value;
    console.log('motos ' + motos);
    let total = document.getElementById("totalEasy");
    valorco2 = (kwatth * 0.000348 * 12) + (autos * 0.000143 * 12) + (camionetas * 0.000246 * 12) + (motos * 0.000112 * 12);
    valorco2 = valorco2.toFixed(2);
    total.innerHTML = valorco2;
};
function calcularmedium() {
    let heladeras = document.getElementById("heladeras").value;
    console.log('Heladeras ' + heladeras);
    let caloventores = document.getElementById("caloventores").value;
    console.log('caloventores ' + caloventores);
    let aa = document.getElementById("aa").value;
    console.log('aa ' + aa);
    let lavaropas = document.getElementById("lavaropas").value;
    console.log('lavaropas ' + lavaropas);
    let pavas = document.getElementById("pavas").value;
    console.log('pavas ' + pavas);
    let computadoras = document.getElementById("computadoras").value;
    console.log('computadoras ' + computadoras);
    let planchas = document.getElementById("planchas").value;
    console.log('planchas ' + planchas);
    let aspiradoras = document.getElementById("aspiradoras").value;
    console.log('aspiradoras ' + aspiradoras);
    let hornos_electricos = document.getElementById("hornos_electricos").value;
    console.log('hornos_electricos ' + hornos_electricos);
    let microondas = document.getElementById("microondas").value;
    console.log('microondas ' + microondas);
    let tvleds = document.getElementById("tvleds").value;
    console.log('tvleds ' + tvleds);
    let total = document.getElementById("totalMedium");
    valorco2 = (heladeras * 0.02255 * 12) + (caloventores * 0.08 * 12) + (aa * 0.0656 * 12) + (lavaropas * 0.0048 * 12) + (pavas * 0.0097 * 12) + (computadoras * 0.0155 * 12) + (planchas * 0.0111 * 12) + (aspiradoras * 0.0111 * 12) + (hornos_electricos * 0.0105 * 12) + (microondas * 0.0091 * 12) + (tvleds * 0.00175 * 12);
    valorco2 = valorco2.toFixed(2);
    total.innerHTML = valorco2;
};

/* document.getElementById('submit').onclick = function () {
    let radios = document.getElementsByName("options_difficulty");
    let selected = Array.from(radios).find(radio => radio.checked);
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
