// function authorhandler(author) {
//   console.log(author);
// }
const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  return (
    <article
      className="book"
      // onMouseOver={() => {
      //   console.log(title);
      // }}
    >
      <img src={img} alt="" width="300px" height="300px"></img>
      <h2>{title}</h2>
      <h5
      //   onClick={() => authorhandler(author)}
      >
        {author}
      </h5>
    </article>
  );
};
export default Book;
