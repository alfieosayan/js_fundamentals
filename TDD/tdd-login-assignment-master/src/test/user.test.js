const chai                  = require('chai');
const expect                = chai.expect;
const UserModel             = require('../models/user.model');

describe('Login feature', function(){

    describe('User Model', function () {
        let userModel = new UserModel();

        it('Given email and password as input, it should return user info (including password) when the email is found in the database', async () => {
            let input = "testuser@test.com";
            let output = { id: 1, "name": "Anthony Dillahunty", "email": 'testuser@test.com', "password": "password123" };
            
            let result = await userModel.checkEmail(input);

            expect(result).to.eql(output);
        });

        it("Given email and password as input, it should return false when email doesn't exist in database.", async () => {
            let params = { "email": "testinguser1@test.com", "password": "password123" };
            let result = await userModel.checkEmail(params.email);

            expect(result).to.equal(false);
        });

        it("Given email and password as input, it should return true when email and password is correct", async () => {
            let params = { "email": "testuser@test.com", "password": "password123" };
            
            let result = await userModel.loginUser(params);

            let isLogin = result.isLogin;
            expect(isLogin).to.equal(true);
        });

        it('Given email and password as input, it should return the expected redirect_url (/success page) on success', async () => {
            let params = { "email": "testuser@test.com", "password": "password123" };
            let result = await userModel.loginUser(params);

            let redirect_url = result.redirect_url;
            expect(redirect_url).to.equal('/success');
        });

        it('Given password as input, it should return an error message saying: Email is required, when email is missing', () => {
            let params = { "email": null, "password": "password123" };
            let result = userModel.validateLogin(params);
            
            let error_message = result.error_message;
            expect(error_message).to.equal('Email is required');
        });

        it('Given email as input, it should return an error message saying: Password is required, when password is missing', () => {
            let params = { "email": "testuser@test.com", "password": null };
            let result = userModel.validateLogin(params);

            let error_message = result.error_message;
            expect(error_message).to.equal('Password is required');
        });

        it('Given empty input, it should return an error message saying: Email and password is required, when all fields are missing', () => {
            let params = { "email": null, "password": null };
            let result = userModel.validateLogin(params);

            let error_message = result.error_message;
            expect(error_message).to.equal('Email and password is required');
        });
        
    });
});

