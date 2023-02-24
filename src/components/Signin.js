import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const Signin = () => {
  const formik = useFormik({
    initialValues: {
      userId: "",
      password: "",
    },
    validationSchema: Yup.object({
      userId: Yup.string().matches("admin").required("Required"),
      password: Yup.string().matches("admin").required("Required"),
    }),
    onSubmit: (values) => {
      if (values.userId === "admin" && values.password === "admin") {
        alert("Sign In Success!");
        window.location.href = "/welcome";
        localStorage.setItem("userId", values.userId);
      } else {
        alert("Invalid Credentials");
      }
    },
  });
  return (
    <>
      <h1 className="text-center text-primary-emphasis">OBS REACTJS TEST</h1>
      <div className="row justify-content-center m-5">
        <div className="col-md-4">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="userId">User ID</label>
              <input
                id="userId"
                name="userId"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userId}
                className="form-control"
                placeholder="User ID"
              />
              {formik.touched.userId && formik.errors.userId ? (
                <div>{formik.errors.userId}</div>
              ) : null}
            </div>

            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="form-control"
                placeholder="Password"
              />
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
              <Link className="d-block">Forgot My Password</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
