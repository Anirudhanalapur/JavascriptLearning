"use strict"

function WaterTracker(goal) {
/* 
    > track water consumption for particular day
    > Add water consumption to the perticular for current day
    > Handle incorrect additions by clearning water inputs
    > Set Goal tracker and restrict adding the water usage to tracker
    > reset
*/
    this.consumptionArray = [];
    this.waterTracker = {
        add: (args) => {
            const dateDetails = prepareDateObject();
            this.consumptionArray.push({dateDetails, compumtion: args})
            console.log(this.consumptionArray);
        },
        remove: function () {

        },

        setGoal: function(args) {
            this.waterConsumptionGoal = args; 
        }
    }
    return this.waterTracker;
}

function prepareDateObject() {
    return {
        date: new Date().getDate(),
        day: new Date().toLocaleDateString("en-US", { weekday: "long" }),
        month: new Date().toLocaleDateString("en-US", { month: "long" })
    }
}

const getInstance = new WaterTracker();

const goalText = document.getElementById('daily_goal');
goalText.innerText = 3000;

const achieved_goal = document.getElementById('achieved_goal');
achieved_goal.innerText = 0;

document.getElementById('add').addEventListener('click', () => {
    const inputField = document.querySelector('.add_input');
    let addedvalue
    if (inputField.style.display !== 'none') {
        addedvalue = +inputField.value
        getInstance.add((addedvalue) || 0);
    }
    if (inputField.style.display === 'none') {
        inputField.style.display = 'inline';
    } else {
        inputField.style.display = 'none';
    }
    if(addedvalue) {
        achieved_goal.innerText = (+achieved_goal.innerText) + addedvalue;
    }
});


document.getElementById('setGoal').addEventListener('click', () => {
    const inputField = document.querySelector('.set_goal');
    if (inputField.style.display !== 'none') {
        getInstance.setGoal((+inputField.value) || 3000);
    }
    if (inputField.style.display === 'none') {
        inputField.style.display = 'inline';
    } else {
        inputField.style.display = 'none';
    }
    if(getInstance.waterConsumptionGoal) {
        goalText.innerText = getInstance.waterConsumptionGoal;
    }

});
       
