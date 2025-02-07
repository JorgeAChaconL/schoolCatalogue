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
        
        let randomTeacherSelect = Math.floor(Math.random() * substitudeTeacher.length);
        console.log(substitudeTeacher[randomTeacherSelect]);
        return substitudeTeacher[randomTeacherSelect];
    }
};

class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickUpPolicy){
        super(name, 'primary', numberOfStudents);
        this._pickUpPolicy = pickUpPolicy;
    }

    get pickUpPolicy(){
        return this._pickUpPolicy;
    }
};

class HighSchool extends School{
    constructor(name, numberOfStudents, sportsTeams){
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    };

    get sportTeams(){
        return this._sportsTeams;
    }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();

School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

