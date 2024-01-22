import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./login.css";
import { authContext } from "../../context/AuthContext";
const Login = () => {
  const { login } = authContext();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    login(data);
  };

  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            email:
            <input type="email" {...register("email", { required: true })} />
            {errors.email && <span>email required</span>}
          </label>
          <label>
            password:
            <input
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && <span>password required</span>}
          </label>
          <button> Log in</button>
        </form>
        Create an account.<Link to={"/registrationform"}>click here</Link>
      </div>
    </div>
  );
};

export default Login;
