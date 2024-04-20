class Animal {
    constructor(name,legCount,speaks) {
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    
    speak(){
        console.log("hi there"+this.speaks)
    }

}
let =new Animal("cat",4,"meow");//create  object
let dog=new Animal("dog",4,"bhow bhow"); //call function an object
dog.speak();
