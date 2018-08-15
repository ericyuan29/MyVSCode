/*
meal maker project:
As a frequent diner, you love trying out new restaurants and experimenting with different foods.
However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.
In this project, you'll use JavaScript to randomly create a three-course meal based on what is available on a menu. We'll keep running it until we're satisfied with the generated meal!
*/

const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],

        get appetizers() {

        },
        set appetizers(appetizersIn) {

        },

        get mains() {

        },
        set mains(mainsIn) {

        },

        get desserts() {

        },
        set desserts(dessertsIn) {

        }
    },

    get course() {
        return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.desserts
    },

    addDishToCourse (courseName, dishName, dishPrice) {
        let dish = {
            name: 
        }
        this.courses[courseName].push(dish);
    }

    getRandomDishFromCourse (courseName) {
        
    }
}