// class Motor {
//     ligar() {
//         console.log("Motor ligado!")
//     }
// }

// class Carro {
//     modelo: string;
//     motor: Motor; // o carro tem motor

//     constructor(modelo:string, motor: Motor) {
//         this.modelo = modelo;
//         this.motor = motor; // criando o motor junto com o carro 
//     }

//     dirigir() {
//         this.motor.ligar();
//         console.log(`${this.modelo} está em movimento!`);
//     }
    
// }

// const motorNovo = new Motor();
// const carro = new Carro("Tesla", motorNovo);
// carro.dirigir();

class Produto {
     nome: string;
    preco: number;

   
    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }   
}

class Loja {
    nome: string;
    produtos: Produto[]; // a loja tem vários produtos

    constructor(nome:string) {
        this.nome = nome;
        this.produtos = []; // começa vazia
    }
    adicionarProduto(produto: Produto) {
        this.produtos.push(produto);
    } 
    
    mostrarProdutos() {
        console.log(`Produtos da loja ${this.nome}:`);
        

        // Percorrendo os produtos 
        for (let i = 0; i < this.produtos.length; i++) {
            const p = this.produtos[i];
            console.log(`- ${p.nome} (R$ ${p.preco})`);
        }
    }
}

// Criando alguns produtos 
const p1 = new Produto("Camisa", 59);
const p2 = new Produto("Calça", 89);
const p3 = new Produto("Tênis", 199);
const p4 = new Produto("Boné", 29);
const p5 = new Produto("Casaco", 200);

// Criando a Loja 
const loja = new Loja("Victors");

// Adicionando produtos à loja
loja.adicionarProduto(p1);
loja.adicionarProduto(p2);
loja.adicionarProduto(p3);
loja.adicionarProduto(p4);
loja.adicionarProduto(p5);

// Mostrando os produtos cadastrados 
loja.mostrarProdutos();