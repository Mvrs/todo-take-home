import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, useNavigate } from "react-router-dom";
import { Input } from "../components/input";

export type FormValues = {
  email: string;
  password: string;
};

interface Props {
  passActionData?: (data: FormValues) => void;
}

export default function Login({ passActionData }: Props) {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [user, setUser] = useState({
    email: window.localStorage.getItem("email") ?? "",
    password: window.localStorage.getItem("password") ?? "",
  });

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async ({ email, password }: FormValues) => {
    setUser({ ...user });
    window.localStorage.setItem("user", JSON.stringify(user));
    navigate("/todo-app");
  });

  useEffect(() => {
    reset({ email: "", password: "" });
  }, [reset]);

  return (
    <div id="login-page">
      <h1>Rapptr Labs</h1>
      <Form method="post" id="login-form">
        <label htmlFor="username">Email</label>
        <Input
          {...register("email", {
            required: "required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Not a valid email.",
            },
            maxLength: 50,
          })}
          type="email"
          name="email"
          id="email"
          placeholder="user@rapptrlabs.com"
          setValue={setValue}
          // autocomplete="email"
          control={control}
        />
        {errors.email && <span role="alert">{errors.email.message}</span>}
        <label htmlFor="password">Password</label>
        <Input
          {...register("password", {
            required: "required",
            min: 4,
            max: 16,
            pattern: {
              value: /^(?=.*[A-Z]).{4,16}$/,
              message: "Password must be between 4 and 16 characters",
            },
          })}
          type="password"
          name="password"
          id="password"
          placeholder="Must be at least 4 characters"
          setValue={setValue}
          // autocomplete="off"
          control={control}
        />
        {errors.password && <span role="alert">{errors.password.message}</span>}
        <button className="button" type="button" onClick={onSubmit}>
          Login
        </button>
      </Form>
    </div>
  );
}
