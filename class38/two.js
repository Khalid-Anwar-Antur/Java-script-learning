// creating html element
var h3 =document.createElement("h1")
var text =document.createTextNode("this is heading 5")
h3.appendChild(text)


var mydiv =document.getElementById("my-div")
mydiv.appendChild(h3)


// removing
var h2 =document.getElementsByTagName("h1")[1]
mydiv.removeChild(h2)


// creating html element in specific line
var h0 =document.createElement("h1")
var text0 =document.createTextNode("this is heading 0")
h0.appendChild(text0)
mydiv.insertBefore(h0,h3)