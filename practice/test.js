"use strict";
const user = {
    name: 'John',
    surname: 'Doe',
    id: 1,
};
const admin = {
    name: 'John Doe',
    id: 1234,
    role: 'admin'
};
function generateError(msg) {
    throw new Error(msg);
}
var Role;
(function (Role) {
    Role["Admin"] = "admin";
    Role["SuperAdmin"] = "super admin";
    Role["User"] = "user";
})(Role || (Role = {}));
function isAdmin(user) {
    return user.role === Role.Admin;
}
function setSuperAdminRole(user) {
    const newAdmin = {
        name: '',
        id: 0,
        role: '',
    };
    if (isAdmin(user)) {
        return Object.assign(Object.assign({}, newAdmin), { name: admin.name, id: admin.id, role: 'super admin' });
    }
    generateError('Пользователь не админ');
}
setSuperAdminRole(admin);
