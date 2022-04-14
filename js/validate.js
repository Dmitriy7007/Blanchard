var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

new JustValidate(".section-contacts__form", {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 20,
      strength: {
        custom: "^[a-zA-Z0-9]",
      },
    },

    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
    },
  },

  messages: {
    name: {
      required: "Поле обязательное для заполнения",
      minLength: "Поле должно содержать не меньше 3 букв (цифр)",
      maxLength: "Поле должно содержать не больше 20 букв (цифр)",
      strength: "Недопустимый формат",
    },
    tel: {
      required: "Поле обязательное для заполнения",
    },
  },
});
