const express = require('express')
const app = express();

const calculadora_imc = require('./calculadora_imc');

app.get('/', (req, res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;

    if(calculadora_imc.validaParametro(req.query.peso) && calculadora_imc.validaParametro(req.query.altura))
    {
        let imc = calculadora_imc.efetuarcalculo(peso, altura);
        let status = calculadora_imc.retornaStatusIMC(imc);
    
        let json =  {imc: imc, status: status};
    
        res.json(json);
    }
    else
    {
        res.status(400).json({'Erro':'Peso ou altura inválidos.'});
    }
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor node iniciado em: '+ data);
});

