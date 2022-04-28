import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// Vars Setup
import { books } from "./books";
import SpecialBook from "./Book";
// const names = ["john", "peter", "susan"];
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        // const { img, title, author } = book;
        return <SpecialBook key={book.id} {...book}></SpecialBook>;
      })}
    </section>
  );
}

// const BookImage = () => {
//   return (

//   );
// };
// const BookTitle = () => {
//   return <h2>Welcome to the Universe in 3D: A Visual Tour</h2>;
// };
// const BookAuthor = () => {
//   return (

//   );
// };
// function Greeting(){
//   return (
//   <div>
//     <Person/>
//     <Message/>
//   </div>
//     );
// }
// const Person=()=><h1>john Doe</h1>; //inlicit return
// const Message=()=>{ //Exlicit Return
//   return <p>This is Message</p>
// }
// const Greeting=()=>{
//   return React.createElement('div',{},React.createElement('h1',{},'Hello World'))
// }
createRoot(document.getElementById("root")).render(<BookList />);
