import { getBotResponse } from "../services/chatbot.js"

export const handleChat = async (req, res) => {
  try {
    const { message } = req.body
    const reply = await getBotResponse(message)
    res.json({ reply })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Something went wrong" })
  }
}
