import "./registration.css";
import { IoIosContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaSquarePhone } from "react-icons/fa6";
import { FaLandmarkFlag } from "react-icons/fa6";
import { MdLocationCity } from "react-icons/md";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const Registration = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const onSubmit = async (data) => {
    //login(data);
    if (data.confirmPassword === data.password) {
      setIsLoading(true);
      delete data.confirmPassword;
      const res = await axios.get(
        `http://localhost:8800/api/users?email=${data.email}`
      );
      if (res.data.length === 0) {
        try {
          const response = await axios.post(
            `http://localhost:8800/api/auth/register`,
            {
              ...data,
              username: data.name + Date.now(),
            }
          );
          console.log(response.data);
        } catch (error) {
          console.log(error.message);
        }
        setIsLoading(false);
      } else {
        setIsLoading(false);
        alert("Email already use");
      }
    }
  };

  return (
    <div>
      <div className="registration">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Registration</h2>

          <label>
            Name:
            <input
              type="text"
              {...register("name", { required: true, maxLength: 20 })}
            />
            <IoIosContact />
            {errors.name && <span>Name requird</span>}
          </label>
          <label>
            country:
            <input
              type="text"
              {...register("country", { required: true, maxLength: 20 })}
            />
            <FaLandmarkFlag />
            {errors.country && <span>country requird</span>}
          </label>
          <label>
            city: <br />
            <input
              type="text"
              {...register("city", { required: true, maxLength: 20 })}
            />
            <MdLocationCity />
            {errors.city && <span>city requird</span>}
          </label>
          <label>
            Email:
            <input
              type="email"
              {...register("email", { required: true, maxLength: 20 })}
            />
            <MdEmail />
            {errors.email && (
              <span>{errors.message ? errors.message : "email requird"}</span>
            )}
          </label>
          <label htmlFor="">
            Password:
            <input
              type="password"
              {...register("password", { required: true, maxLength: 20 })}
            />
            <RiLockPasswordFill />
            {errors.password && <span>password requird</span>}
          </label>
          <label htmlFor="">
            Confirm password:
            <input
              type="password"
              {...register("confirmPassword", {
                required: true,
                maxLength: 20,
              })}
            />
            <RiLockPasswordFill />
            {errors.name && <span>Name requird</span>}
          </label>
          <label>
            Phone:
            <input
              type="number"
              {...register("phone", { required: true, maxLength: 11 })}
            />
            <FaSquarePhone />
            {errors.name && <span>Name requird</span>}
          </label>
          <button>Submit</button>
        </form>
        Already have account.<Link to={"/login"}>click here</Link>
      </div>
    </div>
  );
};

export default Registration;
