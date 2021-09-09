function cats(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];
    for (let dataCat of arr) {
        let [name, age] = dataCat.split(' ');
        let cat = new Cat(name, age);
        cats.push(cat);
    }

    for (let cat of cats) {
        cat.meow();
    }

}

cats(['Mellow 2', 'Tom 5']);
//Mellow, age 2 says Meow
// Tom, age 5 says Meow
