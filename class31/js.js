// how to creat a object

var student1 ={
    name : "khalid",
    age : 24,
    gpa : 3.25,
    lang : ["bangle","english","hindi"]
}
var student3 ={
    name : "anwar",
    age : 24,
    gpa : 3.25,
    lang : ["bangle","english","hindi"]
}
var student2 ={
    name : "antur",
    age : 24,
    gpa : 3.25,
    lang : ["bangle","english","hindi"]
}
document.write(student1.age + "<br>")

// how to use constructor for simple use of object
function Student(name,age,cgpa,lang){
    this.name=name
    this.age=age
    this.cgpa=cgpa
    this.lang=lang
}
var s1 = new Student("Khalid",22,3.25, ["bangle","english","hindi"])
var s2 = new Student("anwar",22,3.25, ["bangle","english","hindi"])
var s3 = new Student("antur",22,3.25, ["bangle","english","hindi"])
document.write(s1.cgpa +"<br>")
document.write(s2.lang +"<br>")
document.write(s3.name +"<br>")

// adding function inside a constructor
function Student(name,age,cgpa,lang){
    this.name=name
    this.age=age
    this.cgpa=cgpa
    this.lang=lang
    this.display = function(){
        document.write(this.name +"<br>")
        document.write(this.age +"<br>")
        document.write(this.cgpa +"<br>")
        document.write(this.lang +"<br>")
    }
}
s3.display()
s2.display()
s1.display()