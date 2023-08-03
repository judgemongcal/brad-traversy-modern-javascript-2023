class CalorieTracker {
    constructor() {
        this._calorieLimit = 2000;
        this._totalCalories = 0;
        this._meals = [];
        this._workouts = [];

        this._displayCalorieLimit;
        this._displayCaloriesTotal;
        this._displayCaloriesConsumed();
        this._displayCaloriesBurned();
        this._displayCaloriesRemaining();
        this._displayCaloriesProgress();
    }

    // Public Methods/ API

    addMeal(meal) {
        this._meals.push(meal);
        this._totalCalories += meal.calories;
        this._render();
        };

    addWorkout(workout) {
        this._workouts.push(workout);
        this._totalCalories -= workout.calories;
        this._render();
    };

    // Private Methods



    _displayCaloriesTotal() {
        const totalCaloriesEl = document.querySelector('#calories-total');
        totalCaloriesEl.innerText = this._totalCalories;
    };


    _displayCalorieLimit() {
        const calorieLimitEl = document.querySelector('#calories-limit');
        calorieLimitEl.innerHTML = this._calorieLimit;
    }

    _displayCaloriesConsumed() {
        const caloriesConsumedEl = document.querySelector('#calories-consumed');
        // let calConsumed = 0;
        // for(let x = 0; x < this._meals.length; x++){
        //     calConsumed += this._meals[x].calories;
        // };

        const calConsumed = this._meals.reduce((total, meal) => total + meal.calories, 0);

        caloriesConsumedEl.innerText = calConsumed;

    };

    _displayCaloriesBurned() {
        const caloriesBurnedEl = document.querySelector('#calories-burned');
        // let calBurned = 0;
        // for(let x = 0; x < this._workouts.length; x++){
        //     calBurned += this._workouts[x].calories;
        // }

        const calBurned = this._workouts.reduce((total, workout) => total + workout.calories, 0);
        caloriesBurnedEl.innerText = calBurned;

    };

    _displayCaloriesRemaining() {
        const caloriesRemainingEl = document.querySelector('#calories-remaining');
        const progressEl = document.querySelector('#calorie-progress');
        const calRemaining = this._calorieLimit - this._totalCalories;
        caloriesRemainingEl.innerText = calRemaining;
        const div = caloriesRemainingEl.parentElement.parentElement;
        if(calRemaining <= 0) {

            div.classList.remove('bg-light');
            div.classList.add('bg-danger');

  
            progressEl.classList.remove('bg-success');
            progressEl.classList.add('bg-danger');
        } else{
            div.classList.remove('bg-danger');
            div.classList.add('bg-add');

            progressEl.classList.remove('bg-danger');
            progressEl.classList.add('bg-success');
        }
    };

    _displayCaloriesProgress() {
        const progressEl = document.querySelector('#calorie-progress');
        const width = (this._totalCalories / this._calorieLimit) * 100;
        progressEl.style.width = `${width}%`;
    }

    _render(){
        this._displayCaloriesTotal();
        this._displayCaloriesConsumed();
        this._displayCaloriesBurned();
        this._displayCaloriesRemaining();
        this._displayCaloriesProgress();
    };
};

class Meal {
    constructor(name, calories) {
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.calories = calories;
    }
};

class Workout {
    constructor(name, calories) {
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.calories = calories;
    }
};

const tracker = new CalorieTracker();

const breakfast = new Meal('Egg', 2000);
const snack = new Meal('Brownie', 300);
tracker.addMeal(breakfast);
tracker.addMeal(snack);

const run = new Workout('Morning Run', 100);
const lift = new Workout('Strength Training', 300);
tracker.addWorkout(run);
tracker.addWorkout(lift);

console.log(tracker._meals);
console.log(tracker._workouts);
console.log(tracker._totalCalories);

const CEL = document.querySelector('#calories-remaining');
console.log(CEL.parentElement.parentElement);

