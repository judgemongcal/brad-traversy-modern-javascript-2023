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

class App{
    constructor() {
        this._tracker = new CalorieTracker();

        document.querySelector('#meal-form').addEventListener('submit', this._newMeal.bind(this));
        document.querySelector('#workout-form').addEventListener('submit', this._newWorkout.bind(this));
    }

    _newMeal(e) {
        e.preventDefault();

        const name = document.querySelector('#meal-name');
        const calories = document.querySelector('#meal-calories');

        // Validate Inputs
        if(name.value === '' || calories.value === '') {
            alert('Please fill in all fields.');
            return;
        } 

        const meal = new Meal(name.value, +calories.value);

        this._tracker.addMeal(meal);

        name.value = '';
        calories.value = '';

        const collapseMeal = document.querySelector('#collapse-meal');
        const bsCollapse = new bootstrap.Collapse(collapseMeal, { toggle: true});
    }

    _newWorkout(e) {
        e.preventDefault();

        const name = document.querySelector('#workout-name');
        const calories = document.querySelector('#workout-calories');

        if(name.value === '' || calories.value === '') {
            alert('Please fill in all fields.');
            return;
        }

        const workout = new Workout(name.value, +calories.value);

        this._tracker.addWorkout(workout);

        name.value = '';
        calories.value = '';

        const collapseWorkout = document.querySelector('#collapse-workout');
        const bsCollapse = new bootstrap.Collapse(collapseWorkout, { toggle: true});
    }
}



const app = new App();