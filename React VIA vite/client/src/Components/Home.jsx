import Book from "./Book";
import "./Home.css";

const Home = () => {
  const bookdata = [
    {
      image: "",
      title: "Reactjs",
      price: 527,
    },
    {
      image: "",
      title: "Nodejs",
      price: 469,
    },
    {
      image: "",
      title: "Expressjs",
      price: 999,
    },
  ];

  return (
    <div className="Home">
      <h1>Home Page</h1>

      <div className="book-container">
        {bookdata.map((book, index) => (
          <Book
            key={index}
            image={book.image}
            title={book.title}
            price={book.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
