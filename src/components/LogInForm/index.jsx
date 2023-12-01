import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import StyleLogInForm from "./style";
import { logInSchema } from "../../schemas";
import iconEye from "../../assets/images/icon-eye.svg";
import iconEyeClosed from "../../assets/images/icon-eye-closed.svg";
import { useState } from "react";

const LogInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm({
    resolver: yupResolver(logInSchema),
  });

  const submitHandler = async function (formData) {
    console.log(formData);
  };

  return (
    <StyleLogInForm onSubmit={handleSubmit(submitHandler)}>
      <div className="form-group">
        <input
          {...register("email")}
          id="email"
          placeholder="Email"
          name="email"
          type="email"
        />
        {errors.email?.message && (
          <p className="error-message">{errors.email?.message}</p>
        )}
      </div>
      <div className="form-group">
        <div className="password-field">
          <input
            {...register("password")}
            id="password"
            placeholder="Password"
            name="password"
            type={showPassword ? "text" : "password"}
          />
          <img
            onClick={() => setShowPassword(!showPassword)}
            src={showPassword ? iconEyeClosed : iconEye}
            alt="show password"
          />
        </div>
        {errors.password?.message && (
          <p className="error-message">{errors.password?.message}</p>
        )}
      </div>
      <button>Log In</button>
    </StyleLogInForm>
  );
};

export default LogInForm;
