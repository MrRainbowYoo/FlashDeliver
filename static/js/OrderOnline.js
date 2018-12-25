$(document).ready(function(){
    console.log(1324456);
    $("#dropdown-menu").on("click", "a", function(){
        let selected = $(this).text();
        $("#dropdownMenuButton").html(selected);
    });

    $("#wayOfChose").on("click", "a",function () {
        let selected = $(this).text();
        $("#choseWay").html(selected);
        localStorage.setItem("receiveTime", selected);
    });

    $("#locationButton").click(function () {
        console.log(45600);
        $("#locationSend").val("杭州师范大学   仓前校区   勤园8号楼");
    });
});

$("#goConfirmOrder").click(function () {
   let sendPersonMessage = $("#sendPerson").val()+", "+$("#sendPersonTel").val()+", "+$("#locationSend").val()+", "+$("#sendRoomNum").val();
   let getPersonMessage = $("#getPerson").val()+", "+$("#getPersonTel").val()+", "+$("#getAddress").val()+", "+$("#getRoomNum").val();

   localStorage.setItem("sendPersonMessage", sendPersonMessage);
   localStorage.setItem("getPersonMessage", getPersonMessage);
   localStorage.setItem("remark", $("#remark").val());
   localStorage.setItem("password", $("#password").val());
   localStorage.setItem("sendPerson", $("#sendPerson").val());
   localStorage.setItem("getPerson", $("#getPerson").val());

});

$("#goodWeight").change(function () {
   let weight = $("#goodWeight").val();
   $("#gongjin").html( Math.round(weight*100)/100);
   $("#fee").html( Math.round(weight*3*100)/100);
   $("#disCount").html( Math.round(weight*3/10*100)/100);
   $("#remainToPay").html( Math.round(weight*3/10*9*100)/100);

   localStorage.setItem("weight", weight);
   localStorage.setItem("fee", Math.round(weight*3*100)/100);
   localStorage.setItem("disCount", Math.round(weight*3/10*100)/100);
   localStorage.setItem("remainToPay", Math.round(weight*3/10*9*100)/100);
});

