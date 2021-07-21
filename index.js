// classwork4

// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом
// зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)\
/*class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}


const clients = [new Client(1, 'Pepe', 'Gonsalez', "gsdsd", 1546878, 5),
    new Client(2, 'Paco', 'Gonzales', "la@gmail.com", 5454979763, 4),
    new Client(3, 'Paco', 'Gonzales', "la@gmail.com", 5454979763, 1),
    new Client(9, 'Paco', 'Gonzales', "la@gmail.com", 5454979763, 2),
    new Client(18, 'Paco', 'Gonzales', "la@gmail.com", 5454979763, 10),
    new Client(15, 'Paco', 'Gonzales', "la@gmail.com", 5454979763, 15),
    new Client(55, 'Paco', 'Gonzales', "la@gmail.com", 5454979763, 1),
    new Client(97, 'Paco', 'Gonzales', "la@gmail.com", 5454979763, 3),
    new Client(51, 'Paco', 'Gonzales', "la@gmail.com", 5454979763, 9),
    new Client(6, 'Paco', 'Gonzales', "la@gmail.com", 5454979763, 6)
]

let sor = clients.sort((a, b) => a.id - b.id);
console.log(sor);*/


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його
// в поточний об'єкт car

/*function Cars (model, producer, year, max_speed, value, specification1, specification2 ,specification3,specification4,specification5, specification6)
{
this.model = model;
this.producer = producer;
this.year = year;
this.max_speed = max_speed;
this.value = value;
this.specification1 = drive;
this.specification2 = info;
this.specification3 = increaseMaxSpeed ;
this.specification4 = changeYear;
this.specification5 = addDriver;}

let plusspeed = 30;
let plusvalue = 2014;
let drive = function (){console.log('їдемо зі швидкістю {максимальна швидкість} на годину')};
let info = function (){console.log(this.model, this.producer,this.year,this.max_speed,this.value);
let increaseMaxSpeed = function (){console.log(this.max_speed =plusspeed + this.max_speed)};
let changeYear = function (){console.log(this.year = plusvalue)};
let addDriver =


let car2 = new Cars ("cayen", "italy", "2015", 225, 20,drive,info,increaseMaxSpeed,changeYear,addDriver);
let car2 = new Cars ("cayen", "italy", "2015", 225, 20,drive,info,increaseMaxSpeed,changeYear,addDriver);
let car2 = new Cars ("cayen", "italy", "2015", 225, 20,drive,info,increaseMaxSpeed,changeYear,addDriver);
let car2 = new Cars ("cayen", "italy", "2015", 225, 20,drive,info,increaseMaxSpeed,changeYear,addDriver);
let car2 = new Cars ("cayen", "italy", "2015", 225, 20,drive,info,increaseMaxSpeed,changeYear,addDriver);
*/


/*
- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
 додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car*/
/*class Car {
constructor (model,producer, year, max_speed, value,specification1, specification2, specification3, specification4,specification5)
{this.model = model;
    this.producer = producer;
    this.year = year;
    this.max_speed = max_speed;
    this.value = value;
    this.specification1 = drive;
    this.specification2 = info;
    this.specification3 = increaseMaxSpeed ;
    this.specification4 = changeYear;
    this.specification5 = addDriver}}

let plusspeed = 30;
let plusvalue = 2014;
let drive = function (){console.log('їдемо зі швидкістю {максимальна швидкість} на годину')};
let info = function (){console.log(this.model, this.producer,this.year,this.max_speed,this.value);
    let increaseMaxSpeed = function (){console.log(this.max_speed =plusspeed + this.max_speed)};
    let changeYear = function (){console.log(this.year = plusvalue))};
let addDriver =

class SuperCar extends Car{}
let superCar = new SuperCar ('Cayen','Porsche', 2016, 265, 3, drive, info, increaseMaxSpeed, changeYear, addDriver);
console.log (new SuperCar );
console.log (new SuperCar );
console.log (new SuperCar );
console.log (new SuperCar );*/


/*-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок ,
покласти їх в масив.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
*/

/*class Cinderella {
    constructor(name, age, foot_size) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }
}

let cinda = [
    new Cinderella("Baby", 75, 36),
    new Cinderella("Kitty", 54, 30),
    new Cinderella("Tamara", 24, 40),
    new Cinderella("Baby", 75, 42),
    new Cinderella("Kitty", 54, 39),
    new Cinderella("Tamara", 24, 40),
    new Cinderella("Baby", 75, 42),
    new Cinderella("Kitty", 54, 38),
    new Cinderella("Tamara", 24, 36),
    new Cinderella("Tamara", 24, 40)]

class Prince {
    constructor(name, age, boot_size) {
        this.name = name;
        this.age = age;
        this.boot_size = boot_size;
    }

    // findPrincess = (cinda) => {
    //     for (let princess of cinda) {
    //         if (princess.foot_size === kitty.boot_size) {
    //             console.log(`Принц знайшов свою принцессу ${princess.name}`);
    //             break;
    //         }
    //     }
    // }
    findPrincess = (cinda) => {
        let princess = cinda.find(princess => princess.foot_size === this.boot_size);
        console.log(`Принц знайшов свою принцессу ${princess.name}`);
    }

}

let kitty = new Prince("Kitty", 54, 36)
let kity = new Prince("Kitty", 54, 38)

kitty.findPrincess(cinda)
kity.findPrincess(cinda)*/




