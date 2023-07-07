const form = document.querySelector("#siteForm");
//selections
let selectOrg = document.querySelector("#org");
let selectVari = document.querySelector("#vari");
//textarea
let textarea = document.querySelector("#textarea");
//notas
let notas = document.querySelector("#nota");

let avaliacoes = [];

const sectionContent = document.querySelector("#sectionContent");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const obj = {
        organizacao: selectOrg.value,
        variedade: selectVari.value,
        texto: textarea.value,
        nota: notas.value,
    };
    avaliacoes.push(obj);
    const avaible = JSON.stringify(avaliacoes);
    localStorage.setItem('userNotas', avaible);

    console.log(obj);
});

let item = localStorage.getItem('userNotas');
if (item) {
    avaliacoes = JSON.parse(item);
}

for (let i in avaliacoes) {
    let avaliacoesv = avaliacoes[i];
    let colocam = document.createElement('div');
    colocam.id = 'conteudos';
    colocam.innerHTML = `
      <p>Organização: ${avaliacoesv.organizacao}</p>
      <p>Variedades: ${avaliacoesv.variedade}</p>
      <p>Sua opnião: ${avaliacoesv.texto}</p>
      <p>Nota: ${avaliacoesv.nota}</p>
    `;
    sectionContent.appendChild(colocam);
}
