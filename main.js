const createDoctor = (name, specialty, address) => ({
    "name": name,
    "specialty": specialty,
    "address": address
})

const createPet = (name, breed) => ({
    "name": name,
    "breed": breed
})

let BowWowKennels = []

let pet1 = createPet("fluffy","miniature pomeranian")
let pet2 = createPet("max","black lab")
let pet3 = createPet("duke","yellow lab")

BowWowKennels.push(pet1,pet2,pet3)

console.log(BowWowKennels)
