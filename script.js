var paragrafo = document.querySelector('p');
var texto = paragrafo.innerHTML;
var index = 0;

function escrever() {
    paragrafo.innerHTML = paragrafo.innerHTML.replace('|', '');

    if(texto.length > index) {
        if(index == 0) {
            paragrafo.innerHTML = texto.charAt(index)
        } else {
            paragrafo.innerHTML += texto.charAt(index)
        }
        paragrafo.innerHTML += '|';
        index++
        setTimeout(escrever, 200)
    }
}
escrever();
