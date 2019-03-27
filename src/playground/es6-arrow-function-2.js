const add = (a, b) => {
    return a + b;
};
console.log(add(40, 299));

const user = {
    name: 'Thomas',
    cities: ['Lisbon', 'Madrid', 'Singapore'],
    printPlacesLived() {
    const cityMessages = this.cities.map((city) => {
        return(city);
    })
    return cityMessages;
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [3, 5, 10],
    multiplyBy: 10,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())