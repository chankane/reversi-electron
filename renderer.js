// () -> no. move cells

const { ipcRenderer } = require('electron')

// let board

function p(s) {
  console.log(s)
}

function apply(board_state) {
  board = document.querySelectorAll('#board tr td')
  for (let i = 0; i < board.length; i++) {
    let disc = document.createElement('div')
    switch (board_state[i]) {
      case 'B':
        disc.classList.add('disc', 'black')
        break;
      case 'W':
        disc.classList.add('disc', 'white')
        break;
    }
    board[i].appendChild(disc)
  }
}

function init() {
  // board = document.querySelectorAll('#board tr td')
  let turn = document.querySelector('input[name="turn"]:checked').value
  ipcRenderer.send('init', turn)
}

ipcRenderer.on('init-reply', (event, arg) => {
  console.log(arg)
  apply(arg)
})

function put(params) {
  let disc = document.createElement('div')
  disc.classList.add('disc', 'white')
  board[0].appendChild(disc)
  //ipcRenderer.send('init')
}

// register events
document.querySelector('#btn-newgame').addEventListener('click', () => {
  init()
})