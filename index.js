const designBtn = document.querySelector(".design");
designBtn.addEventListener("mouseover", ()=>{
    audio.play();
})


const clampBtn = document.querySelector(".clamp");
clampBtn.addEventListener("click", ()=>{
    sound.volume = 0.1;
    sound.play();
})