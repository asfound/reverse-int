module.exports = function reverse (n) {
  return Math.abs(n).toString().split('').reverse().join('')
}
 console.log(Number(Math.abs(250).toString().split('').reverse().join('')))
