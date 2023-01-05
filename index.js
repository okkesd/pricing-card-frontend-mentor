function clickButton() {
  const div = document.querySelector('div')
  var p = document.createElement('p')
  p.setAttribute('style'," ")
  p.textContent = 'satın alım işlemi gerçekleştiriliyor... yönlendiriliyor'
  p.style.backgroundColor='green'
  p.style.color="black"
  p.style.width="50%"
  p.style.height="10%"
  p.style.display="flex"
  p.style.margin="auto"
  p.style.border="3px red solid"
  p.style.borderRadius= '15px'
  p.style.textAlign="center"
  div.appendChild(p)
}
