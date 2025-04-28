function calculateInterest() {
    let principal = parseFloat(document.getElementById('principal').value);
    let interestRate = parseFloat(document.getElementById('interestRate').value);
    let timePeriod = parseFloat(document.getElementById('timePeriod').value);
    let compoundingFrequency = parseFloat(document.getElementById('compoundingFrequency').value);

    // Convert percentage into decimal
    let rateDecimal = interestRate / 100;

    // Compound Interest Formula
    let amount = principal * Math.pow((1 + rateDecimal / compoundingFrequency), compoundingFrequency * timePeriod);
    let interestAmt = amount - principal;

    // Format principal and interest with commas
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    document.getElementById('result').innerText = 
        "Total Interest Paid is: " + formatter.format(interestAmt);
}
