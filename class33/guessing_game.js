var won =0
var lost =0
for(var i =1 ; i<=5; i++){
    var x = parseInt(prompt("enter your number"))
var randomNum =Math.floor( Math.random()*5) + 1
if (x==randomNum){
    document.write("YES...! you won it <br>")
    won++
}
else{
    document.write("You lost the number was "+ randomNum+ "<br>")
    lost++
}
}
document.write("you win :"+ won +"<br> "+ "you lost :" + lost)