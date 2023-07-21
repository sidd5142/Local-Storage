var form = document.getElementById("myform")

form.addEventListener('submit', function(e)
{
    e.preventDefault()

    var user = document.getElementById("username").value

    var pass = document.getElementById("password").value

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response){
        return response.json()
    })
    .then((response) => 
        console.log(response))

 function Data(response)
   {
    response.array.forEach( response=> {

})
   }
});












fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response){
        return response.json()
    })
    .then((response) => 
        console.log(response))

 function Data(response)
   {
    response.array.forEach( response=> {

       const div = document.createElement('div');
        const email = document.createElement('h3');
        const name = document.createElement('h3');
        const username = document.createElement('h3');

        div.classList = 'card'
        name.classList = 'name'
        username.classList = 'username'
        email.classList = 'email'

        name.innerHTML = `Name : $(response.name)`
        username.innerHTML = `Username : $(response.username)`
        email.innerHTML = `Email : $(response.email)`

        div.appendChild(name)
        div.appendChild(username)
        div.appendChild(email)
        cardsConatiners.appendChild(div)

    });
};
        
    function search()
    {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    
    
        const users = response.email;
        const pass =  response.username;

        const Uexists = data.find(item => item.username === users);
        const Pexists = data.find(item => item.password === pass);


        let uemail = JSON.parse(response.email);
        let upass = JSON.parse(response.username)

        if(Uexists && Pexists){
            console.log("Username Exists");
            alert('Successfull');

        }
        else{
            console.log("Username dose not exists");
            alert("Not found");
        }
        }


    
    
    
</script>

</html>