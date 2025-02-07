class School{
    constructor(name, level, numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name(){
        return this._name;
    };

    get level(){
        return this._level;
    };

    get numberOfStudents(){
        return this._numberOfStudents;
    }

    set numberOfStudents(val){
        if(typeof val === 'number'){
            this._numberOfStudents = val;
        } else {
            console.log(`Invalid Input | numberOfStudents: ${val} must be set to a Number`);
        }
    }
}