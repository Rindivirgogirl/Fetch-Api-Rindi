const apiUrl = "http://localhost:5000/user-api"
fetch(apiUrl).then(res=>res.json()).then(data =>{
    console.log(data.data)
})