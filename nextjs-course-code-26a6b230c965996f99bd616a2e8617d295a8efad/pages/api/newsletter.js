import { MongoClient } from "mongodb";

async function handler(req, res){
    if(req.method === 'POST'){
       const userEmail = req.body.email; 
       
       if(!userEmail || !userEmail.includes('@')){
        res.status(442).json({message: 'Invalid email address'});    
        return ; 
       }

       const client = await MongoClient.connect(''); 
       const db = client.db(); 
       await db.collection('emails').insertOne({
                email: userEmail
        });

        client.close(); 
        
       console.log(userEmail); 
       res.status(201).json({message: 'Signed Up'}); 
    }
}

export default handler; 
