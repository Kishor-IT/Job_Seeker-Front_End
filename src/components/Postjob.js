import { Field, Form, Formik, ErrorMessage } from "formik";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function NewUser() {
  const [professionalData, setProfessionalData] = useState([]);

  useEffect(() => {
    fetchProfessionalData();
  }, []);

  const fetchProfessionalData = async () => {
    try {
      const response = await axios.post("http://localhost:8085/product");
      setProfessionalData(response.data);
    } catch (error) {
      console.error("Error fetching professional data:", error);
    }
  };

  const submitHandler = async (values, setSubmitting) => {
    alert(JSON.stringify(values));
    await axios.post("http://localhost:8085/product/add", values);
  };

  const validator = (values) => {
    const errors = {};
    if (!values.Job) {
      errors.Job = "Required";
    }
    if (!values.Position) {
      errors.Position = "Required";
    }
    if (!values.Company) {
      errors.Company = "Required";
    }
    if (!values.Location) {
      errors.Location = "Required";
    }
    if (!values.Salary) {
      errors.Salary = "Required";
    }
    return errors;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Formik
        onSubmit={submitHandler}
        initialValues={{ Job: "", Position: "", Company: "", Location: "", Salary: "" }}
        validate={validator}
        style={{ margin: "0 auto" }}
      >
        {({ isSubmitting }) => (
          <Form className="card" style={{ maxWidth: "450px", padding: "20px", backgroundColor: "black", color: "white" ,width:"450px"}}>
            <div className="form-group">
              <label htmlFor="Job">Job</label>
              <Field type="text" id="Job" name="Job" className="form-control" placeholder="Create your User Job" />
              <ErrorMessage className="form-text text-muted" name="Job" component="div" />
            </div>

            <div className="form-group">
              <label htmlFor="Position">Position</label>
              <Field type="text" id="Position" name="Position" placeholder="Enter your Position" className="form-control" />
              <ErrorMessage className="form-text text-muted" name="Position" component="div" />
            </div>

            <div className="form-group">
              <label htmlFor="Company">Company</label>
              <Field type="text" id="Company" name="Company" className="form-control" placeholder="Enter your Company" />
              <ErrorMessage className="form-text text-muted" name="Company" component="div" />
            </div>

            <div className="form-group">
              <label htmlFor="Location">Location</label>
              <Field type="text" id="Location" name="Location" className="form-control" placeholder="Enter your Location" />
              <ErrorMessage className="form-text text-muted" name="Location" component="div" />
            </div>

            <div className="form-group">
              <label htmlFor="Salary">Salary</label>
              <Field type="text" id="Salary" name="Salary" className="form-control" placeholder="Enter your Salary" />
              <ErrorMessage className="form-text text-muted" name="Salary" component="div" />
            </div>
            <br></br>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              UPLOAD
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}