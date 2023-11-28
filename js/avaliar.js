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


const getReviews = "api/table-reviews.php";

            fetch(getReviews)
                .then((response) => {
                    response.json().then((reviewData) => {
                        reviewData.forEach((event) => {
                             document.querySelector(".container").innerHTML += `
                        <div class="review-box">
                        <h1>Usuário: ${event.name}</h1>
                        <h1>Nota: ${event.grade}</h1>
                        <hr>
                        <h1>Feedback</h1>
                        <p>${event.coment}</p>
                            
                        </div>      
                             `;
                                    });
                                });
                            });

