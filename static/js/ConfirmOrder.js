$(document).ready(function(){
    console.log("456");
　　let sendPersonMessage = localStorage.getItem("sendPersonMessage");
　　let getPersonMessage = localStorage.getItem("getPersonMessage");
    let receiveTime = localStorage.getItem("receiveTime");
    let remark = localStorage.getItem("remark");
    let fee = localStorage.getItem("fee");
    let disCount = localStorage.getItem("disCount");
    let remainToPay = localStorage.getItem("remainToPay");
    let weight = localStorage.getItem("weight");

    $("#sendPersonMessage").html(sendPersonMessage);
    $("#getPersonMessage").html(getPersonMessage);
    $("#receiveTime").html(receiveTime);
    $("#remark").html(remark);
    $("#fee").html(fee);
    $("#disCount").html(disCount);
    $("#remainToPay").html(remainToPay);
    $("#payNumber").html(remainToPay);
    $("#weight").html("3.0公里/"+weight+"公斤");
});


    // 支付方式
function changePayItem0() {
    console.log(123456)
    let arr = document.getElementsByClassName("pay-btn");
    arr[0].classList.remove("selected");
    arr[1].classList.remove("selected");
    arr[2].classList.remove("selected");
    arr[0].classList.add("selected");
    document.getElementById("QRcode").style.display="inline";
    document.getElementById("wechatPay").style.display="none";
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
    document.getElementById("QRcode").style.display="none";
    document.getElementById("wechatPay").style.display="inline";
}

$("#submitPayment").click(function () {
   setTimeout(
        "document.getElementById(\"successBtn\").style.display=\"inline\";document.getElementById(\"successImg\").style.display=\"inline\"; document.getElementById(\"QRcode\").style.display=\"none\"; document.getElementById(\"wechatPay\").style.display=\"none\""
        ,10000);
});


