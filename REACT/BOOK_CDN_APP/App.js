import Book from "./Book";

function App() {
  return React.createElement(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
      },
    },
    React.createElement(Book),
    React.createElement(Book),
    React.createElement(Book),
    React.createElement(Book),
    React.createElement(Book),
    React.createElement(Book),
  );
}

export default App;
