console.log("töötab");

var muutuja = "muutuja";
//document.getElementById("html_id").innerHTML=muutuja;

var arr = ["mouse","cat","dog"];

//arr.splice(2);
arr.push("horse");
console.log(arr[1]);
arr[2] ="cow";
arr.push("tiger");
console.log(arr[arr.length-1]);


var animal = "turtle ~21.08.2020~kasutaja~true";
animal.split("~");
console.log(animal);

var holder = document.getElementById("holder");
for(var i=0; i < arr.length; i++)
  holder.innerHTML += "<p>"+ (i+1) +". " +arr[i]+"</p>";
 
  holder.innerHTML += animal.split("~");  //teeb massiiviks,eraldajaks koma
