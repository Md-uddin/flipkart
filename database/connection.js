
import mongoose from 'mongoose'

 const connection = async (URL) => {
    
    try {
        await   mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify:false
        })
        console.log("Database is connected")
        
    } catch (err) {
        console.log('Error :' ,err.message)
    }
 
    
}

export default connection;