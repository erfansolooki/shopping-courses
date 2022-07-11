import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Input from "../../Common/Input";
import { Link, useNavigate } from "react-router-dom";
import { loginServices } from "../../Services/loginService";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  const [error, setError] = useState("");
  const history = useNavigate();
  const onSubmit = async (values) => {
    try {
      const { data } = await loginServices(values);
      console.log(data);
      history("/");
      setError(null);
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      }
    }
  };
  //   const [formValues, setFormValues] = useState(null);
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <>
      <div className="formContainer">
        <form onSubmit={formik.handleSubmit}>
          <Input formik={formik} name="email" label="Email" type="email" />
          <Input
            formik={formik}
            name="password"
            label="Password"
            type="password"
          />
          <button
            style={{ width: "100%" }}
            type="submit"
            disabled={!formik.isValid}
            className="btn primary"
          >
            Login
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
      <div style={{ textAlign: "center" }}>
        <p>Don't have an account ?</p>
        <Link to="/SignUp">SignUp</Link>
      </div>
    </>
  );
};

export default LoginForm;
