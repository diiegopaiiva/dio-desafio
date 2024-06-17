const InputPrompt = require("../models/input-prompt")
const openai = require("../config/openai")

module.exports = {
    async sendText(req, res){
        const OpenaiAPI = openai.configuration()
        const imputModel = new InputPrompt(req.body)
        try {
            const response = await OpenaiAPI.createCompletion(
                openai.textCompletion(imputModel)
            )
            return res.status(200).json({
                sucess:true,
                data: response.data.choices[0].text
            })
        } catch (error) {
            return res.status(400).json({
                sucess:false,
                error: error.response ? error.response : "there was an inssue on the server"
            })
        }
    }
}