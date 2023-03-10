//Q1 : write a program that takes an array of object containing "name" and age properties and return a new array of objects containing only the names of the people who are 18 years old

// let people=[
//     {
//         name:"shahbaz",
//         age:25
//     },
//     {
//         name:"aban",
//         age:10
//     },
//     {
//         name:"abc",
//         age:20
//     },
//     {
//         name:"xyz",
//         age:18
//     }
// ]

// function ageLimit(people,age){
//     let newArray=[];
//     for(let i=0;i<people.length;i++){
//         if(people[i].age >= age){

//             newArray.push(people[i].name)

//         }
//     }return newArray;
// }

// console.log(ageLimit(people,18))


//Q2: write a function that takes an array of objects containing "title" ,"artist" and "year " properties
// and return the title of the album the earliest release yaer


// let array=[
//     {
//         title:"title1",
//         artist:"abc1",
//         year:"2001"
//     },
//     {
//         title:"title2",
//         artist:"abc2",
//         year:1990

//     },
//     {
//         title:"title3",
//         artist:"abc3",
//         year:2005
//     },
//     {
//         title:"title4",
//         artist:"abc4",
//         year:1995
//     }
// ]

// function findEarliest(array,year){

//     let earliest=[];
//     for(let i=0;i<array.length;i++){
//         if(array[i].year<year){
//             earliest.push(array[i].title)
//         }
//     }return earliest;
// }

// console.log(findEarliest(array,2000));

//Q3 Write a function that takes an array of objects containing name and score properties, and returns the name of the person with the highest score.

// let person=[
//     {
//         name:"shahbaz",
//         score:20
//     },
//     {
//         name:"abc",
//         score:30
//     },
//     {
//         name:"xyz",
//         score:40
//     },
//     {
//         name:"shahbaz ramzan",
//         score:50
//     }

// ]

// function findHighestScore(person){
//     let highestScore=[];
//     let highestPerson=[];

//     for(let i=0;i<person.length;i++){
//         if(person[i].score > highestScore){
//             highest=person[i].score
//             highestPerson=person[i].name
//         }
//     }return highestPerson
// }

// console.log(findHighestScore(person));

