
interface User {
  name: string;
  surname: string;
  id: number;
}

const user: User = {
  name: 'John',
  surname: 'Doe',
  id: 1,
}

interface Admin {
  name: string;
  id: number;
  role: string;
}

const admin: Admin = {
  name: 'John Doe',
  id: 1234,
  role: 'admin'
}

function generateError(msg: string):never {
  throw new Error(msg);
}

enum Role {
  Admin = 'admin',
  SuperAdmin = 'super admin',
  User = 'user',
}


function isAdmin(user: User | Admin): user is Admin {
  return (user as Admin).role === Role.Admin;
}


function setSuperAdminRole(user: User | Admin): Admin {
  const newAdmin: Admin = {
    name: '',
    id: 0,
    role: '',
  }
  if(isAdmin(user)) {
    return {
      ...newAdmin,
      name: admin.name,
      id: admin.id,
      role:'super admin',
    }
  }
  generateError('Пользователь не админ');
}

setSuperAdminRole(admin);


