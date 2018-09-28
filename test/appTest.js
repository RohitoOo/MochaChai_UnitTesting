// Default NodeJs Assertion Library 
// const assert = require('assert ')

const assert = require('chai').assert; 

const sayHello = require('../app').sayHello;

// const app = require('../app').sayHello;

// Create Tests 

describe('App' , function(){
    it('app should return Hello Tester!' , function(){
        let result = sayHello()
        // app() --> Parentheses added as app Returns a function 
        assert.equal(result, 'Hello Tester!' );
    })

    it("SayHello Should return type String" , function(){
        let result = sayHello()
        assert.typeOf(result , 'string');
    })
})

// npm run test -s OR Add " mocha || true " in package.json to Remove 
// additional Error Messages below result of testing 

