document.addEventListener("DOMContentLoaded", () => {
  const diceImg = document.getElementById("dice");
  const diceSound = document.getElementById("audioSound");

  const imagePath = "images/";
  const diceFaces = 6;
  const changeInterval = 100;  
  let intervalId;

  diceImg.addEventListener("click", () => {
    clearInterval(intervalId); 
    diceImg.style.border = "";  

    
    diceSound.currentTime = 0;
    diceSound.play().catch((e) => {
      console.warn("Не удалось воспроизвести звук:", e);
    });

    
    const startRolling = () => {
      const totalDelay = diceSound.duration * 1000;  
      const numberOfChanges = Math.floor(totalDelay / changeInterval);  

      let changeCounter = 0;

      
      intervalId = setInterval(() => {
        const tempRandom = Math.floor(Math.random() * diceFaces) + 1;
        diceImg.src = `${imagePath}dice-${tempRandom}.png`;  
        changeCounter++;

        if (changeCounter >= numberOfChanges) {
          clearInterval(intervalId);  
          const finalRoll = Math.floor(Math.random() * diceFaces) + 1;  
          diceImg.src = `${imagePath}dice-${finalRoll}.png`;  
          diceImg.style.border = "3px solid var(--resultDiceBorder)";  
        }
      }, changeInterval);
    };

    
    if (diceSound.readyState >= 1) {
      startRolling();
    } else {
      diceSound.onloadedmetadata = startRolling; 
    }
  });
});
