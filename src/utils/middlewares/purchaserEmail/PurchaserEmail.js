import dbUsersController from "../../../controllers/user.controller.js"
const UsersController = new dbUsersController();
import recoveryNodemailerTransport from "../../nodemailer/recoveryNodemailer.js";
import { RecoveryNodemailerConfig } from "../../../config/recoveryNodemailer.config.js";

const PurchaserEmail = async (userId, cart) => {
    let user = await UsersController.getUserById(userId)
    let purchaserEmail = user.email
    await recoveryNodemailerTransport.sendMail({
        from: RecoveryNodemailerConfig.recoveryNodemailerUserEmail,
        to: purchaserEmail,
        subject: 'Gracias por tu compra en Ecommerce Danko',
        html: `
            <h1>Listado de la compra</h1>
            <p>${cart}</p>
            <a href="http://localhost:8080/api/users/current/"><h2>Para volver a tu cuenta cliquea aquí!</h2></a>
        `
    })
    return 
}

export default PurchaserEmail