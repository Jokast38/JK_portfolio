import nodemailer from "nodemailer";

// ---------- SMTP GMAIL ----------
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS, // Mot de passe d'application Gmail
  },
});

// ---------- TEMPLATE EMAIL UTILISATEUR ----------
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

// ---------- TEMPLATE EMAIL ADMIN ----------
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

// ---------- HANDLER SERVERLESS ----------
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { name, email, message } = req.body;

  try {
    // ------ MAIL QUE TU REÇOIS ------
    await transporter.sendMail({
      from: `"Portfolio Jokast" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `📨 Nouveau message de ${name}`,
      html: adminTemplate(name, email, message),
    });

    // ------ MAIL AUTOMATIQUE POUR L’UTILISATEUR ------
    await transporter.sendMail({
      from: `"Portfolio Jokast" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Merci pour votre message !",
      html: userTemplate(name),
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("Erreur SMTP:", error);
    return res.status(500).json({ success: false, error });
  }
}
