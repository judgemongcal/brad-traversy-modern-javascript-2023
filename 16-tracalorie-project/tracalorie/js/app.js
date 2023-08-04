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
        this._displayNewMeal(meal);
        this._render();
        };

    addWorkout(workout) {
        this._workouts.push(workout);
        this._totalCalories -= workout.calories;
        this._displayNewWorkout(workout);
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
        progressEl.style.width = width > 0? `${width}%` : `0%`;
        console.log(this._totalCalories);
    }

    _displayNewMeal(meal){
        const mealsEl = document.querySelector('#meal-items');

        const mealEl = document.createElement('div');
        mealEl.classList.add('card', 'my-2');
        mealEl.setAttribute('data-id', meal.id);

        mealEl.innerHTML = `
        <div class="card-body">
        <div class="d-flex align-items-center justify-content-between">
          <h4 class="mx-1">${meal.name}</h4>
          <div
            class="fs-1 bg-primary text-white text-center rounded-2 px-2 px-sm-5"
          >
          ${meal.calories}
          </div>
          <button class="delete btn btn-danger btn-sm mx-2">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
        `;

        mealsEl.appendChild(mealEl);
    }

    _displayNewWorkout(workout){
        const workoutsEl = document.querySelector('#workout-items');

        const workoutEl = document.createElement('div');
        workoutEl.classList.add('card', 'my-2');
        workoutEl.setAttribute('data-id', workout.id);

        workoutEl.innerHTML = `
        <div class="card-body">
        <div class="d-flex align-items-center justify-content-between">
          <h4 class="mx-1">${workout.name}</h4>
          <div
            class="fs-1 bg-secondary text-white text-center rounded-2 px-2 px-sm-5"
          >
            ${workout.calories}
          </div>
          <button class="delete btn btn-danger btn-sm mx-2">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
        `;

        workoutsEl.appendChild(workoutEl);
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

        document.querySelector('#meal-form').addEventListener('submit', this._newItem.bind(this, 'meal'));
        document.querySelector('#workout-form').addEventListener('submit', this._newItem.bind(this, 'workout'));
    }

    _newItem(type, e) {
        e.preventDefault();
        const name = document.querySelector(`#${type}-name`);
        const calories = document.querySelector(`#${type}-calories`);

        // Validate Inputs
        if(name.value === '' || calories.value === '') {
            alert('Please fill in all fields.');
            return;
        }; 

        if(type === 'meal') {
            const meal = new Meal(name.value, +calories.value);
            this._tracker.addMeal(meal);

        } else {

            const workout = new Workout(name.value, +calories.value);
            this._tracker.addWorkout(workout);
        };

        name.value = '';
        calories.value = '';

        const collapseItem = document.querySelector(`#collapse-${type}`);
        const bsCollapse = new bootstrap.Collapse(collapseItem, { toggle: true});
        
    }

    _newWorkout(e) {
        e.preventDefault();

        const name = document.querySelector('#workout-name');
        const calories = document.querySelector('#workout-calories');

        if(name.value === '' || calories.value === '') {
            alert('Please fill in all fields.');
            return;
        }

       
    }
}



const app = new App();