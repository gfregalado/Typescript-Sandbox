enum Role { ADMIN, READ_ONLY, AUTHOR}

const person = {
    name: "Gonçalo",
    age: 28,
    hobbies: ['Sports', `Photography`],
    role: Role.AUTHOR
}

console.log(person.role)