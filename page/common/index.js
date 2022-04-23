const puppeteer = require('puppeteer');
const { I } = inject();
const xpath = require('../demo/xpath');
const commonXpath = require('../common/xpath.js');
const homePageXpath = require('../homePage/xpath');
module.exports = {
    fillValue(xpath, value){
        I.waitForVisible(xpath,30);
        I.fillField(xpath, value);
    },
    clickValue(xpath){
        I.waitForVisible(xpath,30);
        I.click(xpath);
    },
    selectItems(option,value){
        I.selectOption({css:option},value);
    },
    searchValue(xpath,text){
        I.waitForVisible(xpath,30);
        this.fillValue(xpath,text);
        I.pressKey('Enter');
    },
    delay(){
        I.wait(commonXpath.waitForLoading);
    },
    selectColor(value){
        switch(value){
            case 'yellow' :
                this.clickValue(xpath.btnColor.yellow);
                break;
            case 'blue':
                this.clickValue(xpath.btnColor.blue);
                break;
            case 'orange':
                this.clickValue(xpath.btnColor.orange);
                break;
            case 'pink':
                this.clickValue(xpath.btnColor.pink);
                break;
            default: break;

        }
    },
    selectMenu(text){
        switch(text){
            case 'Women': 
                this.clickValue(homePageXpath.menu.Women);
                this.clickValue(homePageXpath.option.itemWomen);
                I.wait(commonXpath.waitForLoading);
                break;
            case "Tshirts":
                this.clickValue(homePageXpath.menu.Tshirts);
                I.pressKey("Space");
                break;
            default: break;
        }
    },
    chooseFile(xpath,file){
        I.attachFile(xpath,file); 
    },
}