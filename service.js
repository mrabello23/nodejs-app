const {
    get
} = require('axios');

const URL_BASE = `https://swapi.co/api/people`;

async function obterPessoas(nome) {
    const url = `${URL_BASE}/?search=${nome}&format=json`;
    const result = await get(url);

    return result.data.results.map((item) => {
        return {
            nome: item.name,
            peso: item.height
        };
    });
}

module.exports = {
    obterPessoas
}
