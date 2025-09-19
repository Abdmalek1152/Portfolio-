// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;

  document.getElementById("responseMsg").innerText =
    `Thank you ${name}! We’ll contact you at ${phone} shortly.`;

  // Clear form
  this.reset();
});
