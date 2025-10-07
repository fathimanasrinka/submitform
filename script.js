document.getElementById("userForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const location = document.getElementById("location").value.trim();
  const message = document.getElementById("message");

  if (!name || !phone || !email || !location) {
    message.textContent = "⚠️ Please fill in all fields.";
    message.style.color = "red";
    return;
  }

  // Basic phone and email validation
  const phonePattern = /^[0-9]{10}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!phonePattern.test(phone)) {
    message.textContent = "📞 Please enter a valid 10-digit phone number.";
    message.style.color = "red";
    return;
  }

  if (!emailPattern.test(email)) {
    message.textContent = "📧 Please enter a valid email address.";
    message.style.color = "red";
    return;
  }

  message.textContent = `✅ Thank you, ${name}! Your details have been submitted successfully.`;
  message.style.color = "green";

  // Clear form after successful submission
  document.getElementById("userForm").reset();
});
