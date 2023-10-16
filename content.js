const adClasses = [
  ".fbs-ad--top-wrapper",
  ".fbs-ad--topx-wrapper",
  ".ad-slot",
  ".adWrapper",
  ".paisa-wrapper",
  ".ad-container",
  ".ad_wrapper_",
];

let adElements;
let acc = [];
for (const adClass of adClasses) {
  const node = document.querySelectorAll(adClass);
  const array = Array.from(node);
  adElements = acc.concat(array);
  acc = adElements;
}

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

fetch(chrome.runtime.getURL("facts.txt"))
  .then((response) => response.text())
  .then((data) => {
    facts = data.split("\n");
    adElements.forEach((adElement, idx) => {
      const color = colors[idx % 18];
      const randomFact = facts[Math.ceil(Math.random() * 7300)];
      const factContent = `<div
      style="${boxStyle} background-color: ${color};">
      <h3 style="padding:20px 20px 10px 20px;">Did you know ?</h3>
      <p style="padding:10px 20px 20px 20px;">${randomFact}</p>
    </div>`;

      adElement.innerHTML = factContent;
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
