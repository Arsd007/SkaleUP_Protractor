let loginPage = function(){

    this.goToPage = function(url){
        browser.get(url);
    }

     let emp_id = element(by.id('empEmail')); 
     this.empid = function(employee_id){
        emp_id.sendKeys(employee_id);
    }
    let password = element(by.id('password'));
    this.pass = function(emp_pass){
        password.sendKeys(emp_pass);
    }

    let nextbtn = element (by.buttonText('Next'));
    this.nxtbtn = function(){
        nextbtn.click();

    }

    let seletrole = element(by.id('selectedRole'));
    this.selectRole = async function( ){

        seletrole.click();
        let roletext = await element.all(by.xpath("//div[@role='option']")).getText();  //text
        let roleElement = await element.all(by.xpath("//div[@role='option']"));   //element
        for(i =0; i<roletext.length; i++){

            //console.log(txt[i]);
        
            if(roletext[i]==="Admin"){
              console.log("Admin has found and clicked");
              roleElement[i].click();
           break;
              
            }
        
        
        } 
    }
 


}

module.exports = new loginPage();