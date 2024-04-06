import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import Cookies from "universal-cookie";

export default function SignIn() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

    // const [nextState, setNextState] = useState("sign");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const cookies = new Cookies()
  
    const onSubmit = (data) => {
        setLoading(true)
    //   console.log(data);
      const url = `https://task-management-serverr.vercel.app/api/v1/auth/login`
      fetch(url,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(resoponse => resoponse.json())
      .then(result => {
        console.log(result, "result")
        if(result.
          statusCode=== 200){
          toast.success("User Logged in Successfully");
          cookies.set("accessToken", result?.data?.accessToken, { path: "/" });
          
  
          setLoading(false)
          navigate("/")
          
        }
        else{
          toast.error(result.message);
          setLoading(false)
        }
      })
    }

  return (
    <div className="w-full relative min-h-screen bg-[#1a0a36]">
      <form className="max-w-[600px] m-auto" onSubmit={handleSubmit(onSubmit)}>
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
            
            {...register("password")}
          />
          {errors.password?.type === "required" && (
            <p role="alert">First name is required</p>
          )}{" "}
          <br />
        </div>

        <div className="flex justify-center py-2">
          <input className="btn btn-outline-primary " type="submit" />
        </div>
        <div>
          <p className="text-white">
            If You have not account Please{" "}
            <Link to="/signup" className="text-blue-500 underline ">
              sign up
            </Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
}
