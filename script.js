

function calcular() {
    let Moedareal = document.getElementById("real").value

    let resultado = Moedareal / 5.38
    
    document.getElementById("valorFinal").innerText = String(`Valor em $${resultado.toFixed(2)}`);
}


function calcular2() {
    let Moedareal2 = document.getElementById("real2").value

    let resultado2 = Moedareal2 / 5.53
    
    document.getElementById("valorFinal2").innerText = String(`Valor em €${resultado2.toFixed(2)}`);
}
