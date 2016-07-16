"use strict";
var User = (function () {
    function User(id, firstName, lastName, emailAddress, phoneNumber, department) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
        this.department = department;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map