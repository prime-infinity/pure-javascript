let categories = [
  {
    name: "breakfast",
    menu: [
      {
        name: "rice",
        status: "0",
        price: "33",
        description: "very good rice",
      },
    ],
  },
  {
    name: "lunch",
    menu: [
      {
        name: "yams",
        status: "0",
        price: "22",
        description: "some yams",
      },
    ],
  },
];

let searchField = "rice";

let findCatName = categories.filter((cat) => cat.name === searchField);
if (findCatName.length > 0) {
  console.log(findCatName);
}
if (findCatName.length < 1) {
  let same = (e) => {
    console.log([e]);
  };
  categories.map((cat) =>
    cat.menu.filter((men) =>
      men.name === searchField ? same({ ...cat, menu: men }) : null
    )
  );
}
