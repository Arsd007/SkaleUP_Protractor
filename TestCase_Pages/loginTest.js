let loginPage = require('../POM_Pages/logInPage.js');


describe('L-001 - Login Page - Succesful Login', function(){
    beforeAll(function() { 
        
        loginPage.goToPage("https://nextgenlos.ugrocapital.com/crm/login");
    }); 

    it('TC-001 - Can login successfully with valid username and password', function(){
        loginPage.empid('manali.bankar@bajajfinserv.in');
        //browser.sleep(3000);
        loginPage.pass('abc');
        loginPage.nxtbtn();
        //browser.sleep(3000);
        loginPage.selectRole();
        browser.sleep(5000);
        loginPage.nxtbtn();
        browser.sleep(3000);
       
        
    })

})
