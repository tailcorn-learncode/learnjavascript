import { Configuration, OpenAIApi } from "openai";
import * as fs from 'fs';

const configuration = new Configuration({
    apiKey: "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",
});

 const openai = new OpenAIApi(configuration);
// let file = await openai.createFile(
//     fs.createReadStream("data.jsonl"),
//     "fine-tune"
//   );
//   console.log(file.data.id);

  //file-EbL9JGWy9gbu38gCLkyTeqDM
  
//openai fine-tune
// let fineTune = await openai.createFineTune({
//     model: "davinci",
//     training_file: "file-EbL9JGWy9gbu38gCLkyTeqDM"
// });

//   console.log(fineTune.data);

//list available models
// let finetunes = await openai.listFineTunes();
// console.log(finetunes.data);

//ft-id6FC34GBCyr5Nyl4ocRiAEp
//ft-fVY5kfqGPKtxSBH4ztBksTYk

//retrive fine-tune
let fineTune = await openai.retrieveFineTune("ft-cptobdh7vvIBPlDseXGVxNvy");
console.log(fineTune.data);

//davinci:ft-personal-2023-02-27-23-02-43

//create completion
let completion = await openai.createCompletion({
    model: "davinci:ft-personal-2023-02-28-00-54-13",
    prompt: "What Office of Retirement Services do?",
    temperature: 0,
    max_tokens: 50
});

console.log(completion.data.choices[0].text);

