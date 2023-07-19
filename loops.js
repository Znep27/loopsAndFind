let i = 0

do {
    i += 1
    console.log(i)
} while (i < 100)

const person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}

const arrayOfPersons = [{
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
} , {
    firstName: "John",
    lastName: "Duncan",
    birthDate: "Feb 6, 1998",
    gender: "male"
} , {
    firstName: "Mike",
    lastName: "Hodge",
    birthDate: "Nov 11, 1985",
    gender: "male"
} , {
    firstName: "Mary",
    lastName: "Jane",
    birthDate: "Sep 29, 2005",
    gender: "female"
} , {
    firstName: "Alice",
    lastName: "Campbell",
    birthDate: "Apr 19, 1996",
    gender: "female"
}]

const logKeys = (person) => {
    console.log(Object.keys(person))
}

logKeys(person)

const logEntries = (person) => {
    console.log(Object.entries(person))
}

logEntries(person)

const oddYear = (arrayOfPersons) => {
    let year = 0
    for (let value of arrayOfPersons) {
        year = parseInt(value.birthDate.slice(-4))
        if (year % 2 != 0) {
            console.log(value.birthDate)
        }
    }
}
oddYear(arrayOfPersons)

const males = arrayOfPersons.filter(male => male.gender == 'male')
console.log(males)

const bornBefore = (born) => {
    let year = parseInt(born.birthDate.slice(-4))
    if (year < 1990) {
        return true
    } else {
        return false
    }
}

let older = arrayOfPersons.filter(born => bornBefore(born) == true)
console.log(older)
