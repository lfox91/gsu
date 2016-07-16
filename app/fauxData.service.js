"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var users = [
            {
                id: 1,
                firstName: 'Lea',
                lastName: 'Fox',
                emailAddress: 'lsfox91@gmail.com',
                phoneNumber: '3109560911',
                department: 'funTimes'
            },
        ];
        return { users: users };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=fauxData.service.js.map