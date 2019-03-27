const isAdult = (age) => {
    if(age >= 18) {
        console.log('Cangrats, you are an adult')
    } else {
        console.log('BOO YOU ARE A CHILD')
    }
};

const canDrink = (age) => {
    if(age >= 18) {
        console.log('YOU CAN DRINK. lets go out')
    } else {
        console.log('you cant drink')
    }
};

export {isAdult, canDrink};