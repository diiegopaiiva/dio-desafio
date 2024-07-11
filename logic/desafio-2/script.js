const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calcularRank = (vitorias, derrotas) => {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
};

const main = () => {
    rl.question('Digite o número de vitórias: ', (vitoriasInput) => {
        const vitorias = Number(vitoriasInput);
        rl.question('Digite o número de derrotas: ', (derrotasInput) => {
            const derrotas = Number(derrotasInput);
            const { saldoVitorias, nivel } = calcularRank(vitorias, derrotas);
            console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível ${nivel}`);
            rl.close();
        });
    });
};

main();
