const firstName = ['Kevin', 'Spot', 'Ryan', 'Dude', 'Shadow', 'Winston', 'Evan', 'Keenan'];
const middleName = ['Sparky', 'Lee', 'Ryan', 'Tiles', 'Fire', 'Joker'];
const lastName = ['Chen', 'Lee', 'Brown', 'Manibo', 'Lauser', 'Spike'];

function generateName() {
    console.log('********Welcome to the Dog Name Gennerator**********')
    console.log('...Generating First name...');
    console.log('..Please Wait...');
    const randomFirstName = firstName[Math.floor(Math.random() * firstName.length ) ]
    console.log('...Generating Middle name...');
    console.log('..Please Wait...');
    const randomMidName = middleName[Math.floor(Math.random() * middleName.length ) ]
    console.log('...Generating Last name...');
        console.log('..Please Wait...');
    const randomLastName = lastName[Math.floor(Math.random() * lastName.length ) ]
    // console.log('Your random dog name is :' + randomFirstName + ' ' + randomMidName + ' ' + randomLastName);
    return randomFirstName + ' ' + randomMidName + ' ' + randomLastName;

}

console.log('Your random pet name is: ' + generateName() + '!');