const valor = 100
const formaDePagamento = 3

if (formaDePagamento === 1) {
    console.log(valor - (valor * 0.1))
} else if (formaDePagamento === 2) {
    console.log(valor - (valor * 0.15))
} else if (formaDePagamento === 3) {
    console.log(valor)
} else {
    console.log(valor + (valor * 0.1))
}