import express from 'express';
import promptData from './src/constants/prompt.js';
import sourceData from './src/constants/source_data.js';
import openAiRequest from './src/service/open_ai_request.js';
import response from './src/parse_response/response_format.js';
const app = express();
const port = 3000;

app.get('/', async (req, res)  => {

    let parsedData = response.parseResponse();
    res.send(parsedData);
});

app.get('/openAI', async (req,res)=> {
  let prompt =promptData.returnPromt();
    let content = sourceData.returnSourceData();
    let headings = sourceData.returnHeadings();
    let aiRequest = await openAiRequest.openAIRequest(prompt, content);
    res.send(aiRequest);
}); 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

