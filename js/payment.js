let discount = document.querySelector(".discount-field")

document.querySelector('.apply-btn').addEventListener('click', function() {
    if (discount.value == null){
        console.log("Give input first")
    }else{
        alert("Discount code applied!");
    }
});
