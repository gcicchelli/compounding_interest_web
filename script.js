
function calculateInterest() {
    let principal = parseFloat(document.getElementById('principal').value);
    let interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    let timePeriod = parseFloat(document.getElementById('timePeriod').value);
    let compoundingFrequency = parseFloat(document.getElementById('compoundingFrequency').value);

    let amount = principal * Math.pow((1 + interestRate / compoundingFrequency), compoundingFrequency * timePeriod);
    let interestAmt = amount - principal;

    document.getElementById('result').innerText = "Total Interest Accrued is: $" + interestAmt.toFixed(2);
}
