const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

const inputValue = document.getElementById("value-real");
const selectedCurrency = document.getElementById("currency");
const result = document.getElementById("result");
let valueConverted = 0;

function handleSubmit(e) {
  e.preventDefault();

  if (!inputValue.value || inputValue.value < 0) {
    alert("O valor informado está incorreto!");
    console.log();
    return;
    
  } else if (!selectedCurrency.value) {
    alert("Escolha uma Moeda!");
    console.log();
    return;

  }
  converter();
}

function converter() {
  if (selectedCurrency.value === "eur") {
    valueConverted = inputValue.value / 5.29;
    result.innerHTML = valueFormatter("pt-BR", "EUR");
    animateResult();
  } else if (selectedCurrency.value === "dol") {
    valueConverted = inputValue.value / 4.84;
    result.innerHTML = valueFormatter("en-US", "USD");
    animateResult();
  } else if (selectedCurrency.value === "bit") {
    valueConverted = inputValue.value / 178348.52;
    result.innerHTML = valueFormatter("en-US", "BCT");
    animateResult();
  } else if (selectedCurrency.value === "eth") {
    valueConverted = inputValue.value / 9572.34;
    result.innerHTML = valueFormatter("en-US", "ETH");
    animateResult();
  }

  inputValue.value = "";
  selectedCurrency = "";
}

function valueFormatter (locale, currency){
    const value = valueConverted.toLocaleString(`${locale}`,{style: 'currency', currency: `${currency}`,});
    return `<span>🤑</span> ${value} <span>🤑</span>`;
}

function animateResult(){
    return result.animate(
        [{transform: "translatey(-150px)"}, { transform: "translateY(0px)"}], {duration:500 }
    );
}
