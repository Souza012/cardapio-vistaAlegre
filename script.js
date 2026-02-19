// ===== HORARIO RESTAURANTE =====
const horaAbertura = 1;
const horaFechamento = 23;

const sabores = [
    {
        nome: "4 Queijos",
        categoria: "salgada",
        precoGrande: 58,
        precoBroto: 38,
        img: "assets/pizzas/4queijos.png"
    },
    {
        nome: "Brocolis c/ Bacon",
        categoria: "salgada",
        precoGrande: 56,
        precoBroto: 36,
        img: "assets/pizzas/brocolis-bacon.png"
    },
    {
        nome: "Carne seca c/ Catupiry",
        categoria: "salgada",
        precoGrande: 67,
        precoBroto: 48,
        img: "assets/pizzas/carne-seca-catupiry.jpeg"
    },
    {
        nome: "Lombo Com Catupiry",
        categoria: "salgada",
        precoGrande: 58,
        precoBroto: 39,
        img: "assets/pizzas/lombo-catupiry.jpeg"
    },
    {
        nome: "Portuguesa",
        categoria: "salgada",
        precoGrande: 55,
        precoBroto: 37,
        img: "assets/pizzas/portuguesa.jpeg"
    },
    {
        nome: "Creme de Avelã",
        categoria: "doce",
        precoGrande: 39,
        precoBroto: 27,
        img: "assets/pizzas/"
    }
];



const precosBorda = {
    "Catupiry": 8,
    "Cheddar": 7,
};

function renderSabores(categoria) {

    const container =
        document.getElementById("listaSabores");

    container.innerHTML = "";

    sabores
        .filter(s => s.categoria === categoria)
        .forEach(sabor => {

            container.innerHTML += `
    <div class="card-pizza">
    <img src="${sabor.img}">
    <h3>${sabor.nome}</h3>
    <p>
    Broto: R$ ${sabor.precoBroto.toFixed(2)}<br>
    Grande: R$ ${sabor.precoGrande.toFixed(2)}
    </p>
    <button onclick="selecionarSabor('${sabor.nome}')">
    Selecionar
    </button>
    </div>
    `;

        });

}



// ===== GERAR CARDS VISUAIS =====
const listaSabores = document.getElementById("listaSabores");

if (listaSabores) {

    sabores.forEach((pizza, index) => {

        listaSabores.innerHTML += `
    <div class="card-sabor" onclick="selecionarSabor('${pizza.nome}')">
    
    <img src="${pizza.img}" class="img-pizza">
    
    <h4>${pizza.nome}</h4>
    
    <span>
    Broto: R$ ${pizza.precoBroto.toFixed(2)} <br>
    Grande: R$ ${pizza.precoGrande.toFixed(2)}
    </span>
    
    </div>
    `;


    });

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

    if (saboresSelecionados.length === 0)
        return 0;

    const tamanho =
        document.getElementById("pizzaTamanho").value;

    let precos =
        saboresSelecionados.map(s => {

            let sabor = sabores.find(x => x.nome === s);

            return tamanho === "P"
                ? sabor.precoBroto
                : sabor.precoGrande;

        });

    let maiorPreco = Math.max(...precos, 0);

    return maiorPreco;

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

    const tamanho =
        document.getElementById("pizzaTamanho").value;

    const borda =
        document.getElementById("pizzaBorda").value;

    const tipo =
        document.getElementById("tipoPizza").value;

    if (tipo === "inteira" &&
        saboresSelecionados.length !== 1) {
        alert("Escolha 1 sabor");
        return;
    }

    if (tipo === "meia" &&
        saboresSelecionados.length !== 2) {
        alert("Escolha 2 sabores");
        return;
    }

    let tamanhoTexto =
        tamanho === "P"
            ? "🍕 BROTO (4 pedaços)"
            : "🍕 GRANDE (8 pedaços)";

    let nomePizza =
        `${tamanhoTexto} - ` +
        saboresSelecionados.join(" / ");


    if (borda)
        nomePizza += ` + Borda ${borda}`;

    let precoPizza = calcularPrecoPizza();

    // pega valor da borda
    let valorBorda = precosBorda[borda] || 0;

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
    "Feital": 2,
    "Centro": 12,
    "Cidade Nova": 3
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
placeholder="Observação"
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

    carrinho.forEach(item => {
        total += item.preco;
        total += item.valorBorda || 0;
    });

    let taxa = 0;

    if (tipoEntrega &&
        tipoEntrega.value === "entrega") {

        taxa = taxasEntrega[bairro?.value] || 0;

        if (enderecoBox)
            enderecoBox.style.display = "block";

    } else {

        if (enderecoBox)
            enderecoBox.style.display = "none";

    }

    const taxaSpan =
        document.getElementById("taxaEntrega");

    if (taxaSpan)
        taxaSpan.textContent =
            taxa.toFixed(2);

    total += taxa;

    const totalSpan =
        document.getElementById("total");

    if (totalSpan)
        totalSpan.textContent =
            total.toFixed(2);

}

if (tipoEntrega)
    tipoEntrega.addEventListener("change",
        atualizarTotal);

if (bairro)
    bairro.addEventListener("change",
        atualizarTotal);

const selectTamanho =
    document.getElementById("pizzaTamanho");

if (selectTamanho) {
    selectTamanho.addEventListener(
        "change",
        atualizarPrecoPreview
    );
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
        document.getElementById("nome").value
        || "Cliente";

    const pagamento =
        document.getElementById("pagamento").value;

    const tipo =
        tipoEntrega.value;

    let mensagem =
        `🍕 *NOVO PEDIDO*\n\n`;

    mensagem += `👤 ${nomeCliente}\n`;
    mensagem += `🚚 ${tipo}\n`;

    if (tipo === "entrega") {

        mensagem += `📍 ${bairro.value}\n`;

        mensagem += `🏠 ${document.getElementById("endereco").value
            }\n`;

        mensagem += `🧾 ${document.getElementById("complemento").value
            }\n`;

    }

    mensagem += `\n🧾 *Itens*\n`;

    carrinho.forEach(item => {

        mensagem += `• ${item.nome}\n`;

        if (item.obs && item.obs.trim() !== "") {
            mensagem += `   📝 Obs: ${item.obs}\n`;
        }

    });

    mensagem += `\n💳 ${pagamento}`;
    mensagem += `\n💰 Total R$ ${document.getElementById("total").textContent
        }`;

    const numero = "5512981860808";

    const url =
        `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)
        }`;

    window.open(url, "_blank");

}

document
    .querySelectorAll(".categorias-fixa a")
    .forEach(link => {

        link.addEventListener("click", (e) => {

            e.preventDefault();

            const id = link
                .getAttribute("href")
                .replace("#", "");

            document
                .querySelectorAll(".categoria")
                .forEach(sec => {
                    sec.style.display = "none";
                });

            document
                .getElementById(id)
                .style.display = "block";

            if (id === "PizzasDoces") {
                renderSabores("doce");
            }

            if (id === "PizzasSalgadas") {
                renderSabores("salgada");
            }
            if (id === "PizzasDoces") {
                renderSabores("doce");
            }

            if (id === "PizzasSalgadas") {
                renderSabores("salgada");
            }


            document
                .querySelectorAll(".categorias-fixa a")
                .forEach(l => l.classList.remove("ativo"));

            link.classList.add("ativo");

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




// ===== INIT =====
renderCarrinho();
atualizarTotal();
