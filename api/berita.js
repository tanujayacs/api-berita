export default function handler(req, res) {
    // 1. Setup CORS Headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // 2. Handle Preflight Request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // 3. Hanya izinkan method GET
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // 4. Cek Header Authorization
    const authHeader = req.headers.authorization;

    // Format header biasanya: "Bearer <token>"
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            message: 'Akses ditolak. Token tidak ditemukan atau format salah.'
        });
    }

    // Ambil tokennya saja (hilangkan kata "Bearer ")
    const token = authHeader.split(' ')[1];

    // 5. Verifikasi Token (Hardcoded)
    if (token !== 'dummy-token-123abc') {
        return res.status(403).json({
            message: 'Token tidak valid atau kadaluarsa.'
        });
    }

    // 6. Jika Token Valid, Kirim Data Berita (Sesuai request)
    const dataBerita = [
        {
            "id": "c3a48312-2697-463f-af66-2b585b0996ea",
            "user_id": "db54ca8e-3512-47b9-b3d8-28d9a21020f8",
            "judul": "Dampak Kurang Tidur pada Generasi Digital #29",
            "penulis": "Auto Generated",
            "kategori": "Olahraga",
            "status": "Public",
            "deskripsi": "<p>&nbsp;</p>\r\n<p>Pernah nggak kamu ngerasa tubuh makin lemah gara-gara sering begadang? Banyak orang ngeremehin hal ini padahal dampaknya serius.</p>\r\n<p>Studi menunjukkan kalau kurang tidur bisa bikin performa otak turun hingga 40%. Efeknya? Susah fokus, gampang blank, dan mood gampang hancur.</p>\r\n<p>Bukan cuma pikiran, fisik juga kena. Risiko penyakit jantung, diabetes, dan tekanan darah tinggi meningkat drastis kalau kebiasaan buruk ini diterusin.</p>\r\n<p>Begadang bikin sistem imun menurun. Makanya kamu jadi gampang sakit, gampang cape, dan produktivitas anjlok.</p>\r\n<p>Kalau terus kayak gini, masa depanmu yang kena imbasnya. Kebiasaan kecil bisa merusak hal besar tanpa kamu sadari.</p>\r\n<p>Mulai sekarang coba atur waktu tidur. Gadget dimatiin sejam sebelum tidur, dan coba rutinin pola tidur yang sehat.</p>\r\n<p>Menurut peneliti, tidur cukup bisa meningkatkan produktivitas hingga 35%. Tubuh lebih segar, pikiran lebih fokus.</p>\r\n<p>Tidur bukan cuma kebutuhan, tapi investasi buat kesehatan jangka panjang.</p>\r\n<p>Mulai malam ini, stop begadang tanpa alasan penting. Hidupmu terlalu berharga buat dirusak kebiasaan buruk.</p>",
            "gambar": "34524c967dc44e48b325463b9b44e740",
            "slug": "dampak-kurang-tidur-pada-generasi-digital-#29",
            "visitor_count": null,
            "created_at": "2025-12-01T01:07:10.395264Z",
            "updated_at": "2025-12-01T01:07:10.395266Z"
        },
        {
            "id": "851b6809-048e-434e-a370-8be601829799",
            "user_id": "80764bbf-d10b-4d44-a479-9256e92e2875",
            "judul": "Rahasia Gelap Dibalik Kebiasaan Begadang #30",
            "penulis": "Auto Generated",
            "kategori": "Lifestyle",
            "status": "Public",
            "deskripsi": "<p>&nbsp;</p>\r\n<p>Pernah nggak kamu ngerasa tubuh makin lemah gara-gara sering begadang? Banyak orang ngeremehin hal ini padahal dampaknya serius.</p>\r\n<p>Studi menunjukkan kalau kurang tidur bisa bikin performa otak turun hingga 40%. Efeknya? Susah fokus, gampang blank, dan mood gampang hancur.</p>\r\n<p>Bukan cuma pikiran, fisik juga kena. Risiko penyakit jantung, diabetes, dan tekanan darah tinggi meningkat drastis kalau kebiasaan buruk ini diterusin.</p>\r\n<p>Begadang bikin sistem imun menurun. Makanya kamu jadi gampang sakit, gampang cape, dan produktivitas anjlok.</p>\r\n<p>Kalau terus kayak gini, masa depanmu yang kena imbasnya. Kebiasaan kecil bisa merusak hal besar tanpa kamu sadari.</p>\r\n<p>Mulai sekarang coba atur waktu tidur. Gadget dimatiin sejam sebelum tidur, dan coba rutinin pola tidur yang sehat.</p>\r\n<p>Menurut peneliti, tidur cukup bisa meningkatkan produktivitas hingga 35%. Tubuh lebih segar, pikiran lebih fokus.</p>\r\n<p>Tidur bukan cuma kebutuhan, tapi investasi buat kesehatan jangka panjang.</p>\r\n<p>Mulai malam ini, stop begadang tanpa alasan penting. Hidupmu terlalu berharga buat dirusak kebiasaan buruk.</p>",
            "gambar": "a63731bf29ed4fd4b12fc08cd0c79591",
            "slug": "rahasia-gelap-dibalik-kebiasaan-begadang-#30",
            "visitor_count": null,
            "created_at": "2025-12-01T01:07:10.395287Z",
            "updated_at": "2025-12-01T01:07:10.395290Z"
        }
    ];

    return res.status(200).json({
        status: "success",
        message: "Data berita berhasil diambil",
        data: dataBerita
    });
}