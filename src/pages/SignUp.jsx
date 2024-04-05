import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function SignUp() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-full relative min-h-screen bg-[#1a0a36]">
      <form className="max-w-[600px] m-auto" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            className={"text-sm max-sm:text-xs text-purple-200"}
            htmlFor="taskName"
          >
            First Name
          </label>
          <input
            className="w-full h-14 max-sm:h-12 
              border-none
             rounded-xl p-4 text-base max-sm:placeholder:text-sm mt-1 outline-none"
            {...register("firstName", { required: true, maxLength: 20 })}
          />
          {errors.firstName?.type === "required" && (
            <p role="alert">First name is required</p>
          )}{" "}
          <br />
        </div>

        <div>
          <label
            className={"text-sm max-sm:text-xs text-purple-200"}
            htmlFor="taskName"
          >
            Last Name
          </label>
          <input
            className="w-full h-14 max-sm:h-12 
              border-none
             rounded-xl p-4 text-base max-sm:placeholder:text-sm mt-1 outline-none"
            {...register("lastName", { maxLength: 20 })}
          />
          {errors.firstName?.type === "required" && (
            <p role="alert">First name is required</p>
          )}{" "}
          <br />
        </div>

        <div>
          <label
            className={"text-sm max-sm:text-xs text-purple-200"}
            htmlFor="taskName"
          >
            Email
          </label>
          <input
            className="w-full h-14 max-sm:h-12 
        border-none
       rounded-xl p-4 text-base max-sm:placeholder:text-sm mt-1 outline-none"
            {...register("email", { required: "Email Address is required" })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <p role="alert">{errors.email.message}</p>} <br />
        </div>
        <div>
          <label
            className={"text-sm max-sm:text-xs text-purple-200"}
            htmlFor="taskName"
          >
            Password
          </label>
          <input
            className="w-full h-14 max-sm:h-12 
        border-none
       rounded-xl p-4 text-base max-sm:placeholder:text-sm mt-1 outline-none"
            type="number"
            {...register("password")}
          />
          {errors.firstName?.type === "required" && (
            <p role="alert">First name is required</p>
          )}{" "}
          <br />
        </div>

        <div className="flex justify-center py-2">
          <input className="btn btn-outline-primary " type="submit" />
        </div>
        <div>
          <p className="text-white">
            If You have already an account please{" "}
            <Link to="/signin" className="text-blue-500 underline ">
              sign in
            </Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
}
