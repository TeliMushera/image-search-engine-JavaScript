console.log("Script loaded!");

document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("search-form");
  const searchBox = document.getElementById("search-box");
  const searchResult = document.getElementById("search-result");
  const showMoreBtn = document.getElementById("show-more-btn");

  //9p-sXAPc_zkbESwy4j1teKtg49AOKs0Hb_7o654pdtw

  let keyword = "";
  let page = 1;
  const accessKey = "9p-sXAPc_zkbESwy4j1teKtg49AOKs0Hb_7o654pdtw";

//   function to fetch images from Unsplash API
  async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=20`;

    // fetching the url
    const response = await fetch(url);
    // parsing the response to json
    const data = await response.json();


    // if page is 1 then clear the previous results
    if (page === 1) {
      searchResult.innerHTML = "";
    }


    // getting the results from data
    const results = data.results;

    // looping through each result
    results.map((result) => {
  const image = document.createElement("img");
  image.src = result.urls.small;

  const imageLink = document.createElement("a");
  imageLink.href = result.links.html;
  imageLink.target = "_blank"; // open link in new tab
  imageLink.appendChild(image); // append child - image inside link

  // create the box first
  const imgBox = document.createElement("div");
  imgBox.classList.add("img-box");

  // then append link inside box
  imgBox.appendChild(imageLink);

  // finally append box to search result
  searchResult.appendChild(imgBox);
});

    // show the show more button if there are more than 20 results
    showMoreBtn.style.display = "block";
    showMoreBtn.style.cursor = "pointer";
  }
//   subbmit function for the form
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
  });
//  show more button click event
  showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
  });
});
