const sumador = require('../../services/adder');

describe("Test de suma", function() {
    //por convencion a las funciones que vas a testear se les pone _ antes del nombre
    let _numberA;
    let _numberB;

    it("Debería devolver la suma entre numberA y numberB", function(){
        _numberA = 6;
        _numberB = 7;

        const result = sumador.add(_numberA, _numberB);

        expect(result).toEqual(13);
    });

});