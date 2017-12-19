var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department generate accounting reports.\n");
    };
    return AccountingDepartment;
}(Department));
var DesigningDepartment = (function (_super) {
    __extends(DesigningDepartment, _super);
    function DesigningDepartment() {
        return _super.call(this, "Designing and Testing") || this;
    }
    DesigningDepartment.prototype.printMeeting = function () {
        console.log("The Designing Department design office floor architecture.\n");
    };
    return DesigningDepartment;
}(Department));
var DevelopmentDepartment = (function (_super) {
    __extends(DevelopmentDepartment, _super);
    function DevelopmentDepartment() {
        return _super.call(this, "Development and Programming") || this;
    }
    DevelopmentDepartment.prototype.printMeeting = function () {
        console.log("The Development Department create an application, which make life easier.\n");
    };
    return DevelopmentDepartment;
}(Department));
var department; // ok to create a reference to an abstract type
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
department = new DesigningDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
department = new DevelopmentDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
