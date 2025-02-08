var photos =["img/p1.jpg","img/p2.jpg","img/p3.jpg","img/p4.jpg"]
var image =document.querySelector("img")
var count =0
function next(){
    count++
    if(count>=photos.length){
        count=0
        image.src=photos[count]
    }
   else{
    image.src= photos[count]
   }

}

function prev(){

    count--
    if(count<=0){
        count=photos.length - 1
        image.src=photos[count]
    }
   else{
    image.src= photos[count]
   }

}