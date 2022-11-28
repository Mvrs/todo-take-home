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
    // try {
    //   const response = await fetch(
    //     "http://dev.rapptrlabs.com/Tests/scripts/user-login.php",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Headers": "Content-Type",
    //         "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    //       },
    //       body: JSON.stringify({
    //         email: user.email,
    //         password: user.password,
    //       }),
    //     },
    //   );
    //   const data = await response.json();
    //   // enter you logic when the fetch is successful
    //   console.log(data);
    // } catch (error) {
    //   // enter your logic for when there is an error (ex. error toast)
    //   console.log(error);
    // }

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
        <div
          className="browser-style chrome-style"
          style={{ position: "relative" }}
        >
          <div
            style={{
              position: "absolute",
              alignSelf: "center",
              top: 7,
              left: 7,
            }}
          >
            👤
          </div>
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
            style={{
              outline: errors?.password?.message ? "1px solid #E0144C" : "none",
              paddingLeft: 30,
            }}
            className="chrome-style browser-style"
            control={control}
          />
          {errors.email && (
            <span role="alert" style={{ color: "#E0144C" }}>
              {errors.email.message}
            </span>
          )}
        </div>
        <label htmlFor="password">Password</label>

        <div
          className="browser-style chrome-style"
          style={{ position: "relative" }}
        >
          <div
            style={{
              position: "absolute",
              alignSelf: "center",
              top: 7,
              left: 7,
            }}
          >
            🔒
          </div>
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
            style={{
              outline: errors?.password?.message ? "1px solid #E0144C" : "none",
              paddingLeft: 30,
            }}
            className="chrome-style browser-style"
            control={control}
          />
          {errors.password && (
            <span role="alert" style={{ color: "#E0144C" }}>
              {errors.password.message}
            </span>
          )}
        </div>
        <button
          className="button"
          type="button"
          onClick={onSubmit}
          disabled={!formState.isDirty}
        >
          Login
        </button>
      </Form>
    </div>
  );
}
