/*
meal maker project:
As a frequent diner, you love trying out new restaurants and experimenting with different foods.
However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.
In this project, you'll use JavaScript to randomly create a three-course meal based on what is available on a menu. We'll keep running it until we're satisfied with the generated meal!
*/

const menu = {
    //This property will ultimately contain a mapping between each course and the dishes available to order in that course.
    _courses = {
        appetizer: [],
        mains: [],
        desserts: [],

        set appetizer(appetizerIn) {},

        get appetizer() {},

        set mains(mainsIn) {},

        get mains() {},

        set desserts(dessertsIn) {},

        get desserts() {}
    },

    get courses() {
        // return an object that contains key/value pairs for appetizers, mains, and desserts.
        return {
            appetizer: this._courses.appetizer,
            mains: this._courses.mains,
            desserts: this._courses.desserts
        }
    },
    // Inside the menu create a method called .addDishToCourse(), used to add a new dish to the specified course on the menu.
    // method three parameters: the courseName, the dishName , and the dishPrice.
    addDishToCourse (courseName, dishName, dishPrice) {
        // The .addDishToCourse() method should create an object called dish which has a name and price which it gets from the parameters.
        // The method should then push this dish object into the appropriate array in your menu's _courses object based on what courseName was passed in.
        const dish = {
            courseName:,
            dishName:,
            dishPrice
        }
        this._courses[courseName].push(dish);
    }

};
