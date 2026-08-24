const bookdata = [
  {
    image:
      "https://imgs.search.brave.com/HsRkd_4Js3v29HzHZjxoQI2PgCVUMgl_vo1UsazQAlY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bmV0Z3VydS5jb20v/aHMtZnMvaHViZnMv/aW1hZ2UxMC00LnBu/Zz93aWR0aD0zMDAm/bmFtZT1pbWFnZTEw/LTQucG5n",
    price: 425,
  },
  {
    image:
      "https://imgs.search.brave.com/JgWaSTY3w2zj23B_D2yT63v5H9IWUuHofsLjPHL5NOY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZHJzc3JpZGhhci5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMDEvREFBLTJF/ZC1Gcm9udC1QYWdl/LmpwZw",
    price: 350,
  },
  {
    image:
      "https://shashwatpublication.com/files/book-covers/front_cover_imgSB21837.webp",
    price: 500,
  },
];

const book = (i) => {
  const div = document.createElement("div");
  div.setAttribute("class", "book");

  const image = document.createElement("img");
  image.setAttribute("src", i.image);
  image.setAttribute("width", "100px");
  image.setAttribute("height", "100px");

  const h2 = document.createElement("h2");
  h2.innerText = `Price: ₹${i.price}`;

  const bt = document.createElement("button");
  bt.innerText = "Add Cart";

  div.appendChild(image);
  div.appendChild(h2);
  div.appendChild(bt);

  return div;
};

const bookstore = bookdata.map((i) => book(i));

const parent = document.getElementById("bookstore");

for (const i of bookstore) {
  parent.appendChild(i);
}
