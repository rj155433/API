function convertCurrency() {
    const euroAmount = parseFloat(document.getElementById('euroAmount').value);
    const exchangeRate = parseFloat(document.getElementById('currencySelect').value);
    if (!isNaN(euroAmount) && euroAmount >= 0) {
        // Umrechnung und Formatierung
        const convertedAmount = (euroAmount * exchangeRate).toFixed(2);
        const formattedEuroAmount = euroAmount.toLocaleString('de-DE');
        const formattedDollarAmount = convertedAmount.toLocaleString('de-DE');
        const currency = document.getElementById('currencySelect').options[document.getElementById('currencySelect').selectedIndex].text;
        
        document.getElementById('result').textContent = `${formattedEuroAmount} Euro = ${formattedDollarAmount} ${currency}`;
    } else {
        document.getElementById('result').textContent = 'Bitte einen gültigen Betrag eingeben.';
    }
}



