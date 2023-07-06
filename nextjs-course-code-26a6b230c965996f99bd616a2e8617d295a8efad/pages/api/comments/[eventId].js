import {MongoClient} from 'mongodb'; 

async function handler(req, res) {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(''); 
  const db = client.db(); 
  await db.collection('emails').insertOne({
           email: userEmail
   });



  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === " " ||
      !text ||
      text.trim() === " "
    ) {
        res.status(422).json({message:"Invalid Input"}); 
        return ; 
    }

    const newComment = {
        id: new DataTransfer().toISOString(), 
        email, 
        name, 
        text 
    }; 

    res.status(201).json({message: 'added comment.', comment: newComment}); 
  }

  if (req.method === "GET") {
      const dummyList= [
          {id: 'c1', name: 'Max', text:'A first comment'},
          {id: 'c2', name: 'ax', text:'A second comment'}, 
      ]; 
      res.status(200).json({comments: dummyList}); 
  }
  client.close(); 
}

export default handler;
