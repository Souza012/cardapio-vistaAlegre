// ===== HORARIO RESTAURANTE =====
const horaAbertura = 1;
const horaFechamento = 23;

const sabores = [

    {
        nome: "Mussarela",
        descricao: "Molho de tomate, mussarela, tomate e orégano.",
        categoria: "salgada",
        precoGrande: 45,
        precoBroto: 27,
        img: "assets/pizzas/mussarela-pizza.png"
    },

    {
        nome: "Marguerita",
        descricao: "Molho de tomate, mussarela, manjericão fresco, tomate e orégano.",
        categoria: "salgada",
        precoGrande: 45,
        precoBroto: 27,
        img: "assets/pizzas/marguerida-pizza.png"
    },

    {
        nome: "Bauru",
        descricao: "Molho de tomate, mussarela, presunto ralado, tomate e orégano.",
        categoria: "salgada",
        precoGrande: 45,
        precoBroto: 27,
        img: "assets/pizzas/bauru-pizza.png"
    },

    {
        nome: "Calabresa",
        descricao: "Molho de tomate, mussarela, calabresa, cebola e orégano.",
        categoria: "salgada",
        precoGrande: 45,
        precoBroto: 27,
        img: "assets/pizzas/calabresa-pizza.png"
    },

    {
        nome: "Bacon",
        descricao: "Molho de tomate, mussarela, bacon e orégano.",
        categoria: "salgada",
        precoGrande: 56,
        precoBroto: 34,
        img: "assets/pizzas/bacon-pizza.jpeg"
    },

    {
        nome: "Portuguesa",
        descricao: "Molho de tomate, mussarela, presunto, ovo cozido, palmito, ervilha, cebola e orégano.",
        categoria: "salgada",
        precoGrande: 55,
        precoBroto: 33,
        img: "assets/pizzas/portuguesa.jpeg"
    },

    {
        nome: "Frango c/ Catupiry",
        descricao: "Molho de tomate, frango desfiado, mussarela, catupiry e orégano.",
        categoria: "salgada",
        precoGrande: 57,
        precoBroto: 35,
        img: "assets/pizzas/frango-catupiry-pizza.png"
    },

    {
        nome: "2 Queijos",
        descricao: "Molho de tomate, mussarela, catupiry e orégano.",
        categoria: "salgada",
        precoGrande: 52,
        precoBroto: 32,
        img: "assets/pizzas/4queijos.png"
    },

    {
        nome: "Palmito",
        descricao: "Molho de tomate, mussarela, palmito e orégano.",
        categoria: "salgada",
        precoGrande: 50,
        precoBroto: 30,
        img: "assets/pizzas/portuguesa.jpeg"
    },

    {
        nome: "Brocolis com Bacon",
        descricao: "Molho de tomate, mussarela, brócolis, bacon e orégano.",
        categoria: "salgada",
        precoGrande: 56,
        precoBroto: 34,
        img: "assets/pizzas/brocolis-bacon.png"
    },

    {
        nome: "Fran Bacon",
        descricao: "Molho de tomate, frango desfiado, mussarela, bacon e orégano.",
        categoria: "salgada",
        precoGrande: 56,
        precoBroto: 34,
        img: "assets/pizzas/fran-bacon.png"
    },

    {
        nome: "Carijó",
        descricao: "Molho de tomate, mussarela, frango desfiado, milho e orégano.",
        categoria: "salgada",
        precoGrande: 54,
        precoBroto: 33,
        img: "assets/pizzas/frango-catupiry-pizza.png"
    },

    {
        nome: "Frango Especial",
        descricao: "Molho de tomate, frango desfiado, mussarela, calabresa ralada, palmito, catupiry e orégano.",
        categoria: "salgada",
        precoGrande: 62,
        precoBroto: 37,
        img: "assets/pizzas/frango-catupiry-pizza.png"
    },

    {
        nome: "Baiacatu",
        descricao: "Molho de tomate, calabresa ralada, pimenta biquinho, catupiry e orégano.",
        categoria: "salgada",
        precoGrande: 50,
        precoBroto: 30,
        img: "assets/pizzas/baiiacatu-pizza.png"
    },

    {
        nome: "4 Queijos",
        descricao: "Molho de tomate, mussarela, provolone, parmesão, catupiry e orégano.",
        categoria: "salgada",
        precoGrande: 58,
        precoBroto: 35,
        img: "assets/pizzas/4queijos.png"
    },

    {
        nome: "Lombo com Catupiry",
        descricao: "Molho de tomate, mussarela, lombo canadense, catupiry e orégano.",
        categoria: "salgada",
        precoGrande: 58,
        precoBroto: 35,
        img: "assets/pizzas/lombo-catupiry.jpeg"
    },

    {
        nome: "Peperoni",
        descricao: "Molho de tomate, mussarela, peperoni e orégano.",
        categoria: "salgada",
        precoGrande: 60,
        precoBroto: 36,
        img: "assets/pizzas/peperoni-pizza.jpeg"
    },

    {
        nome: "Pizza da Casa",
        descricao: "Molho de tomate, frango desfiado, mussarela, bacon, catupiry e orégano.",
        categoria: "salgada",
        precoGrande: 65,
        precoBroto: 39,
        img: "assets/pizzas/fran-bacon.png"
    },

    {
        nome: "Atum",
        descricao: "Molho de tomate, mussarela, atum, cebola e orégano.",
        categoria: "salgada",
        precoGrande: 57,
        precoBroto: 35,
        img: "assets/pizzas/carne-seca-catupiry.jpeg"
    },

    {
        nome: "Carne Seca Acebolada",
        descricao: "Molho de tomate, mussarela, carne seca, cebola e orégano.",
        categoria: "salgada",
        precoGrande: 65,
        precoBroto: 39,
        img: "assets/pizzas/carne-seca-aceboolada.png"
    },

    {
        nome: "Carne Seca c/ Catupiry",
        descricao: "Molho de tomate, mussarela, carne seca, catupiry e orégano.",
        categoria: "salgada",
        precoGrande: 67,
        precoBroto: 40,
        img: "assets/pizzas/carne-seca-catupiry.jpeg"
    }

];


