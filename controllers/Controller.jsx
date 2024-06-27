const nodemailer = require("nodemailer");

// transport
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "dessie.frami60@ethereal.email",
    pass: "N92MdsvpNsRygnNC9U",
  },
});

const SendEmailController = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // validation
    if (!name || !email || !message) {
      return res.status(404).send({
        success: false,
        message: "Please fill all the fields",
      });
    }

    // email options
    await transporter.sendMail({
      to: "satyadav24@gmail.com",
      from: "skillimprove24@gmail.com",
      subject: "Regarding Mern Portfolio App",
      html: `
        <h5>Detail Information</h5>
        <ul>
          <li><p>Name: ${name}</p></li>
          <li><p>Email: ${email}</p></li>
          <li><p>Message: ${message}</p></li>
        </ul>
      `,
    });
    return res.status(200).send({
      success: true,
      message: "Your email has been sent",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send({ success: false, message: "Send Email API error", err });
  }
};

module.exports = { SendEmailController };
