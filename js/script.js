var searchButton = document.querySelector(".hotel-search");
var searchForm = document.querySelector(".search-form");
var searchInfo = document.querySelector(".search-info");        
var form = searchInfo.querySelector("form");
var checkIn = searchForm.querySelector("[name=check-in]");
var checkOut = searchForm.querySelector("[name=check-out]");
var adults = searchForm.querySelector("[name=adults]");
var kids = searchForm.querySelector("[name=kids]");
               

  if (searchButton) {
    if (searchForm) {
      searchForm.classList.add("search-form-show");
    };               
    searchButton.addEventListener("click", function (evt) {
    evt.preventDefault(); 
    searchForm.classList.toggle("search-form-show");
    searchForm.classList.toggle("search-form-hidden");               
     });
  };

  form.addEventListener("submit", function (evt) {
    if (!checkIn.value || !checkOut.value || !adults.value) {
    evt.preventDefault();
    console.log("нужно ввести");            
    }
  });

  localStorage.setItem("kids", kids.value);
  localStorage.setItem("adults", adults.value);
        