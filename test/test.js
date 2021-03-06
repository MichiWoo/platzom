
const expect = require('chai').expect
const platzom = require('..').default


describe('#platzom', function () {

    it ('Si la palabra termina en "ar", se le quitan esos dos caracteres.', function () {
        const translation = platzom('Programar')
        expect(translation).to.equal('Program')
    })
    it ('Si la palabra empieza con "z", se le añaden "pe" al final.', function () {
        const translation = platzom('Zorro')
        const translation2 = platzom('Zarpar')
        expect(translation).to.equal('Zorrope')
        expect(translation2).to.equal('Zarppe')
    })
    it ('Si la palabra tiene más de 10 letras partir a la mitad y añadir un "-".', function () {
        const translation = platzom('abecedario')
        expect(translation).to.equal('abece-dario')
    })
    it ('Si la palabra original es un palindromo, ninguna regla cuent, se devuelve la misma palabra intercalando mayusculas y minusculas.', function () {
        const translation = platzom('sometemos')
        expect(translation).to.equal('SoMeTeMoS')
    })
})