document.querySelector("form").addEventListener("submit",myfun);
let data=JSON.parse(localStorage.getItem("user"))||[];

function myfun(){
    event.preventDefault();
    var obj={
        name:    document.querySelector("#name").value,
        email:   document.querySelector("#email").value,
        address: document.querySelector("#address").value,
        wallet:  document.querySelector("#amount").value,
    };
    data.push(obj);
    console.log(data);
    localStorage.setItem("user",JSON.stringify(data));
    window.location.reload();
}