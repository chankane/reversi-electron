let black = [0, 0]
let white = [0, 0]

exports.hello = function(params) {
  return 'Hello!'
}

function convert_from_bitboard(black, white) {
  converted = ''
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 32; j++) {
      b = (black[i] >> (31 - j)) & 1
      w = (white[i] >> (31 - j)) & 1
      if (b == 1 && w == 0) {
        converted += 'B'
      } else if (b == 0 && w == 1) {
        converted += 'W'
      } else {
        converted += '-'
      }
    }
  }
  return converted
}

exports.init = function(turn) {
  black[0] = 0x00000008
  black[1] = 0x10000000
  white[0] = 0x00000010
  white[1] = 0x08000000

  return convert_from_bitboard(black, white)
}