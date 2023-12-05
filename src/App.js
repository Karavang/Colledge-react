import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    reset,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    console.log(data);
    console.log({ FirstName: "Пам’ятай", LastName: "Про курсову роботу" });
    reset();
  };

  return (
    <div className="App">
      <h1>React Hook Form for IPZ</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>
            Login:
            <input
              {...register("login", {
                pattern: {
                  value: /[A-Za-z]{1}/,
                  message: "Please input Latin characters only",
                },
              })}
            />
          </label>
          {errors?.login && <p className="error">{errors?.login?.message}</p>}
        </div>

        <div className="form-group">
          <label>
            First Name:
            <input
              {...register("firstName", {
                required: "Minimum 5 characters required",
                minLength: 5,
              })}
            />
          </label>
          {errors?.firstName && (
            <p className="error">{errors?.firstName?.message}</p>
          )}
        </div>

        <div className="form-group">
          <label>
            Last Name:
            <input
              {...register("lastName", {
                required: "Minimum 5 characters required",
                minLength: 5,
                maxLength: 25,
              })}
            />
          </label>
          {errors?.lastName && (
            <p className="error">{errors?.lastName?.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Send"}
        </button>
      </form>
    </div>
  );
}

export default App;
