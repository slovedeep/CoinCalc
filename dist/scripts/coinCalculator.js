var coinSelected;
var coinWeight;
var totalCoins;
var totalValue;

function Calculate() {
    getHtmlValues();
    console.log('The coinWeight is ' + coinWeight);
    document.getElementById('total').innerHTML = '';
    total = 0;

    weight = getCoinWeight(coinSelected);
    if (checkWeight(weight)) {
        total = CalculateTotalValue(weight);
    }

    if (total != 0) {
        document.getElementById('total').innerHTML = 'Total Coins ' + getDecimalNum(totalCoins) + ' coins, coin selected ' + coinSelected + '€ is ' + getDecimalNum(total) + ' €';
    }
}

function CalculateGrams() {
    console.log('dentro CalculateGrams');
    getHtmlValues();
    document.getElementById('total').innerHTML = '';
    total = 0;

    weight = getCoinWeight(coinSelected);
    if (checkWeight(weight)) {
        total = CalculateTotalGrams(weight);
    }

    if (total != 0) {
        document.getElementById('total').innerHTML = 'Total Grams ' + total + 'grams'; 
    }
}

function getHtmlValues() {
    coinSelected = parseInt(document.getElementById('selectCoin').value) || 0;

    let coinWeightElementId = document.getElementById('coinWeight');
    if (coinWeightElementId) {
        coinW = coinWeightElementId.value;
        if (coinW.includes(',')) {
            coinW = coinW.replace(',', '.');
        }
        coinWeight = parseFloat(coinW) || 0;

    }

    let valueIntroducedElementId = document.getElementById('totalValue')
    if (valueIntroducedElementId){
        valueIntroduced = valueIntroducedElementId.value;
        if (valueIntroduced.includes(',')) {
            valueIntroduced = valueIntroduced.replace(',', '.');
        }
        totalValue = parseFloat(valueIntroduced) || 0;
    }
}

function getCoinWeight(coin) {

    switch (coin) {
        case 1:
            return 2.3;
            break;
        case 2:
            return 3;

            break;
        case 5:
            return 3.9;

            break;
        case 10:
            return 4.1;

            break;
        case 20:
            return 5.7;

            break;
        case 50:
            return 7.8;

            break;
        case 100:
            return 7.5;

            break;
        case 200:
            return 8.5;
            break;
        default:
            break;
    }
}

function checkWeight(weight) {
    if (coinWeight < weight) {
        alert('You have to introduce the correct weight \n ਤੁਸੀਂ ਸਹੀ ਵਜਨ ਲਿਖੋ।');
        return false;
    }
    return true;
}

function CalculateTotalValue(weight) {
    coinSelected = coinSelected / 100;
    totalCoins = coinWeight / weight;
    return (totalCoins * coinSelected);
}

function CalculateTotalGrams(weight) {
    coinSelected = coinSelected / 100;
    totalWeight = weight * totalValue;
    totalCoins = totalWeight / weight;
    return (totalWeight); 
}
function getDecimalNum(num) {
    num = num.toFixed(3).toString().replace(/(\.\d*?[1-9])0+$/g, "$1");
    if (num % 2 == 0) {
        num = Math.floor(num);
    }
    return (num)
}

function UpdatePlaceHolders(selectedCoin) {
    getHtmlValues;
    console.log('Selected coin', selectedCoin);
    const input2 = document.getElementById("coinWeight");
    input2.placeholder = getCoinWeight(selectedCoin);
}

function updatePlaceholder() {
    var selectElement = document.getElementById("selectCoin");
    var selectedOption = selectElement.options[selectElement.selectedIndex].value;
    UpdatePlaceHolders(parseInt(selectedOption));
}


