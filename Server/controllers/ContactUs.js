import { contactUsEmail } from "../mail/ContactFormRes.js"            
import {mailSender} from "../utils/mailSender.js"

export async function contactUsController(req, res) {

  const { email, firstname, lastname, message, phoneNo, countrycode } = req.body

  try {
    await mailSender( email, "Your Data send successfully", contactUsEmail(email, firstname, lastname, message, phoneNo, countrycode))
    await mailSender( "shubhamkamboj565@gmail.com" , "Someone Send this data to you", contactUsEmail(email, firstname, lastname, message, phoneNo, countrycode))

    return res.json({
      success: true,
      message: "Email send successfully",
    })
  }
   catch (error) {
      return res.json({
        success: false,
        message: "Something went wrong...",
      })
  }
}