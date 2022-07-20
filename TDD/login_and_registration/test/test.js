const chai = require('chai');
const expect = chai.expect;
const studentModel = require('../models/student');

describe("Student Model", function(){
    it("Given a valid input, it should return true if we successfully register a student", async function(){
        let params = {"first_name": "Alfie", "last_name": "Osayan", "email": "aosayan88@gmail.com", "password": "password123"};
        
        let result = await studentModel.register(params);
        
        expect(result).to.equal(true);
    });

    it("Given a valid input, it should return false if we entered an already existing email", async function(){
        let params = { "first_name": "Victor", "last_name": "Magtanggol", "email": "vigmag@gmail.com", "password": "12345678" };
        
        let result = await studentModel.register(params);
        
        expect(result).to.equal(false);
    });
    
    it("Given a valid input, it should return the user's data if we successfully login", async function () {
        
        let params = { "email": "aosayan@gmail.com", "password": "password123" };
        
        let result = await studentModel.login(params);
        
        expect(result.user.first_name).to.equal('Alfie');
    });
    
    it("Given a valid input, it should return false when email doesn't exist in database.", async function () {
        let params = { "email": "vigma123g@gmail.com", "password": "12345678" };
        
        let result = await studentModel.login(params);
        
        expect(result.isLogin).to.equal(false);
    });
    
    it("Given a valid input, it should return true when email and password is correct", async function () {
        let params = {"email": "ang_probinsyano@gmail.com", "password": "cardodalisay123"};
        
        let result = await studentModel.login(params);
        let isLogin = result.isLogin;
        expect(isLogin).to.equal(true);
    });
});