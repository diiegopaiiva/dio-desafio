const InputPrompt = require("../models/input-prompt");
const HuggingFace = require("../config/huggingface");

module.exports = {
    async sendText(req, res) {
        const inputModel = new InputPrompt(req.body);
        try {
            const responseText = await HuggingFace.getCompletion(inputModel.prompt);
            return res.status(200).json({
                success: true,
                data: responseText
            });
        } catch (error) {
            return res.status(400).json({
                success: false,
                error: error.message || "Houve um problema no servidor"
            });
        }
    }
}
