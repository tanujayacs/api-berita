import jwt from "jsonwebtoken";

export default function handler(req, res) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token tidak ditemukan" });
  }

  const token = authHeader.split(" ")[1];

  try {
    jwt.verify(token, "SECRET_KEY"); // validasi token

    const data = [
      {
        id: 1,
        judul: "Berita Teknologi Terbaru",
        isi: "AI ChatGPT 5.1 baru rilis dan banyak digunakan developer.",
        kategori: "Teknologi",
        tanggal: "2025-12-01"
      },
      {
        id: 2,
        judul: "Startup Indonesia Meningkat",
        isi: "Pertumbuhan startup meningkat pesat di Indonesia.",
        kategori: "Bisnis",
        tanggal: "2025-12-02"
      }
    ];

    return res.status(200).json({
      message: "Berhasil mengambil data",
      berita: data
    });

  } catch (error) {
    return res.status(403).json({ message: "Token tidak valid atau expired" });
  }
}
