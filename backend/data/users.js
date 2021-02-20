import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@admin.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Aleksa Svilkic",
    email: "aleksa@aleksa.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Vuk Jovanovic",
    email: "vuk@vuk.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
