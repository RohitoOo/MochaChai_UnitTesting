// Default NodeJs Assertion Library 
// const assert = require('assert ')

const assert = require('chai').assert; 

// const sayHello = require('../app').sayHello;

// const addNumbers = require('../app').addNumbers

const app = require('../app');

// Create Tests 

describe('App' , function(){
    it('app should return Hello Tester!' , function(){
        let result = app.sayHello()
        // app() --> Parentheses added as app Returns a function 
        assert.equal(result, 'Hello Tester!' );
    })

    it("SayHello Should return type String" , function(){
        let result = app.sayHello()
        assert.typeOf(result , 'string');
    })

    it("AddNumbers should return value above 5" , function(){
        let result = app.addNumbers(1,5)
        assert.isAbove(result , 5 )
    })

    it("AddNumbers Should return type Number" , function(){
        let result = app.addNumbers()
        assert.typeOf(result , 'number')
    })
})

// npm run test -s OR Add " mocha || true " in package.json to Remove 
// additional Error Messages below result of testing 

