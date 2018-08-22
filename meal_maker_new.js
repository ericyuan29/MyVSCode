/*
meal maker project:
As a frequent diner, you love trying out new restaurants and experimenting with different foods.
However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.
In this project, you'll use JavaScript to randomly create a three-course meal based on what is available on a menu. We'll keep running it until we're satisfied with the generated meal!
*/

const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],

    set appetizers(appetizersIn) {
      this._appetizers = appetizersIn;
    },
    get appetizers() {
      return this._appetizers;
    },
    set mains(mainsIn) {
      this._mains = mainsIn;
    },
    get mains() {
      return this._mains;
    },
    set desserts(dessertsIn) {
      this._desserts = dessertsIn;
    },
    get desserts() {
      return this._desserts;
    },
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
  },

  addDishToCourse (courseName, dishName, dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice,
    };
    // [courseName] call app/mains.. is a parameter
    this._courses[courseName].push(dish);

  },

  getRandomDishFromCourse (courseName) {
    let dishes = this._courses[courseName];
    let index = Math.floor(Math.random() * dishes.length);
    return dishes[index];
  },
  generateRandomMeal () {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    let totalPrice = appetizer.price + main.price + dessert.price;
    return `appetizer is ${appetizer.name}, main is ${main.name}, dessert is ${dessert.name}, total ${totalPrice}`;
  },
}

menu.addDishToCourse('appetizers', 'salad', 5);
menu.addDishToCourse('appetizers', 'salad 2',6);
menu.addDishToCourse('mains', 'rice', 10);
menu.addDishToCourse('mains', 'noodle', 12);
menu.addDishToCourse('desserts', 'cake', 2);
menu.addDishToCourse('desserts', 'tea', 3);

let meal = menu.generateRandomMeal();
console.log(meal)
