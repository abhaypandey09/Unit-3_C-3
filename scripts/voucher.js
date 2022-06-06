var data=JSON.parse(localStorage.getItem("user"));


var total=data.reduce(function(sum,elem){
    return sum+Number(elem.wallet);
},0);

document.querySelector("#wallet_balance").innerText=total;


const url="https://masai-vouchers-api.herokuapp.com/api/vouchers";

let voucherData=JSON.parse(localStorage.getItem("purchase"))||[];

async function getData(){
    try {
        let res = await fetch(url);
        let coupon = await res.json();
         append1(coupon[0].vouchers);
        console.log(coupon);
    }catch(err){
        console.log(err);
    }
};
getData();

function append1(data1){
    data1.forEach(function(elem){
        var box=document.createElement("div");

        var name1=document.createElement("p");
        name1.innerText=elem.name;
        var image1=document.createElement("img");
        image1.src=elem.image;
        var price1=document.createElement("p");
        price1.innerText=elem.price;
        // price1=Number(price1);
        var btn=document.createElement("button");
        btn.innerText="Buy";
        btn.addEventListener("click",function(){
            buy(elem);
        })
        box.append(image1,name1,price1,btn);
        document.querySelector("#voucher_list").append(box);
    });

    function buy(elem){
       
            voucherData.push(elem);
           localStorage.setItem("purchase",JSON.stringify(voucherData));
           alert("Hurray! purchase successful")
           //window.location.reload();
       
    }
}



// var expense=voucherData.reduce(function(sum,elem){
//     return sum+Number(elem.price);
// },0);