const pizzasDoces = [
    {
        nome: "Creme de Avelã",
        descricao: "Creme de leite, creme de avelã, chocolate branco e granulado.",
        precoGrande: 48,
        precoBroto: 29,
        img: "assets/pizzas/cremeAvela.jpeg"
    },
    {
        nome: "Chocolate ao Leite c/ Chocolate Branco",
        descricao: "Creme de leite, creme de avelã e confete.",
        precoGrande: 48,
        precoBroto: 29,
        img: "assets/pizzas/Chocolate-ao-leite-pizza.png"
    }
];



const precosBorda = {

    Catupiry: {
        broto: 7,
        grande: 12
    },

    Cheddar: {
        broto: 7,
        grande: 12
    },

    Mussarela: {
        broto: 9,
        grande: 15
    },

    QuatroQueijos: {
        broto: 9,
        grande: 15
    },
    CremeAvela: {
        broto: 7,
        grande: 12
    },

    ChocolateBranco: {
        broto: 7,
        grande: 12
    },

    ChocolateAoLeite: {
        broto: 7,
        grande: 12
    }


};


function atualizarBordas(tipo) {

    const select = document.getElementById("pizzaBorda");
    const opcoes = select.querySelectorAll("option");

    opcoes.forEach(op => {

        if (op.value === "") return;

        const ehDoce = bordasDoces.includes(op.value);

        if (tipo === "doce") {
            op.style.display = ehDoce ? "block" : "none";
        } else {
            op.style.display = ehDoce ? "none" : "block";
        }

    });

    select.value = "";
}

function renderSabores(lista) {

    const container = document.getElementById("listaSabores");

    container.innerHTML = "";

    lista.forEach(sabor => {

        container.innerHTML += `
            <div class="card-sabor" onclick="selecionarSabor('${sabor.nome}')">
            
            <img src="${sabor.img}" class="img-pizza">
            
            <h4>${sabor.nome}</h4>
            
            <span>
            Broto: R$ ${sabor.precoBroto?.toFixed(2) ?? "--"} <br>
            Grande: R$ ${sabor.precoGrande?.toFixed(2) ?? "--"}
            </span>
            
            <button 
            class="btn-ingredientes"
            onclick="event.stopPropagation(); toggleIngredientes(this)">
            Ingredientes
            </button>
            
            <p class="ingredientes">
            ${sabor.descricao || "Ingredientes não informados"}
            </p>
            
            </div>
            `;

    });

}


function toggleIngredientes(btn) {

    const texto = btn.nextElementSibling;

    texto.style.display =
        texto.style.display === "block"
            ? "none"
            : "block";

}

