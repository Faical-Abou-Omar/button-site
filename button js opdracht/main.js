const mybutton = document.querySelector(".button");

if(mybutton) {
  mybutton.addEventListener("click", showAlert)
}

function showAlert(){
  console.log("Je hebt op de button geklikt")
  alert("Je hebt op de button geklikt")
} 
