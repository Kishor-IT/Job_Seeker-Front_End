import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [account, setAccount] = useState("");

  const submitHandler = async (values, setSubmitting) => {
    console.log(account);
    const value = { ...values, role: account };
    alert(JSON.stringify(value));
    await axios
      .post("http://localhost:8085/register", value)
      .then((data) => data.json())
      .then((data) => console.log(data));
    alert(values);
  };

  const validator = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      values.email.indexOf("@") < 0 ||
      values.email.indexOf("@") > values.email.lastIndexOf(".")
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  return (
    <div>
      <section className="vh-60">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10" style={{ maxWidth: "500px" }}>
              <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
               
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5">
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                      <span className="h1 fw-bold mb-0">Signup</span>
                    </div>

                    <Formik
                      onSubmit={submitHandler}
                      initialValues={{ email: "", password: "", uname: "", fname: "", lname: "" }}
                      validate={validator}
                      style={{ margin: "0 auto" }}
                    >
                      {({ isSubmitting }) => (
                        <Form>
                          <div className="form-outline mb-10">
                            <div className="form-group">
                              <label className="form-label" htmlFor="form2Example17">
                                FName
                              </label>
                              <Field
                                type="text"
                                id="fname"
                                className="form-control form-control-lg"
                                name="fname"
                                placeholder=" "
                                style={{ width: "200%" }} // Increase the input width
                              />
                              <ErrorMessage
                                className="form-text text-muted"
                                name="fname"
                                id="fname"
                                component="div"
                              />
                            </div>
                          </div>
                          <div className="form-outline mb-4">
                            <div className="form-group">
                              <label className="form-label" htmlFor="form2Example17">
                                LName
                              </label>
                              <Field
                                type="text"
                                id="lname"
                                className="form-control form-control-lg"
                                name="lname"
                                placeholder=" "
                                style={{ width: "200%" }} // Increase the input width
                              />
                              <ErrorMessage
                                className="form-text text-muted"
                                name="lname"
                                id="lname"
                                component="div"
                              />
                            </div>
                          </div>
                          <div className="form-outline mb-4">
                            <div className="form-group">
                              <label className="form-label" htmlFor="form2Example17">
                                Username
                              </label>
                              <Field
                                type="text"
                                id="uname"
                                className="form-control form-control-lg"
                                name="uname"
                                placeholder=" "
                                style={{ width: "200%" }} // Increase the input width
                              />
                              <ErrorMessage
                                className="form-text text-muted"
                                name="uname"
                                id="uname"
                                component="div"
                              />
                            </div>
                          </div>
                          <div className="form-outline mb-7">
                            <div className="form-group">
                              <label className="form-label" htmlFor="form2Example17">
                                Email address
                              </label>
                              <Field
                                type="email"
                                id="email"
                                className="form-control form-control-lg"
                                name="email"
                                placeholder=" "
                                style={{ width: "200%" }} // Increase the input width
                              />
                              <ErrorMessage
                                className="form-text text-muted"
                                name="email"
                                id="email"
                                component="div"
                              />
                            </div>
                          </div>
                          <div className="form-outline mb-14">
                            <div className="form-group">
                              <label className="form-label" htmlFor="form2Example27">
                                Password
                              </label>
                              <Field
                                type="password"
                                id="password"
                                className="form-control form-control-lg"
                                name="password"
                                placeholder=" "
                                style={{ width: "200%" }} // Increase the input width
                              />
                              <ErrorMessage
                                className="form-text text-muted"
                                name="password"
                                id="password"
                                component="div"
                              />
                            </div>
                          </div>
                          <div className="pt-1 mb-4">
                            <button className="btn btn-dark btn-lg btn-block"type="submit" disabled={isSubmitting} >
                             Signup
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
