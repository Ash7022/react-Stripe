const app = require("./app");

const connectDatabase = require("./config/database");




connectDatabase()
const server = app.listen(5000, ()=>{
    console.log("server is running on server is working on http://localhost:3000");
});
