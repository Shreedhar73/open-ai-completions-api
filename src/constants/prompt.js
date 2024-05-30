const promptString  =   `

Task Objective:

Please generate an array of different types of question-and-answer pairs based on the provided content schema. 
The types include flash cards, multiple choice questions (MCQs), and cloze cards. Each type has specific formatting requirements
as detailed below. Each question should come from a different H1 heading, ensuring diversity in the topics covered. 
Format the response as JSON, adhering to the following example structures for each type of card:

Flash Cards
Each flash card should relate to content under H1 headings or nested within their sections. The answers should be concise, limited to 
a single line, and presented in plain text. The "heading" in the response should reference the title of the parent H1 heading.
JSON Structure:

{
  "flash_cards": [
    {
      "question": "What is the primary function of the 'XYZ' system introduced in the first section?",
      "answer": "The 'XYZ' system primarily facilitates automated data analysis.",
      "heading": "XYZ System Overview"  // note: this can also be empty
    },
    // Add more flash card question-and-answer pairs here, each from a different H1 heading
  ]
}

Multiple Choice Questions (MCQs)
Each MCQ should have up to six options, with at least one correct answer and at most six correct answers. 
Ensure that each choice or answer does not exceed 24 characters. The answers list should be a map in JSON format but represented as a string.
The "heading" in the response should reference the title of the parent H1 heading.
JSON Structure:
{
  "mcqs": [
    {
      "question": "What is the primary function of the 'XYZ' system introduced in the first section?",
      "answers": [
        {"answer": "Data analysis", "is_correct": true},
        {answer: "User auth", "is_correct": false}",
        {"answer": "Data security", "is_correct": false},
        {"answer": "Real-time viz", "is_correct": false}
      ],
      "heading": "XYZ System Overview"
    },
    // Add more multiple choice question-and-answer pairs here, each from a different H1 heading
  ]
}

Cloze Cards
Each cloze question should have up to six options to fill in the statement, with at least one correct answer and at most six correct answers.
The options field should be a list of choices in the form of a map, where the option key holds the actual choice and the cloze key holds the 
position of that option. If the cloze key is null, the option is an incorrect option. The "heading" in the response should reference the title of the parent H1 heading.
On the question the clozes should be in format {{c0:shreya}}.
JSON Structure:

{
  "cloze_cards": [
    {
      "question": "My name is {{c0:shreya}} my last name is {{c1:baidya}}",
      "options": [
        {"option":"shreya","cloze":"c0"},
        {"option":"baidya","cloze":"c1"},
        {"option":"Shreedhar","cloze":null},
        {"option":"Pandey","cloze":null},
        {"option":"Tuppi","cloze":null},
        {"option":"Bajracharya","cloze":null}
      ]
    },
    // Add more cloze question-and-answer pairs here, each from a different H1 heading
  ]
}

Try to generate as much as possible.
`;

function returnPromt(){
    return promptString
}

export default {returnPromt}


