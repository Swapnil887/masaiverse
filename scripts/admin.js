let data = document.getElementById("adminform");
data.addEventListener("submit",(event)=>{
    event.preventDefault();
    login()
})


async function login(){
    let obj = {
        email:data.adminEmail.value,
        password:data.adminPassword.value,
    }

    console.log(obj)

    let res = await fetch("https://reqres.in/api/login",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(obj)
    })

    let data2 = await res.json()
    if(data2){
        sessionStorage.setItem("token",data2.token)
        alert("Successfully Login")
        window.location.href = "data.html"
    }else{
        alert("Something went Wrong")
    }
}