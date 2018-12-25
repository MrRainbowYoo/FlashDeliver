$(document).ready(function(){

    let orderMessageArray = [];
    let orderMessage = {orderNum: 201812231654080001, sendPerson: '徐伟踊', getPerson:"范耿诚", deliverFee: 5.0, deliverPerson: "待接单", password:'123456', status:'待取件'};
    orderMessageArray.push(orderMessage);
    orderMessage = {orderNum: 201812241544080001, sendPerson: '陈亮锜', getPerson:"范耿诚", deliverFee: 4.0, deliverPerson: "待接单", password:'123456', status:'待取件'};
    orderMessageArray.push(orderMessage);
    orderMessage = {orderNum: 201812241654080002, sendPerson: '郑天佑', getPerson:"徐伟踊", deliverFee: 6.5, deliverPerson: "待接单", password:'123456', status:'待取件'};
    orderMessageArray.push(orderMessage);
    orderMessage = {orderNum: 201812251654080004, sendPerson: '徐伟踊', getPerson:"陈亮锜", deliverFee: 5.4, deliverPerson: "待接单", password:'123456', status:'待取件'};
    orderMessageArray.push(orderMessage);
    orderMessage = {orderNum: 201812251154080012, sendPerson: '徐伟踊', getPerson:"郑天佑", deliverFee: 3.5, deliverPerson: "待接单", password:'123456', status:'待取件'};
    orderMessageArray.push(orderMessage);


        let length = orderMessageArray.length;


        for(let i=0; i<length; i++){
        console.log(orderMessageArray);
        let tr = $("<tr style='width: 100%'></tr>");
        tr.append($('<td><li style="border: none; text-align: center;font-size: 18px">'+orderMessageArray[i].orderNum+'</td>'));
        tr.append($('<td><li style="border: none;text-align: center;font-size: 18px">'+orderMessageArray[i].sendPerson+'</td>'));
        tr.append($('<td><li style="border: none;text-align: center;font-size: 18px">'+orderMessageArray[i].getPerson+'</td>'));
        tr.append($('<td><li style="border: none; text-align: center;font-size: 18px">'+orderMessageArray[i].deliverFee+'</td>'));
        tr.append($('<td><li style="border: none; text-align: center;font-size: 18px">'+orderMessageArray[i].deliverPerson+'</td>'));
        tr.append($('<td><li style="border: none; text-align: center;font-size: 18px">'+orderMessageArray[i].password+'</td>'));
        tr.append($('<td><li style="border: none; text-align: center;font-size: 18px">'+orderMessageArray[i].status+'</td>'));

        $("#table-body1").append(tr);
        }

        let tr = $("<tr style='width: 100%'></tr>");
        tr.append($('<td><li style="border: none; text-align: center;font-size: 18px">'+'201812261010145600'+'</td>'));
        tr.append($('<td><li style="border: none;text-align: center;font-size: 18px">'+localStorage.getItem("sendPerson")+'</td>'));
        tr.append($('<td><li style="border: none;text-align: center;font-size: 18px">'+localStorage.getItem("getPerson")+'</td>'));
        tr.append($('<td><li style="border: none; text-align: center;font-size: 18px">'+localStorage.getItem("fee")+'</td>'));
        tr.append($('<td><li style="border: none; text-align: center;font-size: 18px">'+'待接单'+'</td>'));
        tr.append($('<td><li style="border: none; text-align: center;font-size: 18px">'+localStorage.getItem("password")+'</td>'));
        tr.append($('<td><li style="border: none; text-align: center;font-size: 18px">'+'待取件'+'</td>'));

        $("#table-body1").append(tr);





        let orderMessageArray1 = [];
        let orderMessage1 = {orderNum: 201812231654080001, sendPerson: '徐伟踊', getPerson:"范耿诚", deliverFee: 5.0, deliverPerson: "王小二", password:'123456', status:'待送件'};
        orderMessageArray1.push(orderMessage1);
        orderMessage1 = {orderNum: 201812241544080001, sendPerson: '陈亮锜', getPerson:"范耿诚", deliverFee: 4.0, deliverPerson: "王小二", password:'123456', status:'待送件'};
        orderMessageArray1.push(orderMessage1);
        orderMessage1 = {orderNum: 201812241654080002, sendPerson: '郑天佑', getPerson:"徐伟踊", deliverFee: 6.5, deliverPerson: "王小二", password:'123456', status:'待送件'};
        orderMessageArray1.push(orderMessage1);


        let length1 = orderMessageArray1.length;


        for(let i=0; i<length1; i++){
        console.log(orderMessageArray1);
        let tr1 = $("<tr style='width: 100%'></tr>");
        tr1.append($('<td><li style="border: none; text-align: center;font-size: 18px">'+orderMessageArray1[i].orderNum+'</td>'));
        tr1.append($('<td><li style="border: none;text-align: center;font-size: 18px">'+orderMessageArray1[i].sendPerson+'</td>'));
        tr1.append($('<td><li style="border: none;text-align: center;font-size: 18px">'+orderMessageArray1[i].getPerson+'</td>'));
        tr1.append($('<td><li style="border: none; text-align: center;font-size: 18px">'+orderMessageArray1[i].deliverFee+'</td>'));
        tr1.append($('<td><li style="border: none; text-align: center;font-size: 18px">'+orderMessageArray1[i].deliverPerson+'</td>'));
        tr1.append($('<td><li style="border: none; text-align: center;font-size: 18px">'+orderMessageArray1[i].password+'</td>'));
        tr1.append($('<td><li style="border: none; text-align: center;font-size: 18px">'+orderMessageArray1[i].status+'</td>'));

        $("#table-body2").append(tr1);
        }


        let orderMessageArray2 = [];
        let orderMessage2 = {orderNum: 201812231654080001, sendPerson: '徐伟踊', getPerson:"王大奔", deliverFee: 5.0, deliverPerson: "无", password:'无', status:'待抢单'};
        orderMessageArray2.push(orderMessage2);



        let length2 = orderMessageArray2.length;


        for(let i=0; i<length2; i++){
        console.log(orderMessageArray2);
        let tr2 = $("<tr style='width: 100%'></tr>");
        tr2.append($('<td><li style="border: none; text-align: center;font-size: 18px">'+orderMessageArray2[i].orderNum+'</td>'));
        tr2.append($('<td><li style="border: none;text-align: center;font-size: 18px">'+orderMessageArray2[i].sendPerson+'</td>'));
        tr2.append($('<td><li style="border: none;text-align: center;font-size: 18px">'+orderMessageArray2[i].getPerson+'</td>'));
        tr2.append($('<td><li style="border: none; text-align: center;font-size: 18px">'+orderMessageArray2[i].deliverFee+'</td>'));
        tr2.append($('<td><li style="border: none; text-align: center;font-size: 18px">'+orderMessageArray2[i].deliverPerson+'</td>'));
        tr2.append($('<td><li style="border: none; text-align: center;font-size: 18px">'+orderMessageArray2[i].password+'</td>'));
        tr2.append($('<td><li style="border: none; text-align: center;font-size: 18px">'+orderMessageArray2[i].status+'</td>'));

        $("#table-body3").append(tr2);
        }

        let orderMessageArray3 = [];
        let orderMessage3 = {orderNum: 201812231654080001, sendPerson: '徐伟踊', getPerson:"李二三", deliverFee: 5.0, deliverPerson: "王小二", password:'123456', status:'已完成'};
        orderMessageArray3.push(orderMessage3);



        let length3 = orderMessageArray3.length;


        for(let i=0; i<length3; i++){
        console.log(orderMessageArray3);
        let tr3 = $("<tr style='width: 100%'></tr>");
        tr3.append($('<td><li style="border: none; text-align: center;font-size: 18px">'+orderMessageArray3[i].orderNum+'</td>'));
        tr3.append($('<td><li style="border: none;text-align: center;font-size: 18px">'+orderMessageArray3[i].sendPerson+'</td>'));
        tr3.append($('<td><li style="border: none;text-align: center;font-size: 18px">'+orderMessageArray3[i].getPerson+'</td>'));
        tr3.append($('<td><li style="border: none; text-align: center;font-size: 18px">'+orderMessageArray3[i].deliverFee+'</td>'));
        tr3.append($('<td><li style="border: none; text-align: center;font-size: 18px">'+orderMessageArray3[i].deliverPerson+'</td>'));
        tr3.append($('<td><li style="border: none; text-align: center;font-size: 18px">'+orderMessageArray3[i].password+'</td>'));
        tr3.append($('<td><li style="border: none; text-align: center;font-size: 18px">'+orderMessageArray3[i].status+'</td>'));

        $("#table-body4").append(tr3);
        }

    $("#test2").click(function () {
        document.getElementById("order-info1").style.display = "none";
        document.getElementById("order-info2").style.display = "inherit";
        document.getElementById("order-info3").style.display = "none";
        document.getElementById("order-info4").style.display = "none";
        $("#label1").removeClass("active");
        $("#label2").addClass("active");
        $("#label3").removeClass("active");
        $("#label4").removeClass("active");
    });

    $("#test1").click(function () {
        document.getElementById("order-info1").style.display = "inherit";
        document.getElementById("order-info2").style.display = "none";
        document.getElementById("order-info3").style.display = "none";
        document.getElementById("order-info4").style.display = "none";
        $("#label1").addClass("active");
        $("#label2").removeClass("active");
        $("#label3").removeClass("active");
        $("#label4").removeClass("active");
    });

    $("#test3").click(function () {
        document.getElementById("order-info1").style.display = "none";
        document.getElementById("order-info2").style.display = "none";
        document.getElementById("order-info3").style.display = "inherit";
        document.getElementById("order-info4").style.display = "none";
        $("#label1").removeClass("active");
        $("#label2").removeClass("active");
        $("#label3").addClass("active");
        $("#label4").removeClass("active");
    });

     $("#test4").click(function () {
        document.getElementById("order-info1").style.display = "none";
        document.getElementById("order-info2").style.display = "none";
        document.getElementById("order-info3").style.display = "none";
        document.getElementById("order-info4").style.display = "inherit";
        $("#label1").removeClass("active");
        $("#label2").removeClass("active");
        $("#label3").removeClass("active");
        $("#label4").addClass("active");

    });
});







