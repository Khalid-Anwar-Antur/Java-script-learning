var array_name = new Array();
array_name[0]="khalid";
array_name[1]="anwar ";
array_name[2]=" Antur";
array_name[3]=" poran";
array_name[4]=" hi";
array_name.push("afjal");
array_name.pop();
document.write(array_name)
document.write(array_name[2]+ "<br>")
// we can use also this way 
// var name = ["k", "h", "a", "l", "i", "d"];



// array concatination

var names = ["k", "h", "a", "l", "i", "d"];
var name2 = ["a", "n", "w", "a", "r"];
var fullname = names.concat(name2)
document.write(fullname )