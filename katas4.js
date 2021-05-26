const gotCitiesCSV =
  "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = [
  "Mordor",
  "Gondor",
  "Rohan",
  "Beleriand",
  "Mirkwood",
  "Dead Marshes",
  "Rhun",
  "Harad",
];

const bestThing =
  "The best thing about a boolean is even if you are wrong you are only off by a bit";

// Declaração das funcoes

function showResults(result, nome) {
  const documento = document.getElementById("katas");
  const novaDivResultado = document.createElement("div");
  const novaDivNome = document.createElement("h3");
  novaDivNome.innerText = nome;
  novaDivResultado.textContent = JSON.stringify(result);
  documento.appendChild(novaDivNome);
  documento.appendChild(novaDivResultado);
}

const kata1 = () => {
  let nome = "Katas 01";
  let novaArr = gotCitiesCSV.split(",");

  return showResults(novaArr, nome);
};

const kata2 = () => {
  let nome = "Kata 02";
  let novaArr = bestThing.split(" ");

  return showResults(novaArr, nome);
};

const kata3 = () => {
  let nome = "Kata 03";
  let novaArr = gotCitiesCSV.split(",").join(";");

  return showResults(novaArr, nome);
};

const kata4 = () => {
  let nome = "Kata 04";
  let novaArr = gotCitiesCSV.split(",").join(", ");

  return showResults(novaArr, nome);
};

const kata5 = () => {
  let nome = "Kata 05";
  let novaArr = lotrCitiesArray.slice(0, 5);

  return showResults(novaArr, nome);
};

const kata6 = () => {
  let nome = "Kata 06";
  let novaArr = lotrCitiesArray.slice(3);

  return showResults(novaArr, nome);
};

const kata7 = () => {
  let nome = "Kata 07";
  let novaArr = lotrCitiesArray.slice(2, 5);

  return showResults(novaArr, nome);
};

const kata8 = () => {
  let nome = "Kata 08";
  lotrCitiesArray.splice(2, 1);
  let novaArr = lotrCitiesArray;

  return showResults(novaArr, nome);
};

const kata9 = () => {
  let nome = "Kata 09";
  lotrCitiesArray.splice(5, 2);
  let novaArr = lotrCitiesArray;

  return showResults(novaArr, nome);
};

const kata10 = () => {
  let nome = "Kata 10";
  lotrCitiesArray.splice(2, 1, "Rohan");
  let novaArr = lotrCitiesArray;

  return showResults(novaArr, nome);
};

const kata11 = () => {
  let nome = "Kata 11";
  lotrCitiesArray.splice(4, 1, "Deadest Marshes");
  let novaArr = lotrCitiesArray;

  return showResults(novaArr, nome);
};

const kata12 = () => {
  let nome = "Kata 12";
  let novaArr = bestThing.slice(0, 14);

  return showResults(novaArr, nome);
};

const kata13 = () => {
  let nome = "Kata 13";
  let novaArr = bestThing.slice(-12);

  return showResults(novaArr, nome);
};

const kata14 = () => {
  let nome = "Kata 14";
  let novaArr = bestThing.slice(23, 38);

  return showResults(novaArr, nome);
};

const kata15 = () => {
  let nome = "Kata 15";
  let novaArr = bestThing.substring(bestThing.length - 12);

  return showResults(novaArr, nome);
};

const kata16 = () => {
  let nome = "Kata 16";
  let novaArr = bestThing.substring(23, 38);

  return showResults(novaArr, nome);
};

const kata17 = () => {
  let nome = "Kata 17";
  lotrCitiesArray.pop();
  let novaArr = lotrCitiesArray;

  return showResults(novaArr, nome);
};

const kata18 = () => {
  let nome = "Kata 18";
  lotrCitiesArray.push("Deadest Marshes");
  let novaArr = lotrCitiesArray;

  return showResults(novaArr, nome);
};

const kata19 = () => {
  let nome = "Kata 19";
  lotrCitiesArray.shift();
  let novaArr = lotrCitiesArray;

  return showResults(novaArr, nome);
};

const kata20 = () => {
  let nome = "Kata 20";
  lotrCitiesArray.unshift("Mordor");
  let novaArr = lotrCitiesArray;

  return showResults(novaArr, nome);
};

// chamada das funcoes

kata1();
kata2();
kata3();
kata4();
kata5();
kata6();
kata7();
kata8();
kata9();
kata10();
kata11();
kata12();
kata13();
kata14();
kata15();
kata16();
kata17();
kata18();
kata19();
kata20();

