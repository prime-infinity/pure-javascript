const mainId = "62b59790ffe6914c792adcbb";
const subId = "62b59813ffe6914c792adcce";

const oldMenu = {
  name: "ice cream",
  status: 3,
  price: 1244,
  description: "description",
  files: ["this", "that", "now"],
};

const categories = [
  {
    name: "lunch",
    sub: [
      { name: "yam", menu: [oldMenu], _id: "62b59813ffe6914c792adcce" },
      { name: "rice", menu: [], _id: "62b598e7b8e9deba94aa56d3" },
    ],
    _id: "62b59790ffe6914c792adcbb",
  },
  {
    name: "breakfast",
    sub: [
      { name: "akamu", menu: [], _id: "62b597fdffe6914c792adcc6" },
      {
        name: "golden more",
        menu: [],
        _id: "62b598f8b8e9deba94aa56d8",
      },
      {
        name: "tea and bread",
        menu: [],
        _id: "62b5990ab8e9deba94aa56de",
      },
    ],
    _id: "62b597b2ffe6914c792adcbe",
  },
  {
    name: "dinner",
    sub: [
      {
        name: "wine and cake",
        menu: [],
        _id: "62b59925b8e9deba94aa56e5",
      },
    ],
    _id: "62b59917b8e9deba94aa56e1",
  },
];

/*console.log(
  categories.map((cat) =>
    cat._id === mainId
      ? cat.sub.map((subb) =>
          subb._id === subId ? { ...subb, menu: [...subb.menu, newMenu] } : subb
        )
      : cat
  )
);*/

const newMenu = {
  name: "i'm tired",
  status: 1,
  price: 144,
  description: "description of this and that",
  files: ["this", "that"],
};

let toLog = categories.map((cat) =>
  cat._id === mainId
    ? {
        ...cat,
        sub: cat.sub.map((subb) =>
          subb._id === subId ? { ...subb, menu: [...subb.menu, newMenu] } : subb
        ),
      }
    : cat
);
console.log(toLog[0].sub[0]);
//console.log(toLog[1].sub[1].menu);
