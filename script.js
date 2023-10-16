// Sample content.js
const adClasses = [
  ".fbs-ad--top-wrapper",
  ".fbs-ad--topx-wrapper",
  ".ad-slot",
];

let adElements;
let acc = [];
for (const adClass of adClasses) {
  const node = document.querySelectorAll(adClass);
  const array = Array.from(node);
  adElements = acc.concat(array);
  acc = adElements;
}
console.log(acc);
console.log(adElements)

// const nodeList1 = document.querySelectorAll(".ad-slot");
// const nodeList2 = document.querySelectorAll(".fbs-ad--topx-wrapper");

// const array1 = Array.from(nodeList1);
// const array2 = Array.from(nodeList2);

// const adElements = array1.concat(array2);

const boxStyle =
  "padding: 3px 15px;border: 3px solid black;border-radius: 5px;font-family: Arial, Helvetica, sans-serif; z-index:1000; color:black;";

let facts = [];
const colors = [
  "#FFCDD2",
  "#F8BBD0",
  "#E1BEE7",
  "#D1C4E9",
  "#C5CAE9",
  "#BBDEFB",
  "#B3E5FC",
  "#B2EBF2",
  "#B2DFDB",
  "#C8E6C9",
  "#DCEDC8",
  "#F0F4C3",
  "#FFF9C4",
  "#FFECB3",
  "#FFE0B2",
  "#FFCCBC",
  "#D7CCC8",
  "#E0E0E0",
  "#CFD8DC",
];

fetch("facts.txt")
  .then((response) => response.text())
  .then((data) => {
    facts = data.split("\n");
    adElements.forEach((adElement, idx) => {
      const color = colors[idx % 18];
      const randomFact = facts[Math.ceil(Math.random() * 7300)];
      const factContent = `<div
      style="${boxStyle} background-color: ${color};">
      <h3>Did you know ?</h3>
      <p>${randomFact}</p>
    </div>`;

      adElement.innerHTML = factContent;
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
