const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
const imgPessoa = document.querySelector(".imagem-pessoa");
const text = document.querySelector(".text1");
const text2 = document.querySelector(".text2");



function btnEcriptar(){
  mensagem.classList.add('visibility')
  const textoEncriptado = encriptar(inputTexto.value)
  mensagem.value = textoEncriptado;
  imgPessoa.style.display = "none";
  text.style.display = "none";
  text2.style.display = "none";
  const copiar = document.getElementById('caixa-botao-copiar')
  copiar.innerHTML = '<button class="copiar" onclick="copiarTexto()">Copiar</button>';
}


function encriptar(stringEncriptada){
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o","ober"],["u","ufat"]]
  stringEncriptada = stringEncriptada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }
  return stringEncriptada;
}

function btnDesencriptar(){
  const textoDesencriptar = descriptografar(inputTexto.value)
  mensagem.value = textoDesencriptar;
  imgPessoa.style.display = "none";
  text.style.display = "none";
  text2.style.display = "none";
  
  const copiar = document.getElementById('caixa-botao-copiar')
  copiar.innerHTML = '<button class="copiar" onclick="copiarTexto()">Copiar</button>';
}

function descriptografar(stringDesencriptada){
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o","ober"],["u","ufat"]]
  stringDesencriptada = stringDesencriptada.toLowerCase();
  
  for(let i = 0; i < matrizCodigo.length; i++){
    if(stringDesencriptada.includes(matrizCodigo[i][1])){
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0] )
    }
  }
  return stringDesencriptada;
}

function copiarTexto() {
  navigator.clipboard.writeText(mensagem.value);
  alert("Copiado para a area de transferencia")
 }

