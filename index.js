import express from 'express';
import response from './src/parse_response/response_format.js';
import { openAIRequest } from './src/service/open_ai_request.js';
import { returnHeadings, returnSourceData } from './src/constants/source_data.js';
import {returnPrompt} from './src/constants/prompt.js';
const app = express();
const port = 3000;

app.get('/', async (req, res)  => {

    let parsedData = response.parseResponse();
    res.send(parsedData);
});

app.get('/openAI', async (req,res)=> {
  // let prompt = returnPromt();
  let prompt = returnPrompt();
    let content = returnSourceData()
    let headings = returnHeadings();
    let aiRequest = await openAIRequest(prompt,content);
    res.send(aiRequest);
}); 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

