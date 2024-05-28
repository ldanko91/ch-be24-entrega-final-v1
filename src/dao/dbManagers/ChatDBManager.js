import chatModel from "../../models/chatOnline.js";

export default class ChatsDBManager {
    constructor() {
        console.log('Servicio de chat conectado')
    }

    addMessage = async (newMessage) => {
        let upload = await chatModel.create(newMessage);
        return upload
    }

    getMessages = async (req, res) => {
        try {
            let messages = await chatModel.find({}, { __v: 0 }).lean();
            return messages
        } catch (error) {
            console.log(error)
        }

    }
}