// ===== STATUS RESTAURANTE =====
const statusRestaurante = document.getElementById("statusRestaurante");
const Abertura = document.getElementById("Abertura");
const btnEnviar = document.getElementById("btnEnviar");

let restauranteAberto = true;

function verificarHorario() {

    const agora = new Date();
    const hora = agora.getHours();

    restauranteAberto = hora >= horaAbertura && hora < horaFechamento;

    if (statusRestaurante) {
        statusRestaurante.innerHTML =
            restauranteAberto
                ? `<span class="aberto">🟢 Aberto</span>`
                : `<span class="fechado">🔴 Fechado</span>`;
    }

    if (btnEnviar) {
        btnEnviar.style.display =
            restauranteAberto ? "block" : "none";
    }

    if (!restauranteAberto && Abertura) {

        let proximaHora = new Date();

        if (hora >= horaFechamento) {
            proximaHora.setDate(proximaHora.getDate() + 1);
        }

        proximaHora.setHours(horaAbertura, 0, 0);

        const diff = proximaHora - agora;

        const h = Math.floor(diff / 1000 / 60 / 60);
        const m = Math.floor((diff / 1000 / 60) % 60);

        Abertura.textContent = `Abre em ${h}h ${m}m`;

    } else if (Abertura) {
        Abertura.textContent = "";
    }

}

setInterval(verificarHorario, 1000);
verificarHorario();

function atualizarPrecoPreview() {

    if (saboresSelecionados.length === 0) return;

    let preco = calcularPrecoPizza();

    const previewPreco =
        document.getElementById("pizzaPrecoPreview");

    if (previewPreco) {
        previewPreco.textContent =
            "R$ " + preco.toFixed(2);
    }

}

// ===== BUILDER PIZZA =====
let saboresSelecionados = [];

function selecionarSabor(nome) {

    const tipo = document.getElementById("tipoPizza").value;

    if (tipo === "inteira") {

        saboresSelecionados = [nome];

    } else {

        if (saboresSelecionados.includes(nome)) {

            saboresSelecionados =
                saboresSelecionados.filter(s => s !== nome);

        } else {

            if (saboresSelecionados.length >= 2) {
                alert("Só pode escolher 2 sabores");
                return;
            }

            saboresSelecionados.push(nome);
        }

    }

    atualizarBuilder();
    atualizarPrecoPreview();

}

function calcularPrecoPizza() {

    if (saboresSelecionados.length === 0) return 0;

    const tamanho = document.getElementById("pizzaTamanho").value;

    const todasPizzas = [...sabores, ...pizzasDoces];

    let precos = saboresSelecionados.map(nome => {

        let sabor = todasPizzas.find(x => x.nome === nome);

        return tamanho === "P"
            ? sabor.precoBroto
            : sabor.precoGrande;

    });

    return Math.max(...precos, 0);
}

function atualizarBuilder() {

    const tipo =
        document.getElementById("tipoPizza").value;

    const btn =
        document.querySelector(".pizza-builder button");

    btn.disabled =
        tipo === "inteira"
            ? saboresSelecionados.length !== 1
            : saboresSelecionados.length !== 2;

    const preview =
        document.getElementById("pizzaPreview");

    if (preview) {

        preview.textContent =
            saboresSelecionados.length
                ? "Selecionado: " +
                saboresSelecionados.join(" / ")
                : "Nenhum sabor selecionado";

    }

    // ATIVA CARD VISUAL
    document.querySelectorAll(".card-sabor")
        .forEach(card => {

            const nome =
                card.querySelector("h4").textContent;

            if (saboresSelecionados.includes(nome)) {
                card.classList.add("ativo");
            } else {
                card.classList.remove("ativo");
            }

        });

}

