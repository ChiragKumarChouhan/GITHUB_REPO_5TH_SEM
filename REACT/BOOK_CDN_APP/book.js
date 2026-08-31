function Book() {
  const image = React.createElement("img", {
    src: "https://images.prismic.io/turing/65a6b00b7a5e8b1120d595a3_React_Js_Book_Learning_React_Java_Script_9_11zon_61bb3cae33.webp?auto=format,compress",
    width: "100px",
    height: "100px",
  });

  const title = React.createElement(
    "h2",
    { style: { color: "red" } },
    "ReactJS",
  );

  const price = React.createElement(
    "h2",
    { style: { color: "blue" } },
    "Price: 465",
  );

  const btn = React.createElement(
    "button",
    { style: { color: "green" } },
    "Add to Cart",
  );

  const div = React.createElement("div", { className: "card" }, [
    image,
    title,
    price,
    btn,
  ]);

  return div;
}

export default Book;
