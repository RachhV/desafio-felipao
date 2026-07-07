let saldoVitorias = calcularSaldo(35, 0)
let nivel = undefined

function calcularSaldo(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas
    return saldoVitorias
}

if (saldoVitorias <= 10){
    nivel = "Ferro"
}
else if (saldoVitorias <= 20){
    nivel = "Bronze"
}
else if (saldoVitorias <= 50){
    nivel = "Prata"
}
else if (saldoVitorias <= 80){
    nivel = "Ouro"
}
else if (saldoVitorias <= 90){
    nivel = "Diamante"
}
else if (saldoVitorias <= 100){
    nivel = "Lendário"
}
else {
    nivel = "Imortal"
}

console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel)