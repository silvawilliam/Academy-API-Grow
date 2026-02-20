import express from 'express';
import *as dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

// Criar nossa rotas

/*
// GET http://localhost:3000/teste
app.get("/teste", (req, res) => {
    console.log("Hello");

    res.send("Hello response");
    
});
*/

app.get("/hello",(req, res) => {
    res.send("Exercício Feito")
});

app.get("/about", (req, res) => {
    res.send({
        nome: "William Silva",
        email:"silva@gmail.com",
        resumo: "Mentor",
        idade: 35,
        skills:["Node.js", "API REST, Express"]

    })
});

const porta = process.env.PORT;
app.listen(porta, () => {
    console.log("O servidor está funcionando"+ porta);
});

