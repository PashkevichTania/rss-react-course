import React from "react";
import faker from "faker";

const Form = (props) => {
  const { cards, setCards } = props;

  const submitHandler = (event) => {
    event.preventDefault();
    const myForm = document.getElementById("myForm");

    const user = {
      image: faker.image.avatar(),
      userName: event.target[0].value,
      dateOfBirth: event.target[1].value,
      country: event.target[2].value,
      data: event.target[3].checked,
      promotions: event.target[4].checked,
    };

    setCards([...cards, user]);

    myForm.userName.value = "";
    myForm.date.value = "";
    myForm.country.value = "US";
    myForm.check.checked = false;
    myForm.promotions.checked = false;
  };

  return (
    <div>
      <form id="myForm" onSubmit={submitHandler}>
        <div className="form__row">
          <h2>Add card</h2>
        </div>
        <div className="form__item">
          <label htmlFor="userName">
            <b>Enter user name</b>
            <input
              id="userName"
              name="userName"
              placeholder="Enter user name"
              type="text"
              required
              pattern="^([А-Яа-яё a-zA-Z]{1,30})$"
              title="Username should only contain letters. e.g. John"
            />
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="date">
            <b>Date of birth</b>
            <input
              id="date"
              name="date"
              placeholder="Enter date of birth"
              type="date"
              required
            />
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="country">
            Choose a country:
            <select name="country" id="country" required>
              <option value="US">US</option>
              <option value="Russia">Russia</option>
              <option value="Belarus">Belarus</option>
              <option value="Canada">Canada</option>
            </select>
          </label>
        </div>
        <div className="form__item__check">
          <label htmlFor="check">
            I agree to the processing of data
            <input type="checkbox" name="check" required />
          </label>
        </div>
        <div className="form__item__check">
          <p>I want to receive notifications about promotions</p>
          <label className="switch" htmlFor="promotions">
            <input
              id="promotions"
              type="checkbox"
              name="promotions"
              value="checkbox1"
            />
            <span className="slider round" />
          </label>
        </div>
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
