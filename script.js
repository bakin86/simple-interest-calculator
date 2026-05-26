function calculateSI(event) {
    event.preventDefault();

    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);

    var interest = (principal * rate * years) / 100;
    var totalAmount = principal + interest;

    var currentYear = new Date().getFullYear();
    var futureYear = currentYear + years;

    document.getElementById("display-principal").textContent = "$" + principal.toFixed(2);
    document.getElementById("display-rate").textContent = rate;
    document.getElementById("display-amount").textContent = "$" + totalAmount.toFixed(2);
    document.getElementById("display-year").textContent = futureYear;

    document.getElementById("result").classList.remove("hidden");
}
