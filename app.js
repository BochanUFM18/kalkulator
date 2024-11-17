const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route untuk menghitung operasi
app.post('/calculate', express.json(), (req, res) => {
    const { num1, num2, operator } = req.body;

    // Validasi input
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'Input harus berupa angka' });
    }

    let result;

    switch (operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                return res.status(400).json({ error: 'Pembagian dengan 0 tidak diperbolehkan' });
            }
            result = num1 / num2;
            break;
        default:
            return res.status(400).json({ error: 'Operator tidak valid' });
    }

    return res.json({ result });
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
