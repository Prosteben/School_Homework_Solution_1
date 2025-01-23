// Tento kód převádí číslo z dvojkové číselné soustavy (základ 2) do desítkové soustavy (základ 10).
// Obsahuje funkci `convertBinaryToDecimal`, která jako vstup bere binární číslo ve formě řetězce
// a vrací ekvivalentní číslo v desítkové soustavě.

function convertBinaryToDecimal(binaryString) {
    // Inicializace proměnných pro výpočet
    let decimalValue = 0; // Uloží výslednou desítkovou hodnotu
    let power = 0; // Udržuje informaci o aktuální mocnině čísla 2

    // Projdeme binární číslo zprava doleva (nejnižší významová číslice)
    for (let i = binaryString.length - 1; i >= 0; i--) {
        // Získáme aktuální číslici jako číslo
        let digit = parseInt(binaryString[i], 10);

        // Pokud číslice není 0 nebo 1, hodíme chybu (binární čísla obsahují pouze tyto číslice)
        if (digit !== 0 && digit !== 1) {
            throw new Error("Neplatný znak v binárním čísle.");
        }

        // Přidáme k desítkové hodnotě příspěvek aktuální číslice vynásobený odpovídající mocninou 2
        decimalValue += digit * Math.pow(2, power);

        // Posuneme mocninu pro další číslici
        power++;
    }

    // Vrátíme výslednou hodnotu
    return decimalValue;
}

// Příklad použití
try {
    // Testovací binární číslo
    const binaryInput = "1001"; // 1101 v binární soustavě odpovídá 13 v desítkové

    // Výpočet
    const decimalOutput = convertBinaryToDecimal(binaryInput);

    // Výpis do konzole
    console.log(`Binární číslo: ${binaryInput} -> Desítkové číslo: ${decimalOutput}`);
} catch (error) {
    // Zpracování chyb
    console.error(`Došlo k chybě: ${error.message}`);
}