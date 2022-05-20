async function loadQuote() {
  const response = await fetch('https://randomlovecraft.com/api/sentences?limit=1');
  const data = await response.json();

  return data;
};

document.addEventListener("DOMContentLoaded", async () => {
  let data = [];

  try {
    data = await loadQuote();
    displayData(data);
  }
  catch (err) {
    console.log("Error!");
    console.log(err);
  }
});

let displayData = (data) => {

  const title = data.data[0].book.name;
  const year = data.data[0].book.year;
  const sentence = data.data[0].sentence;

  const titleHeading = document.querySelector(".title");
  const yearHeading = document.querySelector(".year");
  const sentenceParagraph = document.querySelector(".quote");

  titleHeading.innerHTML = title;
  yearHeading.innerHTML = year;
  sentenceParagraph.innerHTML = "\"" + sentence + "\"";
};
