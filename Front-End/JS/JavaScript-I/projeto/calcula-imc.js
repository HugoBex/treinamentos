var pacientes = [];

function Paciente(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
    this.getImc = function() {
        return this.altura > 0 ? parseFloat((this.peso / (this.altura * this.altura)).toFixed(2)) : 0;
    }
}

var btCalcularImc = document.querySelector("#calcula-imcs");
var btAddPaciente = document.querySelector("#adicionar-paciente");

window.addEventListener('load', function carregaPacientes() {
    var listaPacientes = document.querySelectorAll(".paciente");
    if (listaPacientes == null || listaPacientes.length == 0)
        return;

    // remove todos os pacientes e adiciona de acordo com a tabela
    pacientes.splice(0, pacientes.length);
    for (var i = 0; i < listaPacientes.length; i++) {

        pacientes.push(new Paciente(
            listaPacientes[i].querySelector(".info-nome").textContent,
            listaPacientes[i].querySelector(".info-peso").textContent,
            listaPacientes[i].querySelector(".info-altura").textContent
        ));
    }
}, true);



function validaCadastroUsuario(nome, peso, altura) {
    return nome != null && nome.length > 0 && isNumber(peso) && isNumber(altura);
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function adicionarLinhaTabela(paciente) {

    var table = document.querySelector("#tabela");
    var colunas = table.querySelectorAll("th");
    var classesTd = ["info-nome", "info-peso", "info-altura", "info-imc"];
    var valores = [paciente.nome, paciente.peso, paciente.altura, paciente.getImc()];

    var tRow = document.createElement("tr");
    tRow.setAttribute("class", "paciente")

    for (var i = 0; i < classesTd.length; i++) {

        var tData = document.createElement("td");
        tData.setAttribute("class", classesTd[i]);
        tData.textContent = valores[i];
        tRow.appendChild(tData);
        table.appendChild(tRow);
    }
}

function limparCampos() {

    document.querySelector("#campo-nome").value = "";
    document.querySelector("#campo-peso").value = "";
    document.querySelector("#campo-altura").value = "";
}

btCalcularImc.addEventListener("click", function() {

    var imcs = document.querySelectorAll(".info-imc");
    if (imcs == null || imcs.length == 0)
        return;

    for (var i = 0; i < imcs.length; i++) {
        imcs[i].textContent = pacientes[i].getImc();
    }
});


btAddPaciente.addEventListener("click", function() {

    var form = document.querySelector("#form-cadastro");
    var elements = document.querySelector("#form-cadastro").elements;
    var nome = elements["campo-nome"].value;
    var peso = elements["campo-peso"].value;
    var altura = elements["campo-altura"].value;

    if (!validaCadastroUsuario(nome, peso, altura)) {
        alert("valores inválidos. Verifique os campos do cadastro");
        event.preventDefault();
        return;
    }

    var pacienteNovo = new Paciente(nome, peso, altura);
    pacientes.push(pacienteNovo);
    adicionarLinhaTabela(pacienteNovo);
    limparCampos();
    event.preventDefault();
});