export default function handler(req, res) {
    // 1. Setup CORS Headers (Agar bisa ditembak dari frontend mana saja)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // 2. Handle Preflight Request (Browser suka kirim OPTIONS dulu sebelum POST)
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // 3. Pastikan Method POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // 4. Ambil data dari Body
    // Vercel otomatis mem-parse body jika content-type application/json
    const { email, password } = req.body;

    // 5. Validasi Hardcoded
    if (email === 'dummy@gmail.com' && password === 'dummy') {
        // Login Sukses
        return res.status(200).json({
            message: 'Berhasil Login',
            token: 'dummy-token-123abc',
            user: {
                id: 1,
                email: 'dummy@gmail.com',
                name: 'User Dummy'
            }
        });
    } else {
        // Login Gagal
        return res.status(401).json({
            message: 'Email atau Password salah!'
        });
    }
}