function adicionarPizza() {

    if (!restauranteAberto) {
        alert("Restaurante fechado");
        return;
    }

    const tamanho = document.getElementById("pizzaTamanho").value;
    const borda = document.getElementById("pizzaBorda").value;
    const tipo = document.getElementById("tipoPizza").value;

    if (tipo === "inteira" && saboresSelecionados.length !== 1) {
        alert("Escolha 1 sabor");
        return;
    }

    if (tipo === "meia" && saboresSelecionados.length !== 2) {
        alert("Escolha 2 sabores");
        return;
    }

    let tamanhoTexto =
        tamanho === "P"
            ? "🍕 BROTO (4 pedaços)"
            : "🍕 GRANDE (8 pedaços)";

    let nomePizza =
        `${tamanhoTexto} - ` + saboresSelecionados.join(" / ");

    if (borda)
        nomePizza += ` + Borda ${borda}`;

    let precoPizza = calcularPrecoPizza();

    let valorBorda = 0;

    if (borda && precosBorda[borda]) {
        valorBorda =
            tamanho === "G"
                ? precosBorda[borda].grande
                : precosBorda[borda].broto;
    }

    carrinho.push({
        nome: nomePizza,
        preco: precoPizza,
        borda: borda || "",
        valorBorda: valorBorda,
        obs: ""
    });

    saboresSelecionados = [];

    salvar();
    renderCarrinho();
    atualizarTotal();
    atualizarBuilder();
}

// ===== DADOS INICIAIS =====
let carrinho =
    JSON.parse(localStorage.getItem("carrinho")) || [];

const taxasEntrega = {
    "Alto Cardoso": 18,
    "Araretama": 20,
    "Bairro das Campinas": 6,
    "Beta": 5,
    "Castolira": 7,
    "Centro": 12,
    "Cícero Prado": 6,
    "Cidade Nova": 3,
    "Crispim": 15,
    "Delta": 5,
    "Feital": 2,
    "Goiabal": 15,
    "Jardim Eloyna": 5,
    "Jardim Regina": 3,
    "Laerte Assunnção": 9,
    "Lot. João Tamborideguy Fernandes": 7,
    "Mantiqueira": 15,
    "Maricá": 5,
    "Marieta Azeredo": 7,
    "Padre Rodolfo": 7,
    "Parque Empresarial Santa Rita": 15,
    "Reserva dos Lagos": 15,
    "Santa Cecília": 7,
    "Santana": 12,
    "Shangrillá": 8,
    "Terra Nova": 2,
    "Triângulo": 5,
    "Vitória Vale 2": 8,
    "Vitória Vale 3": 6
};

const tipoEntrega =
    document.getElementById("tipoEntrega");

const bairro =
    document.getElementById("bairro");

const enderecoBox =
    document.getElementById("enderecoBox");


// ===== STORAGE =====
function salvar() {
    localStorage.setItem("carrinho",
        JSON.stringify(carrinho));
}


// ===== CARRINHO =====
function renderCarrinho() {

    const box =
        document.getElementById("carrinho");

    if (!box) return;

    box.innerHTML = "";

    carrinho.forEach((item, index) => {

        box.innerHTML += `
<div class="item-carrinho">
<p>
<strong>${item.nome}</strong><br>
R$ ${item.preco.toFixed(2)}
${item.borda ? `<br>🧀 Borda ${item.borda} + R$ ${item.valorBorda.toFixed(2)}` : ""}
</p>



<input
placeholder="Observação Ex: sem cebola"
value="${item.obs || ""}"
onchange="salvarObs(${index},this.value)"
>

<button onclick="removerCarrinho(${index})">
remover
</button>

</div>
`;

    });

}


function salvarObs(index, valor) {
    carrinho[index].obs = valor;
    salvar();
}


function removerCarrinho(index) {

    carrinho.splice(index, 1);

    salvar();
    renderCarrinho();
    atualizarTotal();

}


// ===== TOTAL =====
function atualizarTotal() {

    let total = 0;

    // soma itens do carrinho
    carrinho.forEach(item => {
        total += Number(item.preco) || 0;
        total += Number(item.valorBorda) || 0;
    });

    let taxa = 0;

    // verifica tipo de entrega
    if (tipoEntrega && tipoEntrega.value === "entrega") {

        taxa = taxasEntrega[bairro?.value] || 0;

        if (enderecoBox) {
            enderecoBox.style.display = "block";
        }

    } else {

        if (enderecoBox) {
            enderecoBox.style.display = "none";
        }

    }

    // mostra taxa
    const taxaSpan = document.getElementById("taxaEntrega");
    if (taxaSpan) {
        taxaSpan.textContent = taxa.toFixed(2);
    }

    // soma taxa
    total += taxa;

    // mostra total
    const totalSpan = document.getElementById("total");
    if (totalSpan) {
        totalSpan.textContent = total.toFixed(2);
    }
}


