// Default NodeJs Assertion Library 
// const assert = require('assert ')

const assert = require('chai').assert; 

// const sayHello = require('../app').sayHello;

// const addNumbers = require('../app').addNumbers

const app = require('../app');

// Results 

sayHelloResult = app.sayHello()
addNumbersResult = app.addNumbers(5,5)

// Create Tests 

describe('App' , function(){

        describe("SayHello" , function (){

            it('App should return Hello Tester!' , function(){
        
                // app() --> Parentheses added as app Returns a function 
                assert.equal(sayHelloResult, 'Hello Tester!' );
            })
        
            it("SayHello Should return type String" , function(){
                
                assert.typeOf(sayHelloResult , 'string');
            })

        })
    

        describe("Add Numbers" , function(){

            it("AddNumbers should return value above 5" , function(){
                
                assert.isAbove(addNumbersResult , 5 )
            })

            it("AddNumbers Should return type Number" , function(){
            
                assert.typeOf(addNumbersResult , 'number')
            })
        })

})

// npm run test -s OR Add " mocha || true " in package.json to Remove 
// additional Error Messages below result of testing 

