/* global angular */
var app = angular.module('todoApp', [])
app.controller('todoController', function ($scope) {
  $scope.addBook = function (index) {
    $scope.selectedBooks[index].amount++
    CALCULATE()
  }

  $scope.deleteBook = function (index) {
    $scope.selectedBooks[index].amount--
    CALCULATE()
  }

  $scope.clear = function () {
    $scope.selectedBooks = [{
      name: 'แฮรี่พอตเตอร์ กับ ศิลาอาถรรพ์',
      img: 'HarryEP1.jpg',
      price: 100,
      amount: 0
    }, {
      name: 'แฮรี่พอตเตอร์ กับ ห้องแห่งความลับ',
      img: 'HarryEP2.jpg',
      price: 100,
      amount: 0
    }, {
      name: 'แฮรี่พอตเตอร์ กับ นักโทษแห่งอาสคาบัน',
      img: 'HarryEP3.jpg',
      price: 100,
      amount: 0
    }, {
      name: 'แฮรี่พอตเตอร์ กับ ถ้วยอัคนี',
      img: 'HarryEP4.jpg',
      price: 100,
      amount: 0
    }, {
      name: 'แฮรี่พอตเตอร์ กับ ภาคีนกฟีนิกส์',
      img: 'HarryEP5.jpg',
      price: 100,
      amount: 0
    }, {
      name: 'แฮรี่พอตเตอร์ กับ เจ้าชายเลือดผสม',
      img: 'HarryEP6.jpg',
      price: 100,
      amount: 0
    }, {
      name: 'แฮรี่พอตเตอร์ กับ เครื่องรางยมทูต',
      img: 'HarryEP7.jpg',
      price: 100,
      amount: 0
    }]
    $scope.detailPrice = []
    $scope.total = 0
    $scope.discount = 0
    $scope.subtotal = 0
    $scope.amoutBooks = 0
  }

  function CALCULATE () {
    $scope.detailPrice = []
    var groupArray = SETARRAYTORESULT()
    for (var a = 0; a < groupArray.length; a++) {
      var jsonPrice = {
        books: groupArray[a],
        subtotal: CALSUBTOTAL(groupArray[a]),
        discount: CALDISCOUNT(groupArray[a]),
        total: CalTotal(groupArray[a]),
        percentDiscount: CALPERCENT(groupArray[a].length)
      }
      $scope.detailPrice.push(jsonPrice)
    }
    $scope.total = CALALLTOTAL($scope.detailPrice)
    $scope.discount = CALLALLDIS($scope.detailPrice)
    $scope.subtotal = CALALLSUB($scope.detailPrice)
    $scope.amoutBooks = CalAmountBook()
  }

  function SETARRAYTORESULT () {
    var arrayResult = []
    var tempArrayBook = JSON.parse(JSON.stringify($scope.selectedBooks))
    var maxOfTemp = CalculateMAXTemp(tempArrayBook)
    for (var n = 0; n < maxOfTemp; n++) {
      arrayResult[n] = []
      for (var m = 0; m < tempArrayBook.length; m++) {
        if (tempArrayBook[m].amount !== 0) {
          arrayResult[n].push($scope.selectedBooks[m])
          tempArrayBook[m].amount--
        }
      }
    }
    return arrayResult
  }

  function CalculateMAXTemp (tempArrayBook) {
    var max = 0
    for (var i = 0; i < tempArrayBook.length; i++) {
      if (max < tempArrayBook[i].amount) {
        max = tempArrayBook[i].amount
      }
    }
    return max
  }

  function CalAmountBook () {
    var amount = 0
    for (var i = 0; i < $scope.selectedBooks.length; i++) {
      amount += $scope.selectedBooks[i].amount
    }
    return amount
  }

  function CalTotal (books) {
    var subtotal = CALSUBTOTAL(books)
    var discount = CALDISCOUNT(books)
    return subtotal - discount
  }

  function CALDISCOUNT (books) {
    var subtotal = CALSUBTOTAL(books)
    var lengthOfBooks = CALPERCENT(books.length)
    return subtotal * (lengthOfBooks / 100)
  }

  function CALSUBTOTAL (books) {
    var subtotal = 0
    for (var s = 0; s < books.length; s++) {
      subtotal = subtotal + books[s].price
    }
    return subtotal
  }

  function CALPERCENT (lengthOfBooks) {
    return (lengthOfBooks - 1) * 10
  }

  function CALALLSUB (arraySubtotal) {
    var allSubtotal = 0
    for (var a = 0; a < arraySubtotal.length; a++) {
      allSubtotal += arraySubtotal[a].subtotal
    }
    return allSubtotal
  }

  function CALLALLDIS (arrayDiscount) {
    var allDiscount = 0
    for (var a = 0; a < arrayDiscount.length; a++) {
      allDiscount += arrayDiscount[a].discount
    }
    return allDiscount
  }

  function CALALLTOTAL (arrayTotal) {
    var allTotal = 0
    for (var a = 0; a < arrayTotal.length; a++) {
      allTotal += arrayTotal[a].total
    }
    return allTotal
  }

  $scope.books = [{
    name: 'แฮรี่พอตเตอร์ กับ ศิลาอาถรรพ์',
    img: 'HarryEP1.jpg',
    price: 100
  }, {
    name: 'แฮรี่พอตเตอร์ กับ ห้องแห่งความลับ',
    img: 'HarryEP2.jpg',
    price: 100
  }, {
    name: 'แฮรี่พอตเตอร์ กับ นักโทษแห่งอาสคาบัน',
    img: 'HarryEP3.jpg',
    price: 100
  }, {
    name: 'แฮรี่พอตเตอร์ กับ ถ้วยอัคนี',
    img: 'HarryEP4.jpg',
    price: 100
  }, {
    name: 'แฮรี่พอตเตอร์ กับ ภาคีนกฟีนิกส์',
    img: 'HarryEP5.jpg',
    price: 100
  }, {
    name: 'แฮรี่พอตเตอร์ กับ เจ้าชายเลือดผสม',
    img: 'HarryEP6.jpg',
    price: 100
  }, {
    name: 'แฮรี่พอตเตอร์ กับ เครื่องรางยมทูต',
    img: 'HarryEP7.jpg',
    price: 100
  }]

  $scope.selectedBooks = [{
    name: 'แฮรี่พอตเตอร์ กับ ศิลาอาถรรพ์',
    img: 'HarryEP1.jpg',
    price: 100,
    amount: 0
  }, {
    name: 'แฮรี่พอตเตอร์ กับ ห้องแห่งความลับ',
    img: 'HarryEP2.jpg',
    price: 100,
    amount: 0
  }, {
    name: 'แฮรี่พอตเตอร์ กับ นักโทษแห่งอาสคาบัน',
    img: 'HarryEP3.jpg',
    price: 100,
    amount: 0
  }, {
    name: 'แฮรี่พอตเตอร์ กับ ถ้วยอัคนี',
    img: 'HarryEP4.jpg',
    price: 100,
    amount: 0
  }, {
    name: 'แฮรี่พอตเตอร์ กับ ภาคีนกฟีนิกส์',
    img: 'HarryEP5.jpg',
    price: 100,
    amount: 0
  }, {
    name: 'แฮรี่พอตเตอร์ กับ เจ้าชายเลือดผสม',
    img: 'HarryEP6.jpg',
    price: 100,
    amount: 0
  }, {
    name: 'แฮรี่พอตเตอร์ กับ เครื่องรางยมทูต',
    img: 'HarryEP7.jpg',
    price: 100,
    amount: 0
  }]
  $scope.detailPrice = []
  $scope.total = 0
  $scope.discount = 0
  $scope.subtotal = 0
  $scope.amoutBooks = 0
})
