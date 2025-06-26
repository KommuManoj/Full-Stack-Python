document.title="DOM in JavaScript";
document.body.style.backgroundColor="lightblue";
// document.getElementsByClassName("ds")[0].style.color="red";
// document.getElementsByClassName("ds")[1].style.color="green";
// document.getElementsByClassName("ds")[2].style.color="blue";
// document.getElementsByClassName("ds")[3].style.color="yellow";
// document.getElementsByClassName("ds")[4].style.color="orange";

//style elements by class name:---
// let Manoj=document.getElementsByClassName("ds");
// Manoj[0].style.color="Red";
// Manoj[1].style.color="Green";
// Manoj[2].style.color="Yellow";
// Manoj[3].style.color="Blue";
// Manoj[4].style.color="Orange";
//--------

//style elements using query selecter :----
//the query selecters applies to all the attributes to the class name when first encountered.
document.querySelector(".dsa1").style.color="red";

//styel elements using querySelectorAll()----
let dept=document.querySelectorAll(".dsa");
dept[0].style.color="green";
dept[1].style.color="red";
dept[2].style.color="brown";
dept[3].style.color="violet";
dept[4].style.color="yellow";

//function to toggle background color 
// function changeBackground() {
//     document.body.style.backgroundColor="pink";
//     alert("Background color changed to light coral");
// }


// function changeBackground(){
//     if(document.body.style.backgroundColor==="red"){
//         document.body.style.backgroundColor="blue";
//     }else{
//         document.body.style.backgroundColor="red";
//     }
// }



//change of background from red to blue using ternary operator
function changeBackground(){
    document.body.style.backgroundColor=document.body.style.backgroundColor==="lightblue" ? "red" : "yellow";
    //alert("Background color changed!");
}

function changetext(){
    document.getElementById("clg").innerHTML="CMRCET,CMREC";
    //alert("Text changed successfully!");
    document.getElementById("clg").style.backgroundColor="red";
    document.getElementById("clg").style.color="white";
    document.getElementById("clg").style.fontSize="30px";
    document.getElementById("clg").style.textAlign="center";
    document.getElementById("clg").style.borderRadius="30px";
}