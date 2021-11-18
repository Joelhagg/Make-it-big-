const button = document.getElementById("button");
const textInput = document.getElementById("small");

button.addEventListener("click", function(){

    let big = small.value.toUpperCase();

    document.getElementById("small").value = big;
    
});