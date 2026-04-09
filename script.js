const button = document.querySelector(".sort-button");

button.addEventListener("click", function () {
    const min = Number(document.querySelector(".input-min").value);
    const max = Number(document.querySelector(".input-max").value);

    // validação básica
    if (min >= max || isNaN(min) || isNaN(max)) {
        alert("Digite valores válidos! O número mínimo deve ser menor que o máximo.");
        return;
    }

    // sorteio
    const resultado = Math.floor(Math.random() * (max - min + 1)) + min;

    alert("Número sorteado: " + resultado);
});
