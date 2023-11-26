const formAvaliar = document.querySelector(".avaliar");


formAvaliar.addEventListener("submit",(event)=>{
    event.preventDefault();

    const url = "api/insert-reviews.php";
    const options = {
        method: "POST",
        body: new FormData(formAvaliar)
    };

    fetch(url,options).then((response)=>{
        response.json().then((comment)=>{
            if(comment.type === "success"){
                document.querySelector(".message").innerHTML = comment.message
            }
            if(comment.type === "error"){
                document.querySelector(".message").innerHTML = comment.message
            }
        });
    })



});


