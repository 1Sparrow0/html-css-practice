// Person Object

const person = {
  name: "Mehran",
  age: 23,
  address: {
    city: "Sanandaj",
    street: "Moalem Bvld",
  },
  hobbies: ["Snooker", "Coding"],
  fullInfo: function () {
    return `${this.name}, ${this.age} Year Old from ${this.address.city}`;
  },
};

console.log(person.fullInfo());
console.log("Keys: ", Object.keys(person));
console.log("Address: ", person.address.street);

// Base Dom

const title = document.getElementById("myTitle");
const description = document.getElementById("description");
const changeBtn = document.getElementById("changeBtn");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

// Changing heading and style

changeBtn.addEventListener("click", () => {
  title.textContent = "Changed Heading";
  title.style.color = "blue";
  title.classList.toggle("highlight");
});

// Adding New Para

addBtn.addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = "New paragraph added from JS";
  newPara.style.fontSize = "18px";
  document.body.appendChild(newPara);
});

// Deleting para

removeBtn.addEventListener("click", () => {
  if (description) {
    description.remove();
  }
});

// Liberary

const library = {
  books: [
    { title: "Book 1", author: "Author 1" },
    { title: "Book 2", author: "Author 2" },
  ],
  addBook: function (title, author) {
    this.books.push({ title, author });
  },
  listBooks: function () {
    this.books.forEach((book) =>
      console.log(`${book.title} Writes by ${book.author}`)
    );
  },
};

library.addBook("Book 3", "Author 3");
library.listBooks();
