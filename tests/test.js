const assert = require('assert');
const nock = require('nock');
const {
    obterPessoas
} = require('../service');

describe('Get Call StarWars API', () => {
    before(() => {
        const response = {
            "count": 1,
            "next": null,
            "previous": null,
            "results": [{
                "name": "R2-D2",
                "height": "96",
                "mass": "32",
                "hair_color": "n/a",
                "skin_color": "white, blue",
                "eye_color": "red",
                "birth_year": "33BBY",
                "gender": "n/a",
                "created": "2014-12-10T15:11:50.376000Z",
                "edited": "2014-12-20T21:17:50.311000Z",
                "url": "https://swapi.co/api/people/3/"
            }]
        };

        nock('https://swapi.co/api/people')
            .get('/?search=r2-d2&format=json')
            .reply(200, response);
    });

    it('Call API and format return', async () => {
        const expected = [{
            nome: 'R2-D2',
            peso: '96'
        }];

        const nomeBase = `r2-d2`;
        const resultado = await obterPessoas(nomeBase);

        assert.deepEqual(resultado, expected);
    });
});