// ===== EVENTOS =====
if (tipoEntrega) {
    tipoEntrega.addEventListener("change", atualizarTotal);
}

if (bairro) {
    bairro.addEventListener("change", atualizarTotal);
}

const selectTamanho = document.getElementById("pizzaTamanho");

if (selectTamanho) {
    selectTamanho.addEventListener("change", atualizarPrecoPreview);
}


// ===== WHATSAPP =====
function enviarPedido() {

    if (!restauranteAberto) {
        alert("Restaurante fechado");
        return;
    }

    if (carrinho.length === 0) {
        alert("Carrinho vazio");
        return;
    }

    const nomeCliente =
        document.getElementById("nome").value || "Cliente";

    const pagamento =
        document.getElementById("pagamento").value;

    const tipo =
        tipoEntrega.value;

    // HORARIO
    const agora = new Date();
    const hora = agora.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit"
    });

    let mensagem =
        `🍕 *NOVO PEDIDO* (${hora})\n\n`;

    mensagem += `👤 ${nomeCliente}\n`;
    mensagem += `🚚 ${tipo}\n`;

    if (tipo === "entrega") {

        mensagem += `📍 ${bairro.value}\n`;

        mensagem += `🏠 ${document.getElementById("endereco").value}\n`;

        mensagem += `🧾 ${document.getElementById("complemento").value}\n`;

    }

    mensagem += `\n🧾 *Itens*\n`;

    carrinho.forEach(item => {

        mensagem += `• ${item.nome}\n`;

        if (item.obs && item.obs.trim() !== "") {
            mensagem += `   📝 Obs: ${item.obs}\n`;
        }

    });

    // TROCO
    if (pagamento === "Dinheiro") {

        const troco = document.getElementById("troco").value;

        if (troco) {
            mensagem += `\n💵 Troco para: R$ ${troco}\n`;
        }

    }

    mensagem += `\n💳 ${pagamento}`;

    mensagem += `\n💰 Total R$ ${document.getElementById("total").textContent}`;

    const numero = "5512981860808";

    const url =
        `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
}

document.querySelectorAll(".categorias-fixa a")
    .forEach(link => {

        link.addEventListener("click", (e) => {

            e.preventDefault();

            const id = link.getAttribute("href");
            const secao = document.querySelector(id);

            // muda sabores
            if (id === "#PizzasSalgadas") {
                renderSabores(sabores);
                atualizarBordas("salgada");
            }

            if (id === "#PizzasDoces") {
                renderSabores(pizzasDoces);
                atualizarBordas("doce");
            }

            // rola até a seção
            if (secao) {
                secao.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });
    });
// ===============================
// BEBIDAS -> CARRINHO AUTOMÁTICO
// ===============================

document.querySelectorAll(".contador").forEach(card => {

    const btnMais = card.querySelector(".aumentar");
    const btnMenos = card.querySelector(".diminuir");
    const spanQtd = card.querySelector(".quantidade");

    const nome = card.dataset.name;
    const preco = Number(card.dataset.price);

    let qtd = 0;

    btnMais.addEventListener("click", () => {

        qtd++;
        spanQtd.textContent = qtd;

        carrinho.push({
            nome: nome,
            preco: preco,
            obs: ""
        });

        salvar();
        renderCarrinho();
        atualizarTotal();

    });

    btnMenos.addEventListener("click", () => {

        if (qtd <= 0) return;

        qtd--;
        spanQtd.textContent = qtd;

        // remove UMA bebida do carrinho
        const index = carrinho.findIndex(item => item.nome === nome);

        if (index !== -1) {
            carrinho.splice(index, 1);
        }

        salvar();
        renderCarrinho();
        atualizarTotal();

    });

});


document.getElementById("pagamento").addEventListener("change", function () {

    const areaTroco = document.getElementById("areaTroco");

    if (this.value === "Dinheiro") {
        areaTroco.style.display = "block";
    } else {
        areaTroco.style.display = "none";
    }

});

const balaoWhatsapp = document.querySelector(".whatsapp-msg");

function mostrarBalao(){

    balaoWhatsapp.style.display = "block";

    setTimeout(() => {
        balaoWhatsapp.style.display = "none";
    }, 5000);

}

setInterval(mostrarBalao,15000);

setTimeout(mostrarBalao,4000);



// ===== INIT =====
renderSabores(sabores);
renderCarrinho();
atualizarTotal();
