emailjs.init("t-RIMwqOwjXr7nbl6");

const form = document.getElementById("formulario-contacto");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_z16l7zi", "template_ivkms81", this)
    .then(() => {
      alert("Mensaje enviado con éxito.");
      form.reset();
    })
    .catch((error) => {
      console.error("Error al enviar:", error);
      alert("Ocurrió un error al enviar. Intentalo más tarde.");
    });
});