let a = { y: 10 };
a.x = a;

//console.log(JSON.stringify(a));

let inputr = [1, "Turing", { x: 2 }];

for (let i = 0; i < inputr.length; i++) {
  const ee = inputr[i];
  if (ee === "Turing") inputr.splice(ee, 1);
  else console.log(ee);
}
