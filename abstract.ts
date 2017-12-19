abstract class Department {
    constructor(public name: string) {
    }
    printName(): void {
        console.log("Department name: " + this.name);
    }
    abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }
    printMeeting(): void {
        console.log("The Accounting Department generate accounting reports.\n");
    }
}
class DesigningDepartment extends Department {
    constructor() {
        super("Designing and Testing"); // constructors in derived classes must call super()
    }
    printMeeting(): void {
        console.log("The Designing Department design office floor architecture.\n");
    }
}

class DevelopmentDepartment extends Department {
    constructor() {
        super("Development and Programming"); // constructors in derived classes must call super()
    }
    printMeeting(): void {
        console.log("The Development Department create an application, which make life easier.\n");
    }
    
}

let department: Department; // ok to create a reference to an abstract type
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
department = new DesigningDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
department = new DevelopmentDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();