
const formLogin = document.querySelector('#form-login');

formLogin.addEventListener("submit",(event)=>{
    event.preventDefault();

    const url = 'api/users-login.php';
    const options = {
        method: 'POST',
        body: new FormData(formLogin)
    };

    fetch(url, options).then((response) => {
        response.json().then((user) => {
            console.log(user);
            if(user.type == "error") {
                document.querySelector("#message").innerHTML = user.message;
            }
            else{
                document.querySelector("#message").innerHTML = user.message;
            }
        });
    });
});