/*Button to collapse nav content*/
//GALERIA
const btn_galeria = document.getElementById('btn-toggle-galeria');
const content_galeria = document.getElementById('ul-content-galeria');

btn_galeria.addEventListener('click', function() {
  if (content_galeria.style.display === 'none') {
    content_galeria.style.display = 'block';
  } else {
    content_galeria.style.display = 'none';
  }
});

//INDICAÇÕES
const btn_indicacoes = document.getElementById('btn-toggle-indicacoes');
const content_indicacoes = document.getElementById('ul-content-indicacoes');

btn_indicacoes.addEventListener('click', function() {
  if (content_indicacoes.style.display === 'none') {
    content_indicacoes.style.display = 'block';
  } else {
    content_indicacoes.style.display = 'none';
  }
});