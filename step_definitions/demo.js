const { I } = inject();
const func = require('../page/demo/index.js');
const xpath = require('../page/demo/xpath.js');
const commonFunc = require('../page/common/index.js');
const commonXpath = require ('../page/common/xpath.js');
const homePageXpath = require('../page/homePage/xpath.js');
const faker = require('faker');
let text;
Given('I login into My Store Page successfully',() =>{
    func.login();
})
When('I click button Sign in', () => {
    commonFunc.clickValue(xpath.button.SignIn);
})
Then('I see {string}',(text) =>{
    I.waitForText(text,20);
})
When('I enter email address in fields',() => {  
    let email = faker.internet.email();
    commonFunc.fillValue(xpath.field.fieldCrtEmail,email);
    commonFunc.clickValue(xpath.button.Create);
})
When ('I enter all required information in all fields',()=>{
    func.fillAllFields();
})
Then ('Confirm Login successfully with new account',()=>{
    commonFunc.clickValue(xpath.button.Register);
    I.waitForText(xpath.text.label,30);
})
When ('I enter an invalid keyword in the search bar',()=>{
    let word = faker.hacker.noun();
    commonFunc.searchValue(xpath.field.searchBar,word);
    commonFunc.delay();
})
When ('I enter {string} in the search bar',(text)=>{
    commonFunc.searchValue(xpath.field.searchBar,text);
    commonFunc.delay();
})
When ('I see search results shown',()=>{
    I.waitForText(xpath.text.resultSearch,20);
})
When ('I select color {string}',(text)=>{
    commonFunc.selectColor(text);
})
Then ('Confirm I add product to cart successfully',()=>{
    commonFunc.clickValue(homePageXpath.btn.addToCart);
    I.waitForText(xpath.text.addSuccess,30);
    commonFunc.clickValue(homePageXpath.btn.continue);
    commonFunc.delay();
})
When ('I choose an item in {string}',(text)=>{
    commonFunc.selectMenu(text);
})
When ('I change the quantity to {int}, size {string} and color {string}',(number,textSize,textColor)=>{
    func.changeOder(number,textSize,textColor);
    commonFunc.delay();
})
When ('I select a product in the search results',()=>{
    func.selectItemsInDress();
    commonFunc.delay();
})
When ('I go to the shopping cart',()=>{
    commonFunc.clickValue(homePageXpath.btn.cart);
    commonFunc.delay();
})
When ('I remove the first added item',()=>{
    func.removeItems();
    commonFunc.delay();
})
Then ('The item has been removed from the cart',()=>{
    I.dontSee(xpath.text.amountItems,xpath.text.amountCart);
    commonFunc.delay();
})
When ('I proceed to check out items',()=>{
    func.checkOut();
    commonFunc.delay();
})
When ('I click button Contact us',()=>{
    commonFunc.clickValue(homePageXpath.btn.contactUs);
})
When ('I fill all fields in contact',()=>{
    func.fillContact();
})
When ('I click button Send',()=>{
    commonFunc.clickValue(homePageXpath.btn.sendContact);
})
When ('I click button Sign out',()=>{
    commonFunc.clickValue(homePageXpath.btn.logOut);
})
Then ('Verify I logged out',()=>{
    I.waitForText(xpath.text.titleSignIn,30);
    commonFunc.delay();
})
