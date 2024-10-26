// Classe base para personagens
function Personagem(nome, habilidade) {
    this.nome = nome;
    this.habilidade = habilidade;

    this.mostraHabilidade = function() {
        console.log("\x1b[1m%s\x1b[0m", `${this.nome} possui a habilidade de ${this.habilidade}`);
    };

    let _energia = 100; // energia inicial vai ser privada

    this.getEnergia = function() { // getter para energia
        return _energia;
    };

    this.setEnergia = function(valor) { // setter para energia
        if (typeof valor === 'number') {
            _energia = valor;
        }
    };

    this.perdeEnergia = function(valor) { // depleta energia (método)
        if (_energia - valor >= 0) {
            _energia -= valor;
            console.log("\x1b[31m%s\x1b[0m", `${this.nome} perdeu ${valor} de energia.`);
        } else {
            console.log(`${this.nome} não tem energia suficiente.`);
        }
    };
}

// napoleao
function Napoleon() {
    Personagem.call(this, "Napoleon Dynamite", "dança maestral");
    
    this.realizaAcao = function() {
        console.log("\x1b[32m%s\x1b[0m", `${this.nome} está dançando na sua frente.`);
        this.perdeEnergia(15);
    };
}

// pedro
function Pedro() {
    Personagem.call(this, "Pedro", "fazer campanhas");
    
    this.realizaAcao = function() {
        console.log("\x1b[32m%s\x1b[0m", `${this.nome} está fazendo uma campanha para presidente da escola.`);
        this.perdeEnergia(20);
    };
}

// deb
function Deb() {
    Personagem.call(this, "Deb", "criar pulseiras e produtos artesanais");
    
    this.realizaAcao = function() {
        console.log("\x1b[32m%s\x1b[0m", `${this.nome} está criando novas miçangas coloridas.`);
        this.perdeEnergia(10);
    };
}

const napoleon = new Napoleon();
const pedro = new Pedro();
const deb = new Deb();

// tesde de métodos e encapsulamento
napoleon.mostraHabilidade();
napoleon.realizaAcao();
console.log(`${napoleon.nome} está com ${napoleon.getEnergia()} de energia.`);

pedro.mostraHabilidade();
pedro.realizaAcao();
console.log(`${pedro.nome} tem remanescentes ${pedro.getEnergia()} de energia.`);

deb.mostraHabilidade();
deb.realizaAcao();
console.log(`${deb.nome} tem apenas ${deb.getEnergia()} de energia.`);
