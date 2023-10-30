const form = document.querySelector("#form-register");
const plans = document.querySelectorAll('aside input[type="radio"]');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = "api/users-insert.php";
    const formData = new FormData(form);

    // Adicione a opção selecionada ao FormData com um nome específico.
    plans.forEach((radio) => {
        if (radio.checked) {
            formData.append("selectedPlan", radio.value);
        }
    });
    const options = {
        method: "POST",
        body: formData,
    };

    fetch(url, options).then((response) => {
        response.json().then((user) => {
            console.log(user);

            if (user.type == "error") {
                document.querySelector("#message").textContent = user.message;
            }
            if (user.type == "success") {
                document.querySelector("#message").textContent = user.message;
            }
        });
    });
});
