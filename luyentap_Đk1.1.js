function check() {
    let inputNumber1 = document.getElementById("number1");
    let inputNumber2 = document.getElementById("number2");
    let a = parseInt(inputNumber1.value);
    let b = parseInt(inputNumber2.value);
    if (a/b){
        alert("Kết quả đúng rồi")
    }else{
        alert("Kiểm tra lại thử xem sao")
    }
}