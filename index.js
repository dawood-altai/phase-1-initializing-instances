class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }
  
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  class Dinner {
    #dessert;
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.#dessert = dessert;
    }
    
    get dessert() {
    
      return this.#dessert;
    }
  }
  

  const breakfast = new Breakfast('Toast', 'Coffee');
console.log(breakfast.food); 
console.log(breakfast.drink); 

const lunch = new Lunch('Caesar Salad', 'Tomato Soup', 'Iced Tea');
console.log(lunch.salad); 
console.log(lunch.soup); 
console.log(lunch.drink);

const dinner = new Dinner('Greek Salad', 'Chicken Soup', 'Grilled Salmon', 'Chocolate Cake');
console.log(dinner.salad); 
console.log(dinner.soup); 
console.log(dinner.entree); 
console.log(dinner.dessert); 
