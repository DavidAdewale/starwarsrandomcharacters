'use strict';


const name1 = document.getElementById('name');
const gender = document.getElementById('gender');
const dob = document.getElementById('dob');
const height = document.getElementById('height');
const hairColor = document.getElementById('hairColor');
const skin =document.getElementById('skin');
const generateButton = document.getElementById('generate');

generateButton.addEventListener('click', (e) => {
    e.preventDefault()
    
            name1.innerHTML = '<em> Loading...</em>'
            gender.innerHTML = '<em> Loading...</em>'
            dob.innerHTML = '<em> Loading...</em>'
            height.innerHTML = '<em> Loading...</em>'
            hairColor.innerHTML = '<em> Loading...</em>'
            skin.innerHTML = '<em> Loading...</em>'

    const randomCharacter = Math.ceil(Math.random() * 83)
    fetch(`https://swapi.dev/api/people/${randomCharacter}`)
    .then(response => response.json())
    .then(data => {

            // console.log(data);
            name1.innerHTML = data.name;
            gender.innerHTML = `Gender: ${data.gender}`;
            dob.innerHTML = `DOB: ${data.birth_year}`;
            height.innerHTML = `Height: ${data.height}`;
            hairColor.innerHTML = `Hair Color: ${data.hair_color}`;
            skin.innerHTML = `Skin Color: ${data.skin_color}`;
        })
    })




// generateButton.addEventListener('click', () => {
    
//     fetch('https://swapi.dev/api/people')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             const randomCharacter = data.results[Math.floor(Math.random() * data.results.length)];
//             name1.innerText = randomCharacter.name;
//             gender.innerText = `Gender: ${randomCharacter.gender}`;
//             dob.innerText = `DOB: ${randomCharacter.birth_year}`;
//             height.innerText = `Height: ${randomCharacter.height}`;
//             hairColor.innerText = `Hair Color: ${randomCharacter.hair_color}`;
//             skin.innerText = `Skin Color: ${randomCharacter.skin_color}`;
//         })
//         .catch(error => console.log(error));
// });

