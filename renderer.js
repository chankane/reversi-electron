// () -> no. move cells

let cells

function p(s) {
  console.log(s)
}

function init() {
  console.log('start!')
  cells = document.querySelectorAll('#board tr td')
  p(cells)

  let disc = document.createElement('div')
  disc.classList.add('disc', 'white');
  cells[0].appendChild(disc)
}

document.querySelector('#btn-newgame').addEventListener('click', () => {
  init()
})