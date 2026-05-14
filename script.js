const applicationForm = document.querySelector("[data-application-form]");

if (applicationForm) {
  const submitButton = applicationForm.querySelector("[data-submit-button]");
  const formMessage = applicationForm.querySelector("[data-form-message]");

  applicationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitButton.textContent = "Your application has been sent";
    submitButton.classList.add("is-sent");
    formMessage.textContent = "Thanks for applying. Hot Beans Web will review your details soon.";
  });
}
