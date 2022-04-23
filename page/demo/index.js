// enable I and another page object
const { I } = inject();
const xpath = require('./xpath.js');
const commonPage = require('../common/index.js');
const commonXpath = require('../common/xpath.js');
const homePageXpath = require('../homePage/xpath');
const faker = require('faker');
module.exports = {
    login() {
        I.amOnPage(xpath.url);
        I.waitForText(xpath.text.titleHome,30);
    },
    fillAllFields(){
        commonPage.fillValue(xpath.field.fieldFirstName,faker.name.firstName());
        commonPage.fillValue(xpath.field.fieldLastName,faker.name.lastName());
        commonPage.fillValue(xpath.field.fieldPassWord,xpath.text.accPasswd);
        commonPage.fillValue(xpath.field.fieldAddress,faker.address.streetAddress());
        commonPage.fillValue(xpath.field.fieldCity,faker.address.cityName());
        commonPage.fillValue(xpath.field.fieldState,xpath.text.txtState);
        commonPage.fillValue(xpath.field.fieldPostalCode,xpath.text.txtPostalCode);
        commonPage.fillValue(xpath.field.fieldCountry,xpath.text.txtCountry);
        commonPage.fillValue(xpath.field.fieldMobileNo,xpath.text.txtMobileNo); //faker.phone.phoneNumber()
        commonPage.fillValue(xpath.field.fieldAsgAnAddress,faker.address.country());
    },
    changeOder(number,textSize,textColor){
        commonPage.fillValue(xpath.field.quantity,number);
        commonPage.fillValue(xpath.field.size,textSize);
        commonPage.selectColor(textColor);
    },
    selectItemsInDress(){
        commonPage.clickValue(homePageXpath.btn.listView);
        commonPage.clickValue(xpath.button.more);
        I.wait(5);
        commonPage.selectColor(xpath.text.color);
    },
    removeItems(){
        commonPage.fillValue(xpath.field.removeItemFirst,0);
    },
    checkOut(){
        commonPage.clickValue(homePageXpath.btn.summaryCheckOut);
        commonPage.clickValue(homePageXpath.btn.addressCheckOut);
        commonPage.clickValue(xpath.field.checkBox);
        commonPage.clickValue(homePageXpath.btn.shippingCheckOut);
        commonPage.clickValue(homePageXpath.btn.payByBank);
        commonPage.clickValue(homePageXpath.btn.confirm);
    },
    fillContact(){
        commonPage.fillValue(xpath.field.subHeading,xpath.text.subHeading);
        commonPage.fillValue(xpath.field.ordReference,xpath.text.ordReference);
        //commonPage.fillValue(xpath.field.product, xpath.text.product);
        commonPage.fillValue(xpath.field.message,xpath.text.message);
        commonPage.chooseFile(xpath.button.chooseFile,xpath.file.fileImage);
    }
}