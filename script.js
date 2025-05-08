const diceImg = document.getElementById("dice");
const imagePath = "./images/";
const diceFaces = 6;
const changeInterval = 100;
const totalDelay = 1500;
const numberOfChanges = totalDelay / changeInterval;
let intervalId;
const diceSound = document.getElementById("diceSound");

diceImg.addEventListener("click", () => {
  let changeCounter = 0;
  clearInterval(intervalId);
  diceImg.style.border = "";

    intervalId = setInterval(() => {
    const tempRandomNumber = Math.floor(Math.random() * diceFaces) + 1;
    diceImg.src = ${imagePath}dice-${tempRandomNumber}.png;
    changeCounter++;

   

    if (changeCounter >= numberOfChanges) {
      clearInterval(intervalId);
      const finalRandomNumber = Math.floor(Math.random() * diceFaces) + 1;
      diceImg.src = ${imagePath}dice-${finalRandomNumber}.png;
      diceImg.style.border = "3px solid var(--resultDiceBorder)";
    }
  }, changeInterval);
  
    diceSound.currentTime = 0;
  diceSound.play();
  

});
