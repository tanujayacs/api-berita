import jwt from "jsonwebtoken";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  // Hardcode user
  if (email === "dummy@gmail.com" && password === "dummy") {
    const token = jwt.sign({ email }, "SECRET_KEY", { expiresIn: "1h" });

    return res.status(200).json({
      message: "Login berhasil",
      bearer: token
    });
  }

  return res.status(401).json({ message: "Email atau password salah" });
}
