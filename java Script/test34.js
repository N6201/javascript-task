class Animal {
    constructor(name,legCount,speaks) {
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    static myType(){              //without instance of class of object we call directly a calling it
        console.log("Animal")
    }
    speak(){
        console.log("hi there"+this.speaks)
    }

}
console.log(Animal.myType());


