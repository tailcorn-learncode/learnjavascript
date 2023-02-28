const express = require('express')
const app = express()
const port = 3000

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: "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",
});

 const openai = new OpenAIApi(configuration);

app.get('/',async (req, res) => {
  console.log("hjjj");
  let completion = await openai.createCompletion({
      model: "davinci:ft-personal-2023-02-28-00-54-13",
      prompt: "office of Retirement Services address",
      temperature: 0,
      max_tokens: 50
  });
  
  console.log(completion.data.choices[0].text);
  res.send(completion.data.choices[0].text)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
