const botoes = document.querySelectorAll(&quot;.botao&quot;);
const textos = document.querySelectorAll(&quot;.aba-conteudo&quot;);
for (let i = 0; i &lt; botoes.length; i++) {
botoes[i].onclick = function () {
for (let j = 0; j &lt; botoes.length; j++) {
botoes[j].classList.remove(&quot;ativo&quot;);
textos[j].classList.remove(&quot;ativo&quot;);
}
botoes[i].classList.add(&quot;ativo&quot;);
textos[i].classList.add(&quot;ativo&quot;);
}
}
const contadores = document.querySelectorAll(&quot;.contador&quot;);
const tempoObjetivo1 = new Date(&quot;2024-10-05T00:00:00&quot;);
const tempoObjetivo2 = new Date(&quot;2024-12-05T00:00:00&quot;);
const tempoObjetivo3 = new Date(&quot;2024-12-30T00:00:00&quot;);
const tempoObjetivo4 = new Date(&quot;2024-12-01T00:00:00&quot;);
const tempos =
[tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
let tempoAtual = new Date();
let tempoFinal = tempoObjetivo - tempoAtual;
let segundos = Math.floor(tempoFinal / 1000);
let minutos = Math.floor(segundos / 60);
let horas = Math.floor(minutos / 60);
let dias = Math.floor(horas / 24);
segundos %= 60;
minutos %= 60;
horas %= 24;
if (tempoFinal &gt; 0){
return [dias,horas,minutos,segundos];
} else {
return [0,0,0,0];
}
}

function atualizaCronometro(){
for (let i=0; i&lt;contadores.length;i++){
document.getElementById(&quot;dias&quot;+i).textContent =
calculaTempo(tempos[i])[0];
document.getElementById(&quot;horas&quot;+i).textContent =
calculaTempo(tempos[i])[1];
document.getElementById(&quot;min&quot;+i).textContent =
calculaTempo(tempos[i])[2];
document.getElementById(&quot;seg&quot;+i).textContent =
calculaTempo(tempos[i])[3];
}
}
function comecaCronometro(){
atualizaCronometro();
setInterval(atualizaCronometro,1000);
}
comecaCronometro();