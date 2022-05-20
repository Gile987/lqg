fetch('https://randomlovecraft.com/api/sentences?limit=1')
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
    displayData(data);
  }).catch(function (error) {
    console.log(error);
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
  sentenceParagraph.innerHTML = sentence;
}