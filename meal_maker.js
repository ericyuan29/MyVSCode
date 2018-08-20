/*
meal maker project:
As a frequent diner, you love trying out new restaurants and experimenting with different foods.
However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.
In this project, you'll use JavaScript to randomly create a three-course meal based on what is available on a menu. We'll keep running it until we're satisfied with the generated meal!
*/

const menu = {
    //This property will ultimately contain a mapping between each course and the dishes available to order in that course.
    _courses: {
        _appetizers: [],
        _mains: [],
        _desserts: [],

        get appetizers() {
            return this._appetizer;
        },
        set appetizers(appetizerIn) {
            this._appetizers = appetizerIn;
        },
        get mains() {
            return this._mains;
        },
        set mains(mainsIn) {
            this._mains = mainsIn;
        },
        get desserts() {
            return this._dessertsIn;
        },
        set desserts(dessertsIn) {
            this._desserts = dessertsIn;
        },
    },

    get courses() {
        // return an object that contains key/value pairs for appetizers, mains, and desserts.
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts
        };
    },
    // Inside the menu create a method called .addDishToCourse(), used to add a new dish to the specified course on the menu.
    // method three parameters: the courseName, the dishName , and the dishPrice.
    addDishToCourse (courseName, dishName, dishPrice) {
        // The .addDishToCourse() method should create an object called dish which has a name and price which it gets from the parameters.
        // The method should then push this dish object into the appropriate array in your menu's _courses object based on what courseName was passed in.
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse (courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;

        return `Your meal is ${appetizer.name}, ${main.name}, ${desserts.name}, total price is $${totalPrice.toFixed(2)}`;
    },

};

menu.addDishToCourse('apperizers', 'salad', 6.25);
menu.addDishToCourse('apperizers', 'salad two', 7.25);
menu.addDishToCourse('mains', 'shrimp', 12.00);
menu.addDishToCourse('mains', 'lobster', 15.00);
menu.addDishToCourse('desserts', 'cake', 2.25);
menu.addDishToCourse('desserts', 'tea', 3.25);

let meal = menu.generateRandomMeal();
console.log(meal);

