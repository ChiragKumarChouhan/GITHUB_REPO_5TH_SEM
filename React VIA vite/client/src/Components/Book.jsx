import bookImage from "../assets/hero.png";
import "./Book.css";

const Book = ({ image, title, price }) => {
  return (
    <div className="Book">
      <img
        src={image || bookImage}
        width={100}
        height={100}
        alt={title}
      />

      <h2>Title: {title}</h2>
      <p>Price: ₹{price}</p>
    </div>
  );
};

export default Book;
