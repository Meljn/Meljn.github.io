document.addEventListener("DOMContentLoaded", () => {
  const calculateBtn = document.getElementById("calculateBtn");
  const resultDiv = document.getElementById("result");
  const quantityInput = document.getElementById("quantity");
  const optionSelect = document.getElementById("optionSelect");
  const propertyCheckbox = document.getElementById("propertyCheckbox");
  const optionsContainer = document.getElementById("optionsContainer");
  const propertyContainer = document.getElementById("propertyContainer");
  const serviceTypeInputs = document.querySelectorAll(
    'input[name="serviceType"]'
  );

  function updateServiceOptions() {
    const selectedType = document.querySelector(
      'input[name="serviceType"]:checked'
    ).value;

    optionsContainer.style.display =
      selectedType === "type2" ? "block" : "none";
    propertyContainer.style.display =
      selectedType === "type3" ? "block" : "none";
  }

  serviceTypeInputs.forEach((input) => {
    input.addEventListener("change", updateServiceOptions);
  });

  calculateBtn.addEventListener("click", () => {
    const quantity = quantityInput.value.trim();
    const selectedType = document.querySelector(
      'input[name="serviceType"]:checked'
    ).value;

    const quantityRegex = /^[1-9]\d*$/;
    if (!quantityRegex.test(quantity)) {
      resultDiv.textContent = "Ошибка: Введите корректное количество.";
      resultDiv.style.display = "block";
      return;
    }

    let basePrice = 0;
    switch (selectedType) {
      case "type1":
        basePrice = 10;
        break;
      case "type2":
        basePrice = 20;
        break;
      case "type3":
        basePrice = 30;
        break;
    }

    let optionPrice = 0;
    if (selectedType === "type2") {
      optionPrice = parseInt(optionSelect.value);
    }

    let propertyPrice = 0;
    if (selectedType === "type3" && propertyCheckbox.checked) {
      propertyPrice = 15;
    }

    const totalPrice =
      (basePrice + optionPrice + propertyPrice) * parseInt(quantity);
    resultDiv.textContent = `Стоимость заказа: ${totalPrice} руб.`;
    resultDiv.style.display = "block";
  });

  updateServiceOptions();
});
