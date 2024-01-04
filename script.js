// script.js
document.addEventListener('DOMContentLoaded', function() {
    const hitungButton = document.getElementById('hitungButton');
    const resetButton = document.getElementById('resetButton');
    const hasil = document.getElementById('hasil');
    const calculatorForm = document.getElementById('calculatorForm');

    hitungButton.addEventListener('click', function() {
        const alas = parseFloat(document.getElementById('alas').value);
        const tinggi = parseFloat(document.getElementById('tinggi').value);

        const luas = 0.5 * alas * tinggi;
        hasil.innerText = `Luas Segitiga: ${luas}`;
        hasil.style.display = 'block';
    });

    resetButton.addEventListener('click', function() {
        calculatorForm.reset();
        hasil.style.display = 'none';
    });
});
