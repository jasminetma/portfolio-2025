const express = require("express")
const nodemailer = require("nodemailer")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.static("public")) // your frontend folder

// === Replace with your email credentials ===
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jastimilsina@gmail.com", // Your actual Gmail
    pass: "rugx nujr tcjt lgyp" // App Password
  }
})

app.post("/send-email", (req, res) => {
  const { name, email, subject, message } = req.body

  const mailOptions = {
  from: email,
  to: "jastimilsina@gmail.com", 
  subject: subject || `New message from ${name}`,
  text: `Name: ${name}\nEmail: ${email}\n\n${message}`
}

  transporter.sendMail(mailOptions, (err, info) => {
    if(err){
      console.error(err)
      res.json({ success: false })
    } else {
      console.log("Email sent:", info.response)
      res.json({ success: true })
    }
  })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
