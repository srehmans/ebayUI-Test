var homePage = require('./home');
var properties = require('./properties');
var describe = require ('mocha').describe;
var afterEach = require ('mocha').afterEach;
var it = require ('mocha').it;
var expect = require('chai');

describe('E2E Test to search, add,verify and remove item from Ebay Shopping Cart', function () {

    before(function () {
        homePage.navigateToSite();

    });

    after(function () {

        homePage.closeBrowser();

    });

    it('add,verify and remove items from Ebay Shopping Cart', function () {

        homePage.searchItemToBuy(properties.item1);
        homePage.addItemToCart();
        homePage.verifyCart();
        homePage.clearCart();

    });



});
