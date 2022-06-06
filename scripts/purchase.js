let voucherData=JSON.parse(localStorage.getItem("purchase"));
voucherData.forEach(function(elem){
    var box=document.createElement("div");

    var name1=document.createElement("p");
    name1.innerText=elem.name;
    var image1=document.createElement("img");
    image1.src=elem.image;
    var price1=document.createElement("p");
    price1.innerText=elem.price;
    box.append(image1,name1,price1);
        document.querySelector("#voucher_list").append(box);
    });