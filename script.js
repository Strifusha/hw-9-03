// Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.

input.onchange = function disableFocus(){
    let input = document.getElementById('input'); 
    let arrInput = [];
    arrInput.push(input.value);
    let arr = (""+arrInput).split("");
    console.log(arr);
    const summation= arr.reduce((sum, current) => {
        console.log(`${sum} => +${current}`);
        return +sum + +current;
    });
    console.log(summation);
    input.value = summation;
}
