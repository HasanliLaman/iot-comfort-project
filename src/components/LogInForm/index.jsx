import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import StyleLogInForm from "./style";
import { logInSchema } from "../../schemas";
import iconEye from "../../assets/images/icon-eye.svg";
import iconEyeClosed from "../../assets/images/icon-eye-closed.svg";
import { login } from "../../server";
import { AuthContext } from "../../context/AuthContext";

library.add(faSpinner);

const LogInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { logInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const { data, isLoading, mutate } = useMutation({
    mutationFn: login,
    onError: () => toast.error("Email or password is wrong"),
    onSuccess: ({ data }) => {
      logInUser(data.token);
      navigate("/dashboard");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(logInSchema),
  });

  const submitHandler = async function (formData) {
    mutate(formData);

    if (data)
      reset({
        email: "",
        password: "",
      });
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
      <button>
        <p>Login</p>
        {isLoading && (
          <FontAwesomeIcon
            icon="fa-spinner"
            spin
            style={{
              color: "#fafcff",
              marginLeft: "1rem",
              fontSize: "1.8rem",
            }}
          />
        )}
      </button>
    </StyleLogInForm>
  );
};

export default LogInForm;
