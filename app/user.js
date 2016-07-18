"use strict";
var User = (function () {
    function User(id, firstName, lastName, emailAddress, reason, startDate, endDate, submissionStatus) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.reason = reason;
        this.startDate = startDate;
        this.endDate = endDate;
        this.submissionStatus = submissionStatus;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map