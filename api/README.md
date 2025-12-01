API Berita Sederhana (Serverless Vercel)

API ini dibuat untuk tujuan latihan mengambil data dengan proteksi Bearer Token.

Base URL

https://api-berita-tanujaya.vercel.app

Endpoints

1. Login

Digunakan untuk mendapatkan Token.

URL: /api/login

Method: POST

Body (JSON):

{
  "email": "dummy@gmail.com",
  "password": "dummy"
}


Response: Mengembalikan JSON berisi token.

2. Get Berita

Digunakan untuk mengambil daftar berita (Hanya bisa diakses jika punya token).

URL: /api/berita

Method: GET

Headers:

Authorization: Bearer <token_dari_login>

Response: Mengembalikan Array object berita.

Cara Menjalankan

Project ini didesain untuk berjalan di Vercel Functions.

Push ke GitHub.

Import repo ke Vercel.

API siap digunakan.