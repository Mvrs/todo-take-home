import { Form } from "react-router-dom";

export default function Login() {
  return (
    <div id="login-page">
      <h1>Rapptr Labs</h1>
      <Form method="post" id="login-form">
        <label htmlFor="username">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="user@rapptrlabs.com"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Must be at least 4 characters"
        />
        <button className="button">Login</button>
      </Form>
    </div>
  );
}
