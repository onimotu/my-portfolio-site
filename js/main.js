$(function () {
  $('#show-button').click(function () {
    // printHello()
    // sayHello()
    $('#sp-nav').stop(true, false).slideToggle("slow")
  })
})

function printHello() {
  console.log("Hello")
}

function sayHello(name) {
  if (!name) {
    str = "hello"
  } else {
    str = "hello " + name + "!!!!"
  }
  alert(str)
}