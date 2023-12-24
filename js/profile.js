// Conta do Usuário

const urlUser = "app/test-session.php";

fetch(urlUser).then((response) => {
  response.json().then((userData) => {
    let user = userData.user;
      const urlLogout = "app/logout.php";

    document.querySelector(".user-details").innerHTML = `
            <p><strong>Nome: ${user.name}</strong></p>
            <p><strong>Email: ${user.email}</strong></p>
    `

      const btnLogout = document.querySelector("#logout")
      btnLogout.addEventListener('click', () => {
        fetch('app/logout.php');
        window.location.href = 'login.php';
      });
    });

    const formUpload = document.querySelector(".formUpload");
    formUpload.addEventListener('submit', (e) => {

      e.preventDefault();

      const url = "api/upload.php";
      const options = {
        method: "POST",
        body: new FormData(formUpload)
      }
      fetch(url, options).then((response) => {
        response.json().then((data) => {
          if (data.type === "success") {
            let imgElement = document.querySelector("#imgUser");

            imgElement.src = `imageUsers/${data.photo}`;
            
          }
        
        })
      })


      
    });
    
  })


function back(){
    window.location.href = "homepage.php"
}