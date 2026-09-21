function getResult(marks, passMark = 40) {
    if (marks >= 80) {
        return "A";
    } else if (marks >= 60 && marks < 80) {
        return "B";
    } else if (marks >= passMark && marks < 60) {
        return "C";
    } else {
        return "CONGRATULATIONS U SCORED F";
    }
}
console.log(getResult(75));




function calculateTotal(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}
function getStatus(total, target = 100) {
    if (total >= target) {
        return "Target Reached, give party";
    } else {
        return "Target Not Reached";
    }
}
let total = calculateTotal([20, 35, 50]);
let status = getStatus(total);

console.log(total);
console.log(status);  