document.getElementById("feedback-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Спасибо за обращение! Мы свяжемся с вами.");
    this.reset();
  });