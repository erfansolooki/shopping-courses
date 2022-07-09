import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../Common/Input";
import { Link } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
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
