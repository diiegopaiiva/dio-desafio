class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = ' magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque indefinido';
        }
        return `O ${this.tipo} atacou usando ${ataque}`;
    }
}

// Exemplo de uso
const meuHeroi = new Heroi('Herói', 25, 'mago');
const meuHeroi2 = new Heroi('Herói', 24, 'monge');
console.log(meuHeroi.atacar());
console.log(meuHeroi2.atacar());