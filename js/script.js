// Открытие и закрытие окна
  var link = document.querySelector(".search-btn");
  var popup = document.querySelector(".modal-content");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("modal-content-show");
  });
