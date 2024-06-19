const axios = require('axios');
require('dotenv').config();

module.exports = class HuggingFace {
    static async getCompletion(prompt) {
        const apiKey = process.env.HUGGING_FACE_API_KEY;
        const model = 'gpt2'; // ou outro modelo disponível na Hugging Face

        try {
            const response = await axios.post(
                `https://api-inference.huggingface.co/models/${model}`,
                { inputs: prompt },
                {
                    headers: {
                        'Authorization': `Bearer ${apiKey}`
                    }
                }
            );

            return response.data[0].generated_text;
        } catch (error) {
            throw error.response ? error.response.data : new Error('Erro no servidor');
        }
    }
}
