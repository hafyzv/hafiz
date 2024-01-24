function convertCurrency(type) {
    var amount;
    var fromUnit;
    var toUnit;
    var resultId;

    // Determine the appropriate parameters based on the conversion type
    switch (type) {
        case 'currency':
            amount = parseFloat(document.getElementById('currencyAmount').value);
            fromUnit = document.getElementById('fromCurrency').value;
            toUnit = document.getElementById('toCurrency').value;
            resultId = 'currencyResult';
            break;
        case 'length':
            amount = parseFloat(document.getElementById('lengthAmount').value);
            fromUnit = document.getElementById('fromLength').value;
            toUnit = document.getElementById('toLength').value;
            resultId = 'lengthResult';
            break;
        case 'weight':
            amount = parseFloat(document.getElementById('weightAmount').value);
            fromUnit = document.getElementById('fromWeight').value;
            toUnit = document.getElementById('toWeight').value;
            resultId = 'weightResult';
            break;
        case 'temperature':
            amount = parseFloat(document.getElementById('temperatureAmount').value);
            fromUnit = document.getElementById('fromTemperature').value;
            toUnit = document.getElementById('toTemperature').value;
            resultId = 'temperatureResult';
            break;
        default:
            console.error('Invalid conversion type');
            return;
    }

    // Perform conversion
    var result;

    switch (type) {
        case 'currency':
            var currencyRates = {
                'usd': {'eur': 0.85, 'myr': 4.16, 'sgd': 1.35},
                'eur': {'usd': 1.18, 'myr': 4.94, 'sgd': 1.61},
                'myr': {'usd': 0.24, 'eur': 0.20, 'sgd': 0.32},
                'sgd': {'usd': 0.74, 'eur': 0.62, 'myr': 3.11},
            };

            if (fromUnit in currencyRates && toUnit in currencyRates[fromUnit]) {
                var conversionRate = currencyRates[fromUnit][toUnit];
                result = amount * conversionRate;
            } else {
                // Display error if conversion is not supported
                document.getElementById(resultId).innerText = 'Error: Conversion not supported';
                return;
            }
            break;
        case 'length':
            // Sample length conversion rates
            var lengthRates = {
                'meter': {'foot': 3.281},
                'foot': {'meter': 0.305},
            };

            if (fromUnit in lengthRates && toUnit in lengthRates[fromUnit]) {
                var conversionRate = lengthRates[fromUnit][toUnit];
                result = amount * conversionRate;
            } else {
                // Display error if conversion is not supported
                document.getElementById(resultId).innerText = 'Error: Conversion not supported';
                return;
            }
            break;
        case 'weight':
            // Sample weight conversion rates
            var weightRates = {
                'kg': {'lb': 2.20462},
                'lb': {'kg': 0.453592},
            };

            if (fromUnit in weightRates && toUnit in weightRates[fromUnit]) {
                var conversionRate = weightRates[fromUnit][toUnit];
                result = amount * conversionRate;
            } else {
                // Display error if conversion is not supported
                document.getElementById(resultId).innerText = 'Error: Conversion not supported';
                return;
            }
            break;
        case 'temperature':
            // Sample temperature conversion
            if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
                result = (amount * 9/5) + 32;
            } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
                result = (amount - 32) * 5/9;
            } else {
                // Display error if conversion is not supported
                document.getElementById(resultId).innerText = 'Error: Conversion not supported';
                return;
            }
            break;
        default:
            console.error('Invalid conversion type');
            return;
    }

    // Display result
    document.getElementById(resultId).innerText = 'Result: ' + result.toFixed(2) + ' ' + toUnit;
}
