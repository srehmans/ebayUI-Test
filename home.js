var webdriver = require('selenium-webdriver');
var properties = require('./properties');
var expect = require('chai').expect;
var driver;
var By = webdriver.By;
until = webdriver.until;
var container = By.css("#mainContent");
var noOfItem;

class HomePage {


    constructor() {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    }

    navigateToSite() {
        driver.manage().window().maximize();
        driver.get(properties.ebay);
        driver.wait(function () {
            return driver.executeScript('return document.readyState').then(function (readyState) {
                return readyState === 'complete';
            });
        });
    };

    searchItemToBuy(item) {

        driver.findElement(By.name('_nkw')).sendKeys(item);
        driver.findElement(By.className('btn btn-prim gh-spr')).click();

    };

    addItemToCart() {

        driver.wait(until.elementLocated(container)).then(function () {

            driver.findElement(By.css("#w4 > div.srp-controls__default-refinements.clearfix > div:nth-child(2) > div.fake-tabs.srp-format-tabs.srp-controls__control > ul > li:nth-child(4) > a > h2")).click()

                .then(function () {
                    driver.findElement(By.css('#srp-river-results-listing1 > div > div.s-item__info.clearfix > a')).click()

                        .then(function () {

                            driver.findElement(By.css('#atcRedesignId_btn')).click()

                                .then(function () {

                                    const atcPop = By.css('#Body');
                                    driver.wait(until.elementLocated(
                                        By.css('#atcRedesignId_overlay-atc-container > div > div.app-atc-layer-header-wrapper > div.clzBtnSection > div > div')))
                                        .then(function (close) {
                                            noOfItem = 1;
                                            close.click()

                                                .then(function () {

                                                    driver.findElement(By.css('#gh-ac')).sendKeys(properties.item2);
                                                    driver.findElement(By.className('btn btn-ter gh-spr')).click()

                                                        .then(function () {

                                                            driver.wait(until.elementLocated(container)).then(function () {

                                                                driver.findElement(By.css("#w5 > div.srp-controls__default-refinements.clearfix > div:nth-child(2) > div.fake-tabs.srp-format-tabs.srp-controls__control > ul > li:nth-child(4) > a")).click()
                                                                    .then(function () {

                                                                        driver.findElement(By.css('#srp-river-results-listing1 > div > div.s-item__info.clearfix > a')).click()

                                                                            .then(function () {

                                                                                driver.findElement(By.css('#atcRedesignId_btn')).click()

                                                                                    .then(function () {

                                                                                        const atcPop = By.css('#Body');
                                                                                        driver.wait(until.elementLocated(
                                                                                            By.css('#atcRedesignId_overlay-atc-container > div > div.app-atc-layer-header-wrapper > div.clzBtnSection > div > div')))
                                                                                            .then(function () {

                                                                                                driver.findElement(By.css('#atcRedesignId_overlay-atc-container > div > div.atc-layer-container > div > div.app-atc-layer__actionRow > a')).click();

                                                                                            })

                                                                                    })

                                                                            })

                                                                    })
                                                            })

                                                        });


                                                })

                                        })

                                })
                        })

                })
        })
    };

    verifyCart() {


        driver.wait(until.elementLocated(By.css('#mainContent > div > div.top-section > h1')))

            .then(function (Text) {

                Text.getText().then(function (text) {

                    const value = text.toString().toLowerCase().substring(15, 22);
                    expect(value).to.equal('2 items');
                    console.log('Successfully verified ..!')
                });

            });
    };

    clearCart() {

        driver.wait(until.elementLocated(By.css('#mainContent > div > div.left-section > div > div > div:nth-child(1) > div:nth-child(2) > div > div > div > div > div.cart-bucket-lineitem-foot > span:nth-child(3) > button')))

            .then(function (removeBtn) {

                removeBtn.click()

            });
    };

    closeBrowser() {

        // driver.quit();
    }

}

module.exports = new HomePage();

