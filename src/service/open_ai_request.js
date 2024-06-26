import axios from "axios";
import config from "../config.js";


export async function openAIRequest(content,prompt){
    try{
    let message = [
        {
            "role": "system", "content": prompt
        },{
            "role": "user", "content": content
        }
    ];
    const url = 'https://api.openai.com/v1/chat/completions';
    let response = await axios.post(
        url,
        //data
        { 
            "model": "gpt-3.5-turbo-1106",
            "messages": message,
            "response_format": {"type": "json_object"},
        },
        ///config
        {
            headers : {
                Authorization : "Bearer "+ config.openAIKey,
                "Content-Type" : ['application/json']
            },
            
        }

    );

    if(response.status == 200){
        console.log('success');
        return JSON.parse(response.data.choices[0].message.content);
        // return ResponseModel(
        //     'flash',
        //     'content'
        // )
    }else{
        console.log('failed');
        return response.statusText;
    }}catch (err) {
        console.log(err)
        return err;
    }
}
