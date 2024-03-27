const pegunta = document.querySelectorAll('.faq-lista dt')
const resposta = document.querySelectorAll('.faq-lista dd')
pegunta[0].classList.add('ativo')
resposta[0].classList.add('ativo')


function perguntas(){
  this.classList.toggle('ativo')
  this.nextElementSibling.classList.toggle('ativo')
  
}

pegunta.forEach((item)=>{
  item.addEventListener('click', perguntas)
})


const links = document.querySelectorAll('.menu a[href^="#"]')

function scrollanimado(event){
  event.preventDefault()
  const href = event.currentTarget.getAttribute('href')
  const section = document.querySelector(href)
  const topo = section.offsetTop - 150;
 
  window.scrollTo({
    top: topo,
    behavior:"smooth",
  })
  
}

links.forEach((link)=>{
  link.addEventListener('click', scrollanimado)
})