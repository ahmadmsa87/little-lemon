import React from "react";
import "./Reservation.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Full name field is a required!"),

  date: yup.string().required("Please select date and time!"),
  guests: yup
    .number()
    .min(1, "It must be at least 1 guest!")
    .required("Please specify number of guests / table!"),

  telephone: yup
    .string()
    .required("Telephone field is a required!")
    .matches(
      /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      "Phone number must match the form +1xx xx xxx xxxx"
    ),
  email: yup
    .string()
    .required("Email field is a required!")
    .email("Email is empty!"),
});

export default function ReservationForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = (data) => {};

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <fieldset>
        <div className="form-field">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            {...register("name")}
          />
          <span className="error-msg">{errors.name?.message}</span>
        </div>
        <div className="form-field">
          <label htmlFor="email">Email *</label>
          <input
            type="text"
            placeholder="Your Email"
            name="email"
            {...register("email")}
          />
          <span className="error-msg">{errors.email?.message}</span>
        </div>
        <div className="form-field">
          <label htmlFor="telephone">Telephone *</label>
          <input
            type="tel"
            placeholder="+1xx xx xxx xxxx"
            name="telephone"
            minLength={10}
            maxLength={25}
            {...register("telephone")}
          />
          <span className="error-msg">{errors.telephone?.message}</span>
        </div>

        <div className="form-field guest-field">
          <label htmlFor="guests">Number of guests *</label>
          <input
            type="number"
            placeholder="4"
            name="guests"
            {...register("guests")}
          />
          <span className="error-msg">{errors.guests?.message}</span>
        </div>

        <div className="form-field">
          <label htmlFor="date">Date & Time *</label>
          <input type="datetime-local" name="date" {...register("date")} />
          <span className="error-msg">{errors.date?.message}</span>
        </div>
        <div className="form-field occasion-field">
          <label htmlFor="occasion">Occasion</label>
          <div className="options">
            <select name="occasion" {...register("occasion")}>
              <option value="None">Select occasion</option>
              <option value="birthday">Birthday</option>
              <option value="engagement">Engagement</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="preferences">Seating preferences</label>
          <div className="options">
            <select name="preferences" {...register("preferences")}>
              <option value="None">None</option>
              <option value="Indoors">Indoors</option>
              <option value="Outdoor">Outdoor</option>
            </select>
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="comments">Additional Comments</label> <br></br>
          <textarea
            name="comments"
            rows={8}
            placeholder="Additional Comments"
            {...register("comments")}
          ></textarea>
        </div>

        <button className="reservation-button" type="submit">
          Reserve
        </button>
      </fieldset>
    </form>
  );
}
