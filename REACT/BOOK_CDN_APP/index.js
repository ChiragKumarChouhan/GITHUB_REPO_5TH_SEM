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

  const image2 = React.createElement("img", {
    src: "https://images.manning.com/264/352/resize/video/7/d7ad908-05b1-469a-9a75-b72caa4a36f0/Next.jsWebDev_MasterthispowerfulReactframework.png",
    width: "100px",
    height: "100px",
  });

  const title2 = React.createElement(
    "h2",
    { style: { color: "red" } },
    "JavaScript",
  );

  const price2 = React.createElement(
    "h2",
    { style: { color: "blue" } },
    "Price: 500",
  );

  const btn2 = React.createElement(
    "button",
    { style: { color: "green" } },
    "Add to Cart",
  );

  const image3 = React.createElement("img", {
    src: "https://images.prismic.io/turing/65a6b00b7a5e8b1120d595a3_React_Js_Book_Learning_React_Java_Script_9_11zon_61bb3cae33.webp?auto=format,compress",
    width: "100px",
    height: "100px",
  });

  const title3 = React.createElement(
    "h2",
    { style: { color: "red" } },
    "ReactJS",
  );

  const price3 = React.createElement(
    "h2",
    { style: { color: "blue" } },
    "Price: 465",
  );

  const btn3 = React.createElement(
    "button",
    { style: { color: "green" } },
    "Add to Cart",
  );

  return React.createElement(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "20px",
      },
    },

    React.createElement("div", { className: "card" }, image, title, price, btn),

    React.createElement(
      "div",
      { className: "card" },
      image2,
      title2,
      price2,
      btn2,
    ),

    React.createElement(
      "div",
      { className: "card" },
      image3,
      title3,
      price3,
      btn3,
    ),
  );
}

const parent = document.getElementById("root");

const root = ReactDOM.createRoot(parent);

root.render(React.createElement(Book));
