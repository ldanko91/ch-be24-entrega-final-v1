import recoveryNodemailerTransport from '../../nodemailer/recoveryNodemailer.js';
import { RecoveryNodemailerConfig } from '../../../config/recoveryNodemailer.config.js';
import ProductsDBManager from "../../../dao/dbManagers/ProductsDBManager.js";
const ProdManager = new ProductsDBManager();
import UsersDBManager from "../../../dao/dbManagers/UsersDBManager.js"
const UsersManager = new UsersDBManager();

const DeleteAuth = async (pCod, role, id, res) => {
        if (!id)
            return res.status(401).json({ status: 'error', error: 'Unauthorized' });

        if (role == 'admin')
            {
                let products = await ProdManager.getProductByCode(pCod);
                let prodToDelete = products[0]
                if (prodToDelete.owner == 'admin') {
                    let deleteProd = await ProdManager.deleteProductByCode(pCod);
                    return deleteProd
                } else {
                    let ownerId = prodToDelete.owner
                    let owner = await UsersManager.getUserById(ownerId);
                    let ownerEmail = owner.email;
                    await recoveryNodemailerTransport.sendMail({
                        from: RecoveryNodemailerConfig.recoveryNodemailerUserEmail,
                        to: ownerEmail,
                        subject: `Producto de tu propiedad desactivado`,
                        html: `
                            <p>Te informamos que tu producto con ID: ${id}  ha sido desactivado del E-Commerce</p>
                        `
                    })
                    await ProdManager.deleteProductByCode(pCod)
                    return
                }
            }
        
        if (role == 'premium'){
            let prodToDelete = await ProdManager.getProductByCode(pCod);
                if(prodToDelete.owner = id)
                {let deleteProd = await ProdManager.deleteProductByCode(pCod);
                return deleteProd;}}
                
                return res.status(401).json({ status: 'error', error: 'Unauthorized' });
            }


export default DeleteAuth