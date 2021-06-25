import React from "react";
import { useForm } from "react-hook-form";

const RenderSearchInput = (onSubmit, onChange, value, onClick) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="content-search">
      <form onSubmit={handleSubmit(() => onSubmit())}>
        <input
          {...register("country", { pattern: /[A-Za-z]/ })}
          type="text"
          placeholder="Search.."
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/icons8-search-24.png"
            })`,
          }}
          autoComplete="off"
          value={value}
          onClick={onClick}
          onChange={(e) => {
            onChange(e);
          }}
        />

        <button type="submit" className="search-btn">
          Search
        </button>

        {errors.country && <p className="error">Country must be Alpha.</p>}
      </form>
    </div>
  );
};

export default RenderSearchInput;
