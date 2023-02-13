const puppeteer=require("puppeteer");
const id="hikid64914@usharer.com";
const pw="12345678";
let tab;

let browseropenpromise=puppeteer.launch
({headless:false,
defaultViewport:null,
args:["--start-maximized"],});


browseropenpromise.then(function(browser){
    console.log("browser is opened");
    return browser.pages();
})
.then(function(pages){
      tab=pages[0];
    return tab.goto("https://www.hackerrank.com/auth/login");
})
.then(function(){
    return tab.type("#input-1",id);

})
.then(function(){
    return tab.type("#input-2",pw);

})
.then(function(){
    return tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");

})
.then(function(){
    console.log("logged in");
})
.then(function(){
    return tab.waitForSelector(".prep-kit-card.ui-card.ui-layer-2.active-card",{visible :true});
})
.then(function(){
    return tab.click(".prep-kit-card.ui-card.ui-layer-2.active-card");
});
        
