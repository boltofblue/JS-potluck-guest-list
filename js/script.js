// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// variable for button that shows up when the guest list is full 
const assignButton = document.querySelector(".assign");
// variable for the list that will show/display assigned dishes 
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
    const guest = guestInput.value;
   // console.log(guest);
   if (guest !== "") {
    addToList(guest);
    updateGuestCount();
    // const listItem = document.createElement("li");
    // listItem.innerText = guest;
    // guestList.append(listItem);
    clearInput(); // clears input box after adding names
   }
});

// function to clear the input field 
const clearInput = function () {
    guestInput.value = ""; // this sets the value of the guestInput to an empty string
};

const addToList = function(guest) {
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
}

const updateGuestCount = function () {
    const guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length;
    if (guests.length === 8) {
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        // remove hide class 
        guestFull.classList.remove("hide");
    }
};

const assignItems = function () {
    const potluckItems = [
        "mashed potatoes",
        "chili",
        "waldorf salad",
        "chicken salad",
        "baked beans",
        "carrot cake",
        "deviled eggs",
        "garlic bread",
        "green bean casserole",
        "cornbread",
        "roast chicken",
        "chips and salsa"
    ];

    const allGuests = document.querySelectorAll(".guest-list li");
    for (let guest of allGuests) {
        let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
        let randomPotluckItem = potluckItems[randomPotluckIndex];

        let listItem = document.createElement("li");
        listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
        assignedItems.append(listItem);
        potluckItems.splice(randomPotluckIndex, 1);
    } 
};

    assignButton.addEventListener("click", function() {
        assignItems();
        assignButton.disabled = true;
    });
    