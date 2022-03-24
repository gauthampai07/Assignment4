class Animal{
    eat()
    {
        console.log("eating food");
    }
    
} 
class Pig extends Animal{
    drink()
    {
    console.log("Drinking water ");   
    }
}

const p = new Pig();
p.eat();