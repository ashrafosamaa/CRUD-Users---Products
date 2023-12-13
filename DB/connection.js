import mongoose from 'mongoose'

const db_connection = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/route-1')
        .then((res) => console.log("db connection success"))
        .catch((err) => console.log("db connection fail", err))
}

export default db_connection