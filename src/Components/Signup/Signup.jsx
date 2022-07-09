import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../Common/Input";
import "./Signup.css";
import { Link } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string()
    .max(8, "Name must be 8 characters or less")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .required("Phone Number Name is required")
    .matches(/^[0-9]{11}$/, "Invalid Phone Number"),
  password: Yup.string().required("Password is required"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password Confirmation is required"),
});

const SignUpForm = () => {
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
          <Input formik={formik} name="name" label="Name" />
          <Input formik={formik} name="email" label="Email" type="email" />
          <Input
            formik={formik}
            name="phoneNumber"
            label="phone Number"
            type="tel"
          />
          <Input
            formik={formik}
            name="password"
            label="Password"
            type="password"
          />
          <Input
            formik={formik}
            name="passwordConfirmation"
            label="password Confirmation"
            type="password"
          />
          <button
            style={{ width: "100%" }}
            type="submit"
            disabled={!formik.isValid}
            className="btn primary"
          >
            SignUp
          </button>
        </form>
      </div>
      <div style={{ textAlign: "center" }}>
        <p>Already have an account ?</p>
        <Link to="/Login">Login</Link>
      </div>
    </>
  );
};

export default SignUpForm;
