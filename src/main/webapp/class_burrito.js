var PRICE_FOR_CHICKEN = 6.20;
var PRICE_FOR_STEAK = 6.75;
var PRICE_FOR_CARNITAS = 6.60;
var PRICE_FOR_BARBACOA = 6.60;
var PRICE_FOR_VEGETARIAN = 6.20;
var UPCHARGE_FOR_GUACAMOLE = 1.40;


function Burrito() {
    var burritoType;
    var riceType;
    var beanType;
    var salsaTypes = [];
    var guacamoleIsTrue;
    var calculateCostOfSingleBurrito;
    var burritoId;
    var salsaPicoDeGalloIsTrue;
    var salsaRoastedCornIsTrue;
    var salsaGreenTomatilloIsTrue;
    var salsaRedTomatilloIsTrue;

    this.getBurritoType = function() {
        return burritoType;
    }

    this.setBurritoType = function(burritoTypeIn) {
        burritoType = burritoTypeIn;
    }

    this.getRiceType = function() {
        return riceType;
    }

    this.setRiceType = function(riceTypeIn) {
        riceType = riceTypeIn;
    }

    this.getBeanType = function() {
        return beanType;
    }

    this.setBeanType = function(beanTypeIn) {
        beanType = beanTypeIn;
    }

    this.getSalsaTypes = function() {
        return salsaTypes;
    }

    this.setSalsaTypes = function(salsaTypesIn) {
        salsaTypes = salsaTypesIn;
    }

    this.getGuacamoleIsTrue = function() {
        return guacamoleIsTrue;
    }

    this.setGuacamoleIsTrue = function(guacamoleIsTrueIn) {
        guacamoleIsTrue = guacamoleIsTrueIn;
    }

    this.getBurritoId = function() {
        return burritoId;
    }

    this.setBurritoId = function(burritoIdIn) {
        burritoId = burritoIdIn;
    }

    this.getBurritoId = function() {
        return burritoId;
    }

    this.setSalsaPicoDeGalloIsTrue = function(salsaPicoDeGalloIsTrueIn) {
        salsaPicoDeGalloIsTrue = salsaPicoDeGalloIsTrueIn;
    }

    this.getSalsaPicoDeGalloIsTrue = function() {
        if (salsaPicoDeGalloIsTrue) {
            salsaPicoDeGalloIsTrue = "Pico De Gallo, ";
        } else {
            salsaPicoDeGalloIsTrue = "";
        }
        return salsaPicoDeGalloIsTrue;
    }

    this.setSalsaRoastedCornIsTrue = function(salsaRoastedCornIsTrueIn) {
        salsaRoastedCornIsTrue = salsaRoastedCornIsTrueIn;
    }

    this.getSalsaRostedCornIsTrue = function() {
        if (salsaRoastedCornIsTrue) {
            salsaRoastedCornIsTrue = "Roasted Corn, ";
        } else {
            salsaRoastedCornIsTrue = "";
        }
        return salsaRoastedCornIsTrue;
    }

    this.setSalsaGreenTomatilloIsTrue = function(salsaGreenTomatilloIsTrueIn) {
        salsaGreenTomatilloIsTrue = salsaGreenTomatilloIsTrueIn;
    }

    this.getSalsaGreenTomatilloIsTrue = function() {
        if (salsaGreenTomatilloIsTrue) {
            salsaGreenTomatilloIsTrue = "Green Tomatillo, ";
        } else {
            salsaGreenTomatilloIsTrue = "";
        }
        return salsaGreenTomatilloIsTrue;
    }

    this.setSalsaRedTomatilloIsTrue = function(salsaRedTomatilloIsTrueIn) {
        salsaRedTomatilloIsTrue = salsaRedTomatilloIsTrueIn;
    }

    this.getSalaRedTomatilloIsTrue = function() {
        if (salsaRedTomatilloIsTrue) {
            salsaRedTomatilloIsTrue = "Red Tomatillo, ";
        } else {
            salsaRedTomatilloIsTrue = "";
        }
        return salsaRedTomatilloIsTrue;
    }

    this.calculateCostOfSingleBurrito = function() {
        var subTotal = 0;

        if (burritoType == "chicken") {
            subTotal = PRICE_FOR_CHICKEN;
        }

        if (burritoType == "steak") {
            subTotal = PRICE_FOR_STEAK;
        }

        if (burritoType == "carnitas") {
            subTotal = PRICE_FOR_CARNITAS;
        }

        if (burritoType == "barbacoa") {
            subTotal = PRICE_FOR_BARBACOA;
        }

        if (burritoType == "vegetarian") {
            subTotal = PRICE_FOR_VEGETARIAN;
        }
        if (guacamoleIsTrue) {
            subTotal = subTotal + UPCHARGE_FOR_GUACAMOLE;
        }

        return subTotal;
    }

}
