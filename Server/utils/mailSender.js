import nodeMailer from "nodemailer";

export const mailSender = async (email, title, body) => {
  try {
    let transporter = nodeMailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.USER_MAIL_ID,
        pass: process.env.USER_MAIL_PASSWORD,
      },
    });

    let info = await transporter.sendMail({
      from: "StudyNotion", 
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });
    console.log(info);
    return info;
  } catch (error) {
    console.log(error.message);
  }
};
