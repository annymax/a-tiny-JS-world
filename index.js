import { print } from "./js/lib.js";
/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const dog = {
  species: "dog",
  name: "Toby",
  gender: "male",
  legs: 4,
  hands: 0,
  saying: "woof-woof!",
  friends: "Marie",
};

const cat = {
  species: "cat",
  name: "Murka",
  gender: "female",
  legs: 4,
  hands: 0,
  saying: "meowwwwwww!",
  friends: 'Cate',
}

/* const cat = {
  species: "cat",
  name: "Murka",
  gender: "female",
  legs: 4,
  hands: 0,
  saying: "meowwwwwww!",
  friends: 'Cate',
}; */

const woman = {
  species: "human",
  name: "Marie",
  gender: "female",
  legs: 2,
  hands: 2,
  saying: "Hello,Kottans!",
  friends: "Toby, Jack, Cate",
};

const man = {
  species: "human",
  name: "Jack",
  gender: "male",
  legs: 2,
  hands: 2,
  saying: "I am happy!",
  friends: "Marie, Cate",
};

const catWoman = Object.create(cat);

catWoman.species = "cat-woman";
catWoman.name = "Cate";
catWoman.gender = "female";
catWoman.friends = "Marie, Murka, Jack";

/*const catWoman = {
  species: "cat-woman",
  name: "Cate",
  gender: "female",
  legs: 2,
  hands: 2,
  saying: cat.saying,
  friends: "Marie, Murka, Jack",
}; */

let inhabitants = [cat, dog, woman, man, catWoman];

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

function printInhabitants(elements) {
  elements.forEach((element) => print(Object.values(element).join("; ")));
}

printInhabitants(inhabitants);
