var searchButton = document.querySelector(".hotel-search");
var searchForm = document.querySelector(".search-form"); 
var checkIn = searchForm.querySelector("[name=check-in]");
var checkOut = searchForm.querySelector("[name=check-out]");
var adults = searchForm.querySelector("[name=adults]");
var kids = searchForm.querySelector("[name=kids]");  

searchButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchForm.classList.add("search-form-show");
    searchForm.classList.toggle("search-form-hidden");
    searchForm.classList.remove("modal-error");
  });

    
   searchForm.addEventListener("submit", function (evt) {
    if (!checkIn.value || !checkOut.value || !adults.value) {
    evt.preventDefault();
    searchForm.classList.add("modal-error");       
    }
  });

  localStorage.setItem("kids", kids.value);
  localStorage.setItem("adults", adults.value);  