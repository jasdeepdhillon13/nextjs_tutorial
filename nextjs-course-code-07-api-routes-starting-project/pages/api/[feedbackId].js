import {buildFeedbackPath, extractFeedback} from './feedback'; 

function handler(req, res){

    const feedbackId = req.query.feedbackId; 
    const filePath = buildFeedbackPath(); 
    const feedbackData = extractFeedback(filePath); 

    feedbackData.find( (feedback) => feedback.id === feedbackId); 
    res.status(200).json({feedback: selectedFeedback}); 
}

export default handler; 