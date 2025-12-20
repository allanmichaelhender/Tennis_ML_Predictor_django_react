import React from "react";
import { useForm, useWatch } from "react-hook-form";
import axios from "axios";
import api from "../api";

const PortfoliosForm = ({ onSourceChange }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {

    },
  });

  const today = new Date().toISOString().split("T")[0];

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/api/preditions/", data);
      alert("Match Predicted!");
      onSourceChange();
    } catch (error) {
      console.error("Submission failed:", error.response?.data);
    }
  };

  const onError = (errors) => console.log("Form Validation Errors:", errors);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>

      <input
        type="number"
        className="amount-input"
        step="1"
        {...register("player1ID", { valueAsNumber: true })}
      />

      <input
        type="number"
        className="amount-input"
        step="1"
        {...register("player2ID", { valueAsNumber: true })}
      />

      <input
        type="date"
        className="date-input-field"
        {...register("match_date", {
          required: "A date is required",
          min: {
            value: "2024-01-01",
            message: "Date cannot be before January 1st, 2024",
          },
          max: {
            value: today,
            message: "Date cannot be in the future",
          },
        })}
      />
      {errors.start_date && <span>{errors.start_date.message}</span>}
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default PortfoliosForm;
