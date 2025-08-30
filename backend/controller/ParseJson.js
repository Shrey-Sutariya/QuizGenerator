

const ParseJson = (text)=>{
    
text=text.replace(/\n+/g, "\n").trim();
text=text.split(/(?=Question\s+\d+:)/g);

const quizArray = text.map(block => {
    const qMatch = block.match(/Question\s+(\d+):\s*(.*?)(?=\n[A-D]\)|Answer:)/s);
    
    if (!qMatch) return null;

    const questionNumber = parseInt(qMatch[1]);
    const questionText = qMatch[2].trim();
    const questionText_clean = questionText.replace(/^\*{2,}\s*|\s*\*{2,}$/gs, "");
    console.log("questionText ", questionText_clean);
    

    // Extract options
    const options = {};
    const optionMatches = [...block.matchAll(/^([A-D])\)\s*(.*)$/gm)];
    optionMatches.forEach(match => {
        options[match[1]] = match[2].trim();
    });

    // Extract answer
    const answerMatch = block.match(/Answer:(\**)?\s*([A-D])\)?/);

    
    
    const correctAnswer = answerMatch ? answerMatch[2] : null;

    return {
        number: questionNumber,
        question: questionText_clean,
        options: options,
        answer: correctAnswer
    };
}).filter(Boolean);

 return quizArray
}

module.exports=ParseJson;