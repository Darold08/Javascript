class Imovel {
    constructor(quartos, tipo, endereco) {
        this.quartos = quartos;    
        this.tipo = tipo;
        this.endereco = endereco;
    }

    exibirInformacoes() {
        return`Quartos: ${this.quartos} \nTipo: ${this.tipo} \nEndereço: ${this.endereco}`;
    }  
}

const casa = new Imovel(4, "Casa", "Rua da Amizade, 789 - Bairro Alegre");
console.log(casa.exibirInformacoes());

const apartamento = new Imovel(2, "Apartamento", "Avenida da Paz, 123 - Centro");
console.log(apartamento.exibirInformacoes());
