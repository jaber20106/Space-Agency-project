let display = document.querySelector(".number");
let plusButton = document.querySelector(".fa-plus");
let minusButton = document.querySelector(".fa-minus");
let count = 1;
plusButton.addEventListener('click', ()=>{
    count = count + 1;
    display.textContent = count;
});
minusButton.addEventListener('click', ()=>{
    count = count - 1;
    if (count >= 1){
        display.textContent = count;
    }
    else{
        count = 1;
    }
});