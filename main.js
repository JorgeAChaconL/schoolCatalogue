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

    quickFacts(){
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }

    static pickSubstituteTeacher(substitudeTeacher){
        substitudeTeacher = ['Teacher1', 'Teacher2', 'Teacher3', 'Teacher4', 'Teacher5'];
        let randomTeacherSelect = Math.floor(Math.random() * substitudeTeacher.length);
        console.log(substitudeTeacher[randomTeacherSelect]);
        return substitudeTeacher[randomTeacherSelect];
    }
}


