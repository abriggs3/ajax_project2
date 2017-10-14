var burritosOrdered = [];
var totalOrderCost = 0;
var burritoId = 0;

function init() {
    var btnAddBurritoToOrder = document.getElementById("btnAddBurritoToOrder");
    btnAddBurritoToOrder.addEventListener("click", addBurritoToOrder, false);
}

var addBurritoToOrder = function () {
    // following section get the user entered values from the form
    var burritoTypeSelect = document.getElementById("burritoTypeSelect").value;
    var radioBtnRiceSelect = document.querySelector('input[name = "radioBtnRiceSelect"]:checked').value;
    var radioBtnBeanSelect = document.querySelector('input[name = "radioBtnBeanSelect"]:checked').value;
    var chooseSalsa = document.getElementsByName("chooseSalsa");
    var addGuacamole = document.getElementById("addGuacamole").checked;

    // next section creates a burrito object and sets its values with the form data
    var newBurrito = new Burrito();
    newBurrito.setBurritoType(burritoTypeSelect);
    newBurrito.setRiceType(radioBtnRiceSelect);
    newBurrito.setBeanType(radioBtnBeanSelect);

    // a hacky way to do the job
    newBurrito.setSalsaPicoDeGalloIsTrue(chooseSalsa[0].checked);
    newBurrito.setSalsaRoastedCornIsTrue(chooseSalsa[1].checked);
    newBurrito.setSalsaGreenTomatilloIsTrue(chooseSalsa[2].checked);
    newBurrito.setSalsaRedTomatilloIsTrue(chooseSalsa[3].checked);

//  newBurrito.setSalsaTypes(salsaChoicesArray);
    newBurrito.setGuacamoleIsTrue(addGuacamole);
    newBurrito.setBurritoId(burritoId);
    burritosOrdered.push(newBurrito);
    burritoId++;

    displayCurrentOrder();

    calculateOrderTotal();

    displayOrderTotal();

}


var displayCurrentOrder = function() {
    var displayDivMain = document.getElementById("displayDivMain");
    // if the display for burritos ordered has content get rid of the old stuff
    if (displayDivMain.innerHTML.value != "") {
        displayDivMain.innerHTML = "";
    }
    // display the summary for each burrito ordered
    for (var index = 0; index < burritosOrdered.length; index++) {
        // add the id to the div if the slot at that index is not empty
        if (typeof burritosOrdered[index] != "undefined") {
            // create the div for displaying each burrito
            var displayDivIndividualBurrito = document.createElement("div");
            // give the div an id, so that it can be deleted by user if nessessary
            var indexOfBurritoToDelete = burritosOrdered[index].getBurritoId();
            displayDivIndividualBurrito.id = "burritoDisplayDiv" + indexOfBurritoToDelete;
            // display the burrito details to user
            var h3Tag = document.createElement("h3");
            h3Tag.appendChild(document.createTextNode("Your Burrito - price $" + burritosOrdered[index].calculateCostOfSingleBurrito().toFixed(2)));
            displayDivIndividualBurrito.appendChild(h3Tag);
            var pTag = document.createElement("p");
            pTag.appendChild(document.createTextNode(burritosOrdered[index].getBurritoType() + " with " +  burritosOrdered[index].getRiceType() + ", " + burritosOrdered[index].getBeanType()));
            displayDivIndividualBurrito.appendChild(pTag);
            // add guacamole to list if selected
            if (burritosOrdered[index].getGuacamoleIsTrue()) {
                pTag.appendChild(document.createTextNode(" and guacamole"));
            }

            // create list the salsas choosen
            var salsaList = burritosOrdered[index].getSalsaPicoDeGalloIsTrue()
                + burritosOrdered[index].getSalsaRostedCornIsTrue()
                + burritosOrdered[index].getSalsaGreenTomatilloIsTrue()
                + burritosOrdered[index].getSalaRedTomatilloIsTrue();
            var pTag2 = document.createElement("p");


            /*
                  var currentBurritoToDisplay = burritosOrdered[index];
                  for (var index2 = 0; index2 < currentBurritoToDisplay.getSalsaTypes().length; index2++) {
            console.log("this is the length of salsaType " + currentBurritoToDisplay.getSalsaTypes().length);
            console.log("this checkbox " + currentBurritoToDisplay.getSalsaTypes()[index2] + " has the value of " + currentBurritoToDisplay.getSalsaTypes()[index2].checked + " this is the index " + index);
                    if (currentBurritoToDisplay.getSalsaTypes()[index2]) {
                      var currentSalsa = currentBurritoToDisplay.getSalsaTypes()[index2].value;
                        salsaList = salsaList + currentSalsa + ", ";
                    }
                  }
            */
            // if the list of salsas is not blank, show the on web page
            if (salsaList != "") {
                // remove comma from list
                salsaList = salsaList.substring(0, salsaList.length - 2);
                pTag2.appendChild(document.createTextNode("Salsas selected: " + salsaList));
            } else {
                pTag2.appendChild(document.createTextNode("Salsas selected: none"));
            }
            displayDivIndividualBurrito.appendChild(pTag2);

            // add a delete button
            var deleteButton = document.createElement("input");
            deleteButton.type = "button";
            deleteButton.value = "remove from order";
            deleteButton.id = indexOfBurritoToDelete;
            deleteButton.addEventListener("click", removeBurritoFromOrder, false);
            displayDivIndividualBurrito.appendChild(deleteButton);

            var hrTag = document.createElement("hr");
            displayDivIndividualBurrito.appendChild(hrTag);
            // add individual Burrito display list
            displayDivMain.appendChild(displayDivIndividualBurrito);
            // add list of burritos to page
            document.body.appendChild(displayDivMain);
        }
    }
}

var removeBurritoFromOrder =  function() {
    var burritoToDelete = document.getElementById("burritoDisplayDiv" + this.value);
    // remove the burrito to delete from the array of burritos ordered
    delete burritosOrdered[this.id];
    displayCurrentOrder();
    // recaculate total order cost
    calculateOrderTotal();
    // reprint display of total cost
    displayOrderTotal();
}

var displayOrderTotal = function() {
    // if the total is showing remove it
    if (document.getElementById("orderTotalDiv") != null) {
        var orderTotalDiv = document.getElementById("orderTotalDiv");
        orderTotalDiv.parentNode.removeChild(orderTotalDiv);
    }
    // make new total for display
    var displayDivOrderTotal = document.createElement("div");
    displayDivOrderTotal.id = "orderTotalDiv";
    var h2Tag = document.createElement("h2");
    h2Tag.appendChild(document.createTextNode("Order Total: $" + totalOrderCost.toFixed(2)));
    displayDivOrderTotal.appendChild(h2Tag);
    document.body.appendChild(displayDivOrderTotal);

    var btnSubmitOrder = document.createElement("input");
    btnSubmitOrder.type = "submit";
    btnSubmitOrder.value = "submit your order";
    displayDivOrderTotal.appendChild(btnSubmitOrder);
}

var calculateOrderTotal = function() {
    totalOrderCost = 0;
    for (var index = 0; index < burritosOrdered.length; index++) {
        if (typeof burritosOrdered[index] != "undefined") {
            totalOrderCost = totalOrderCost + burritosOrdered[index].calculateCostOfSingleBurrito();
        }
    }
    return totalOrderCost;
}
