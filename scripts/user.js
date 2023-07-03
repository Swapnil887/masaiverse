let userForm = document.getElementById("userFORM");
userForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    userregistration()
})


async function userregistration(){
    let obj = {
        name:userForm.userName.value,
        age:userForm.userAge.value,
        place:userForm.userPlace.value,
        batch_name:userForm.selectBatch.value,
        profession:userForm.selectProfession.value
    }

    // console.log(obj)

    let res = await fetch("https://json-server-mfga.onrender.com/users",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(obj)
    })

    let data = await res.json()
    if(data){
        alert("Successfully Registered")
    }else{
        alert("Something went Wrong")
    }
}