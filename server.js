const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ---------- CORS MULTI ORIGINS ----------
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://jokast38.fr",
  "https://www.jokast38.fr"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // Postman/Thunder Client
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("❌ ORIGIN BLOQUÉE :", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// ---------- BODY PARSER ----------
app.use(express.json());

// ---------- SMTP TRANSPORT ----------
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// ---------- TEMPLATE USER ----------
const userTemplate = (name) => `
  <div style="background:#0b0f1a; padding:40px; font-family:Poppins,Arial;color:white">
    <div style="max-width:600px;margin:auto;background:#1c2535;padding:30px;border-radius:12px">
      <h2 style="color:#ff4d57;text-align:center;font-size:28px">Merci pour votre message, ${name} !</h2>
      <p style="font-size:16px;line-height:1.7;">
        J’ai bien reçu votre demande et je vous répondrai 
        <strong style="color:#ff4d57">dans les plus brefs délais</strong>.
      </p>
      <p style="opacity:.8;margin-top:10px">
        En attendant, merci d’avoir visité mon portfolio !
      </p>
      <div style="margin-top:25px;text-align:center">
        <a style="padding:12px 24px;background:#ff4d57;color:white;text-decoration:none;border-radius:8px;font-weight:600"
           href="https://jokast38.fr">
          Retour au site
        </a>
      </div>
    </div>
  </div>
`;

// ---------- TEMPLATE ADMIN ----------
const adminTemplate = (name, email, message) => `
  <div style="background:#0b0f1a; padding:40px;font-family:Poppins,Arial">
    <div style="max-width:650px;margin:auto;background:#1c2535;padding:30px;border-radius:12px;color:white">
      <h2 style="color:#ff4d57;font-size:24px">📩 Nouveau message sur ton portfolio</h2>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Message :</strong></p>
      <div style="background:#101726;padding:20px;border-radius:8px;margin-top:10px;color:#d7d7d7">
        ${message}
      </div>
      <p style="opacity:.6;margin-top:20px">Reçu automatiquement depuis ton site web.</p>
    </div>
  </div>
`;

// ---------- ROUTE EMAIL ----------
app.post("/api/send-email", async (req, res) => {
  console.log("POST /api/send-email →", req.body);

  const { name, email, message } = req.body;

  try {
    // ----- MAIL ADMIN -----
    await transporter.sendMail({
      from: `"Portfolio Jokast" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `📨 Nouveau message de ${name}`,
      html: adminTemplate(name, email, message),
    });

    // ----- MAIL UTILISATEUR -----
    await transporter.sendMail({
      from: `"Portfolio Jokast" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Merci pour votre message !",
      html: userTemplate(name),
    });

    return res.json({ success: true });

  } catch (error) {
    console.error("Erreur SMTP:", error);
    return res.json({ success: false });
  }
});

// ---------- START SERVER ----------
app.listen(5000, () =>
  console.log("🚀 Serveur local sur http://localhost:5000")
);
