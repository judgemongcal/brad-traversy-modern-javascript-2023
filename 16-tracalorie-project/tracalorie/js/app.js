// Calorie Tracker Class

class CalorieTracker {
    constructor() {
        this._calorieLimit = Storage.getCalorieLimit();
        this._totalCalories = Storage.getTotalCalories(0);
        this._meals = [];
        this._workouts = [];

        this._displayCalorieLimit();
        this._displayCaloriesTotal();
        this._displayCaloriesConsumed();
        this._displayCaloriesBurned();
        this._displayCaloriesRemaining();
        this._displayCaloriesProgress();
    }

    // Public Methods/ API

    addMeal(meal) {
        this._meals.push(meal);
        this._totalCalories += meal.calories;
        Storage.updateTotalCalories(this._totalCalories);
        this._displayNewMeal(meal);
        this._render();
        };

    addWorkout(workout) {
        this._workouts.push(workout);
        this._totalCalories -= workout.calories;
        Storage.updateTotalCalories(this._totalCalories);
        this._displayNewWorkout(workout);
        this._render();
    };

    removeMeal(id) {
        const index = this._meals.findIndex((meal) => meal.id === id);

        if(index !== -1) {
            const meal = this._meals[index];
            this._totalCalories -= meal.calories;
            Storage.updateTotalCalories(this._totalCalories);
            this._meals.splice(index, 1);
            this._render();
        };
    };

    removeWorkout(id) {
        const index = this._workouts.findIndex((workout) => workout.id === id);

        if(index !== -1){
            const workout = this._workouts[index];
            this._totalCalories += workout.calories;
            Storage.updateTotalCalories(this._totalCalories);
            this._workouts.splice(index, 1);
            this._render();
        };
    };

    reset() {
        if(confirm('You are about to reset all data. Are you sure?')){
            this._totalCalories = 0;
            Storage.updateTotalCalories(this._totalCalories);
            this._meals = [];
            this._workouts = [];
            this._render();
        };
    };

    setLimit(calorieLimit) {
        this._calorieLimit = calorieLimit;
        Storage.setCalorieLimit(calorieLimit);
        this._displayCalorieLimit();
        this._render();
    };

    // Private Methods

    _displayCaloriesTotal() {
        const totalCaloriesEl = document.querySelector('#calories-total');
        totalCaloriesEl.innerText = this._totalCalories;
    };


    _displayCalorieLimit() {
        const calorieLimitEl = document.querySelector('#calories-limit');
        calorieLimitEl.innerText = this._calorieLimit;
        console.log(this._calorieLimit + ' Line 85');
    };

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

        if(calRemaining < 0) {

            div.classList.remove('bg-light');
            div.classList.add('bg-danger');

  
            progressEl.classList.remove('bg-success');
            progressEl.classList.add('bg-danger');
        } else{
            div.classList.remove('bg-danger');
            div.classList.add('bg-add');

            progressEl.classList.remove('bg-danger');
            progressEl.classList.add('bg-success');
        };
    };

    _displayCaloriesProgress() {
        const progressEl = document.querySelector('#calorie-progress');
        const width = (this._totalCalories / this._calorieLimit) * 100;
        progressEl.style.width = width > 0? `${width}%` : `0%`;
    };

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
    };

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
    };

    _render(){
        this._displayCaloriesTotal();
        this._displayCaloriesConsumed();
        this._displayCaloriesBurned();
        this._displayCaloriesRemaining();
        this._displayCaloriesProgress();

    };
};


// Meal Class

class Meal {
    constructor(name, calories) {
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.calories = calories;
    };
};

class Workout {
    constructor(name, calories) {
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.calories = calories;
    };
};


// Storage Class

class Storage {
    static getCalorieLimit(defaultLimit = 2000) {
        let calorieLimit;
        if(localStorage.getItem('calorieLimit') === null) {
            calorieLimit = defaultLimit;
        } else {
            calorieLimit = +localStorage.getItem('calorieLimit');
        };

        return calorieLimit;
    };

    static setCalorieLimit(calorieLimit) {
        localStorage.setItem('calorieLimit', calorieLimit);
    };

    static getTotalCalories(defaultTotal = 2000) {
        let totalCalories;
        if(localStorage.getItem('totalCalories') === null) {
            totalCalories = defaultTotal;
        } else {
            totalCalories = +localStorage.getItem('totalCalories');
        };

        return totalCalories;
    };

    static updateTotalCalories(totalCalories) {
        localStorage.setItem('totalCalories', totalCalories);
    }

};



// App Class

class App{
    constructor() {
        this._tracker = new CalorieTracker();

        document.querySelector('#meal-form').addEventListener('submit', this._newItem.bind(this, 'meal'));
        document.querySelector('#workout-form').addEventListener('submit', this._newItem.bind(this, 'workout'));
        document.querySelector('#meal-items').addEventListener('click', this._removeItem.bind(this, 'meal'));
        document.querySelector('#workout-items').addEventListener('click', this._removeItem.bind(this, 'workout'));
        document.querySelector('#filter-meals').addEventListener('keyup',this._filterItems.bind(this, 'meal'));
        document.querySelector('#filter-workouts').addEventListener('keyup',this._filterItems.bind(this, 'workout'));
        document.querySelector('#reset').addEventListener('click' ,this._reset.bind(this));
        document.querySelector('#limit-form').addEventListener('submit' ,this._setLimit.bind(this));
    };

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
        
    };

    _newWorkout(e) {
        e.preventDefault();

        const name = document.querySelector('#workout-name');
        const calories = document.querySelector('#workout-calories');

        if(name.value === '' || calories.value === '') {
            alert('Please fill in all fields.');
            return;
        }
    };

    _removeItem(type, e) {
        if(e.target.classList.contains('delete') || e.target.classList.contains('fa-xmark')){
         if(confirm(`You are about to delete a ${type} item. Are you sure?`)) {
             const id = e.target.closest('.card').getAttribute('data-id');
 
             type === 'meal'? this._tracker.removeMeal(id) : this._tracker.removeWorkout(id);
 
             e.target.closest('.card').remove();
         }
        } 
     };

     _filterItems(type, e) {
        const text = e.target.value.toLowerCase();
        document.querySelectorAll(`#${type}-items .card`).forEach( item => 
        {
            const name = item.firstElementChild.firstElementChild.textContent.toLowerCase();

            if(name.indexOf(text) !== -1){
                item.style.display = 'block';
            }  else {
                item.style.display = 'none';
            }
        })
     };

     _reset(){
        this._tracker.reset();
        document.querySelector('#meal-items').innerHTML = '';
        document.querySelector('#workout-items').innerHTML = '';
        document.querySelector('#filter-meals').value = '';
        document.querySelector('#filter-workouts').value = '';
     };

     _setLimit(e){
        e.preventDefault();

        const limit = document.querySelector('#limit');

        if(limit.value === '') {
            alert('Please add a limit.');
            return;
        }

        this._tracker.setLimit(+limit.value);
        limit.value ='';

        const modalEl = document.querySelector('#limit-modal');
        const modal = bootstrap.Modal.getInstance(modalEl);
        modal.hide();
     };
};



const app = new App();
