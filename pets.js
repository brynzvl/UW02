let pets = ['hamster', 'dog', 'cat', 'fish', 'rabbit'];
let saying = pets.join(', '); {

    console.log(pets);

    pets.push('snake');
    console.log(pets);

    pets.splice(2, 2);
    console.log(pets);

    let saying = pets.join(', '); {
        console.log(saying);

    }
}
