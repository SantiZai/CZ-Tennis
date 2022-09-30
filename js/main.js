const referencia1 = document.getElementById('referencia1');
const referencia2 = document.getElementById('referencia2');
const referencia3 = document.getElementById('referencia3');
const referencia4 = document.getElementById('referencia4');

const referencias = [referencia1, referencia2, referencia3, referencia4];

function activar1() {
  for (let referencia of referencias) {
    if (referencia.classList.contains('active')) {
      referencia.classList.remove('active');
    }
  }
  referencia1.classList.add('active');
}

function activar2() {
  for (let referencia of referencias) {
    if (referencia.classList.contains('active')) {
      referencia.classList.remove('active');
    }
  }
  referencia2.classList.add('active');
}

function activar3() {
  for (let referencia of referencias) {
    if (referencia.classList.contains('active')) {
      referencia.classList.remove('active');
    }
  }
  referencia3.classList.add('active');
}

function activar4() {
  for (let referencia of referencias) {
    if (referencia.classList.contains('active')) {
      referencia.classList.remove('active');
    }
  }
  referencia4.classList.add('active');
}

referencia1.onclick = activar1;
referencia2.onclick = activar2;
referencia3.onclick = activar3;
referencia4.onclick = activar4;
