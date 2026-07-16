let saldoVitorias = calcularSaldo(35, 0);
let nivel = definirNivel(saldoVitorias);

function calcularSaldo(vitorias, derrotas){
    return vitorias - derrotas;
}

function definirNivel(saldoVitorias){
    if (saldoVitorias <= 10){
        return "Ferro";
    }
    else if (saldoVitorias <= 20){
        return "Bronze";
    }
    else if (saldoVitorias <= 50){
        return "Prata";
    }
    else if (saldoVitorias <= 80){
        return "Ouro";  
    }
    else if (saldoVitorias <= 90){
        return "Diamante";
    }
    else if (saldoVitorias <= 100){
        return "Lendário";
    }
    else {
        return "Imortal";
    }
}

console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel)
