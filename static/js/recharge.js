// 充值金额
let count = "";

function changeItem0() {
    let arr = document.getElementsByClassName("recharge-btn");
    arr[0].classList.remove("selected");
    arr[1].classList.remove("selected");
    arr[2].classList.remove("selected");
    arr[3].classList.remove("selected");
    arr[0].classList.add("selected");
    document.getElementById("payNumber").innerHTML = "50元";
    count = "50";
}

function changeItem1() {
    let arr = document.getElementsByClassName("recharge-btn");
    arr[0].classList.remove("selected");
    arr[1].classList.remove("selected");
    arr[2].classList.remove("selected");
    arr[3].classList.remove("selected");
    arr[1].classList.add("selected");
    document.getElementById("payNumber").innerHTML = "100元";
    count = "100";
}

function changeItem2() {
    let arr = document.getElementsByClassName("recharge-btn");
    arr[0].classList.remove("selected");
    arr[1].classList.remove("selected");
    arr[2].classList.remove("selected");
    arr[3].classList.remove("selected");
    arr[2].classList.add("selected");
    document.getElementById("payNumber").innerHTML = "200元";
    count = "200";
}

function changeItem3() {
    let arr = document.getElementsByClassName("recharge-btn");
    arr[0].classList.remove("selected");
    arr[1].classList.remove("selected");
    arr[2].classList.remove("selected");
    arr[3].classList.remove("selected");
    arr[3].classList.add("selected");
    document.getElementById("payNumber").innerHTML = "500元";
    count = "500";
}

// 支付方式
function changePayItem0() {
    let arr = document.getElementsByClassName("pay-btn");
    arr[0].classList.remove("selected");
    arr[1].classList.remove("selected");
    arr[2].classList.remove("selected");
    arr[0].classList.add("selected");
}

function changePayItem1() {
    let arr = document.getElementsByClassName("pay-btn");
    arr[0].classList.remove("selected");
    arr[1].classList.remove("selected");
    arr[2].classList.remove("selected");
    arr[1].classList.add("selected");
}

function changePayItem2() {
    let arr = document.getElementsByClassName("pay-btn");
    arr[0].classList.remove("selected");
    arr[1].classList.remove("selected");
    arr[2].classList.remove("selected");
    arr[2].classList.add("selected");
}

// 充值按钮
function charge(){
    if(document.getElementById("QRcode").style.display=='none')
        document.getElementById("QRcode").style.display = '';

    var t = setTimeout(
        "alert('充值成功');document.getElementById(\"QRcode\").style.display = 'none';document.getElementsByClassName(\"balance\")[0].innerHTML = count;"
        ,10000);
}