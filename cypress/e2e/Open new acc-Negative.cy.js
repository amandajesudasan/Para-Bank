// Open new account page negative cases 
import loginDemo from '../e2e/1-getting-started/pageobject/loginDemo.cy' // POM 

it('login' ,function (){
 const lp = new loginDemo () // lp-login page 
 lp. Visit()

 cy.contains("a", "Register").click(); // Click on the Register link 

 cy.get('input[name="customer.firstName"]')
 .type('Alexa')
 cy.get('input[name="customer.lastName"]')
 .type('David')
 cy.get('input[name="customer.address.street"]')
 .type('14 Greek lane ')
 cy.get('input[name="customer.address.city"]')
 .type('Los Angels')
 cy.get('input[name="customer.address.state"]')
 .type('California')
 cy.get('input[name="customer.address.zipCode"]')
 .type('1471')
 cy.get('input[name="customer.phoneNumber"]')
 .type('174632896')
 cy.get('input[name="customer.ssn"]')
 .type('1326')
 cy.get('input[name="customer.username"]')
 .type('vani')
 cy.get('input[name="customer.password"]')
 .type('vani1')
 cy.get('input[name="repeatedPassword"]')
 .type('vani1') 
 
 cy.xpath('//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input').click() //Resgister button 



 
// Open New Account Ngative scenarios 
cy.xpath('//*[@id="leftPanel"]/ul/li[1]/a').click() // open new account
cy.wait(1000) 
cy.get('select[id="type"]').select('1').should('have.value', '1') //select Savings
cy.xpath('//*[@id="rightPanel"]/div/div/form/div/input').click() // open new account button
cy.xpath('//*[@id="newAccountId"]').click() //click on the new account no
});

