
let givenAmount = document.querySelector(".js-givenAmount");
let receivedResultAmount = document.querySelector(".resultContainer__receivedAmount");
let form = document.querySelector(".data");

let euroSymbol = document.querySelector(".euroSymbol");
let dolarSymbol = document.querySelector(".dolarSymbol");
let funtSymbol = document.querySelector(".funtSymbol");
let plnSymbol = document.querySelector(".plnSymbol");


let currencyValue = 0;
let resultGiven = 0;
let currencyGiven = "";
let symbolGiven = "";
let currencyReceived = "";
let symbolReceived = "";

function selectedCurrency() {

    var givenCurrency = document.querySelectorAll(".js-givenCurrency");

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
};

function checkingGivenAmount() {
    if (givenAmount.value < 0) {
        alert("Given amount of money cant be negative");
        givenAmount.value = 1;
    }
};

function wantedCurrency() {

    var receivedCurrency = document.querySelectorAll(".js-receivedCurrency");

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
};

function givenNumber() {

    var resultGiven = 0;
    var givenResultAmount = document.querySelector(".resultContainer__givenAmount");

    resultGiven = givenAmount.value;
    givenResultAmount.innerText = resultGiven;
};

function receivedNumber() {

    var resultReceived = 0;

    resultReceived = (currencyValue * givenAmount.value).toFixed(2);
    receivedResultAmount.innerText = resultReceived;
};

function givenCurrencySign() {

    var givenResultCurrency = document.querySelector(".resultContainer__givenCurrency");

    givenResultCurrency.innerText = symbolGiven.textContent;
};

function receivedCurrencySign() {

    var receivedResultCurrency = document.querySelector(".resultContainer__receivedCurrency");

    receivedResultCurrency.innerText = symbolReceived.textContent;
    receivedResultAmount.innerText = resultReceived;
};

form.addEventListener("input", () => {

    selectedCurrency();
    checkingGivenAmount();
    wantedCurrency();

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

    givenNumber();
    givenCurrencySign();
    receivedNumber();
    receivedCurrencySign();
});