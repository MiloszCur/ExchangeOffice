
let givenCurrency = document.querySelectorAll(".js-givenCurrency");
let givenAmount = document.querySelector(".js-givenAmount");
let givenResultAmount = document.querySelector(".resultContainer__givenAmount");
let givenResultCurrency = document.querySelector(".resultContainer__givenCurrency");

let receivedCurrency = document.querySelectorAll(".js-receivedCurrency");
let receivedResultAmount = document.querySelector(".resultContainer__receivedAmount");
let receivedResultCurrency = document.querySelector(".resultContainer__receivedCurrency");

let form = document.querySelector(".data");

let euroSymbol = document.querySelector(".euroSymbol");
let dolarSymbol = document.querySelector(".dolarSymbol");
let funtSymbol = document.querySelector(".funtSymbol");
let plnSymbol = document.querySelector(".plnSymbol");

let currencyGiven = "";
let currencyReceived = "";
let symbolGiven = "";
let symbolReceived = "";
let currencyValue = 0;
let resultGiven = 0;
let resultReceived = 0;

form.addEventListener("input", () => {

    if (givenCurrency[0].checked) {
        currencyGiven = "euro";
        symbolGiven = euroSymbol;
    } else if (givenCurrency[1].checked) {
        currencyGiven = "dolar";
        symbolGiven = dolarSymbol;
    } else if (givenCurrency[2].checked) {
        currencyGiven = "funt";
        symbolGiven = funtSymbol;
    } else if (givenCurrency[3].checked) {
        currencyGiven = "pln";
        symbolGiven = plnSymbol;
    }

    if (givenAmount.value < 0) {
        alert("Ilość Gotówki nie może być ujemna!");
        givenAmount.value = 1;
    }

    if (receivedCurrency[0].checked) {
        currencyReceived = "euro";
        symbolReceived = euroSymbol;
    } else if (receivedCurrency[1].checked) {
        currencyReceived = "dolar";
        symbolReceived = dolarSymbol;
    } else if (receivedCurrency[2].checked) {
        currencyReceived = "funt";
        symbolReceived = funtSymbol;
    } else if (receivedCurrency[3].checked) {
        currencyReceived = "pln";
        symbolReceived = plnSymbol;
    }

    switch (currencyGiven) {
        case "euro":
            switch (currencyReceived) {
                case "euro":
                    currencyValue = 1;
                    break;
                case "dolar":
                    currencyValue = 1.06;
                    break;
                case "funt":
                    currencyValue = 0.88;
                    break;
                case "pln":
                    currencyValue = 4.68;
                    break;
            };
            break;

        case "dolar":
            switch (currencyReceived) {
                case "euro":
                    currencyValue = 0.94;
                    break;
                case "dolar":
                    currencyValue = 1;
                    break;
                case "funt":
                    currencyValue = 0.83;
                    break;
                case "pln":
                    currencyValue = 4.42;
                    break;
            };
            break;

        case "funt":
            switch (currencyReceived) {
                case "euro":
                    currencyValue = 1.13;
                    break;
                case "dolar":
                    currencyValue = 1.20;
                    break;
                case "funt":
                    currencyValue = 1;
                    break;
                case "pln":
                    currencyValue = 5.30;
                    break;
            };
            break;
        case "pln":
            console.log("bolo");
            switch (currencyReceived) {
                case "euro":
                    currencyValue = 0.21;
                    break;
                case "dolar":
                    currencyValue = 0.23;
                    break;
                case "funt":
                    currencyValue = 0.19;
                    break;
                case "pln":
                    currencyValue = 1;
                    break;
            };
            break;
    }

    resultGiven = givenAmount.value;
    givenResultAmount.innerText = resultGiven;

    givenResultCurrency.innerText = symbolGiven.textContent;
    receivedResultAmount.innerText = resultReceived;

    resultReceived = (currencyValue * givenAmount.value).toFixed(2);
    receivedResultAmount.innerText = resultReceived;

    receivedResultCurrency.innerText = symbolReceived.textContent;
    receivedResultAmount.innerText = resultReceived;
});