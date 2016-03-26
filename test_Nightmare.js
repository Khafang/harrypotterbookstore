var Nightmare = require('nightmare')
var nightmare = Nightmare({show: true})

nightmare
  .goto('http://localhost:3000/')
  .wait('#harry1')
  .click('#harry1')
  .click('#harry1')
  .wait('#harry2')
  .click('#harry2')
  .click('#harry2')
  .wait('#totalPrice')
  .evaluate(function () {
    return document.querySelector('#totalPrice').innerHTML
  })
  .end()
  .then(function (result) {
    if (parseInt(result) === 360) {
      console.log(true)
    } else {
      console.log(false)
    }
  })
