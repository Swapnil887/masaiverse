let token = sessionStorage.getItem("token");

function verify(){
 if (token) {
    if(event.target.innerHTML.includes("Data Page")){
        window.location.href = "./data.html"
    }

    if(event.target.innerHTML.includes("Reports Page")){
        window.location.href = "./reports.html"
    }
 } else {
    alert(" Not Registered")
 }   
}