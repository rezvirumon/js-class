

function calculateMoney(ticketSell) {
    const ticketPrice = 120 * ticketSell;
    const expenses = (500) + (50 * 8);
    const remaining = ticketPrice - expenses;

    if (ticketSell < 0) {

        return "Invalid Number"
    }
    else {

        return remaining;
    }
}


function checkName(name) {
    if (typeof name !== 'string') {
        return "invalid"
    }
    const lastChar = name[name.length - 1].toLowerCase();
    let arr = "ayieouw"
    if (arr.includes(lastChar)) {
        return "Good Name";
    }
    else {
        return "Bad Name";
    }

}



function deleteInvalids(array) {
    let numArray = [];
    if (!Array.isArray(array)) {
        return 'Invalid Array';
    }
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == 'number' && !isNaN(array[i])) {
            numArray.push(array[i])
        }

    }
    return numArray;
}



function password(obj) {
    if (obj.birthYear.toString().length !== 4) {
        return "invalid"
    }
    else if (!obj.name || !obj.birthYear || !obj.siteName) {
        return "invalid"
    }
    const pass = `${obj.siteName.charAt(0).toUpperCase()}${obj.siteName.slice(1)}#${obj.name}@${obj.birthYear}`;
    return pass;

}



function monthlySavings(arr, livingCost) {
    let allPayments = 0;
    let isExceed3000 = false;
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return "invalid input"
    }
    for (let i = 0; i < arr.length; i++) {
        allPayments = allPayments + arr[i];

        if (3000 <= arr[i]) {
            isExceed3000 = true;
        }
    }
    if (isExceed3000) {
        let taxAmount = (allPayments - 3000) * 0.20;
        allPayments -= taxAmount
    }
    const totalIncome = allPayments;
    if (totalIncome === allPayments) {
        const savings = totalIncome - livingCost;
        if (savings < 0) {
            return "earn more"
        }
        return savings;
    } return allPayments;
}

