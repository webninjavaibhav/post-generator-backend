exports.postGenerator = async (req, res) => {
  const blogPostContent = req.body.content;
  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3",
      {
        headers: {
          Authorization: `Bearer ${process.env.SECRET_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ inputs: blogPostContent }),
      }
    );
    const result = await response.json();
    return res.json({ text: result?.[0]?.generated_text || "" });
  } catch (err) {
    next(err);
  }
};
