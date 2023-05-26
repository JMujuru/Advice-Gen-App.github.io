
const adviceId = document.querySelector("#advice-id");
const adviceDescription = document.querySelector("#advice-description");
const diceBtn = document.querySelector("#dice-btn")

//making the dice a psudo button so that when its clicke the advice changes 
diceBtn.addEventListener("click", ()=>{
  advice();
})

// when the broswer loads the advice funtion is run 
window.onload = ()=>{
  advice();
}


function advice(){
  fetch("https://api.adviceslip.com/advice").then(response => {
  return response.json();
}).then(adviceData =>{
  const AdviceObj = adviceData.slip;
 adviceDescription.innerText = AdviceObj.advice;
 adviceId.innerText = AdviceObj.id
}).catch(error =>{
  console.log(error)
})

}


