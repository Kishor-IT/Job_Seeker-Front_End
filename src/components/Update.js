import {  Field, Form, Formik,ErrorMessage } from "formik";
import axios from "axios";
import { useParams } from "react-router";
export default function Update(){
    let { id } = useParams();
    const submitHandler = async (values, setSubmitting) => {
        
        await axios.put('http://localhost:8087/professional/'+id,values);
        alert('User Details Updated');
        // setSubmitting(false);
      };
 
      const validator=(values)=>{
        const errors = {};
        if ( values.email.indexOf("@")<0 || values.email.indexOf("@")>values.email.lastIndexOf(".")) {
          errors.email = "Invalid email address";
        }
        return errors;
      };
      return (
        <Formik
          onSubmit={submitHandler}
          initialValues={{ fname: "", lname:"",email: "" }}
          
          style={{margin:'0 auto'}}
        >
          {({ isSubmitting }) => (
            <Form className="card" style={{width:'18rem',padding:'10px',marginLeft:'auto',marginRight:'auto'}}>
                <div className="form-group">
                <Field
                type="text"
                id="fname" name="fname"
                placeholder="Update your First name"
                className="form-control"
                />
                <ErrorMessage className="form-text text-muted" name="fname" component="div" />
                </div>

                <div className="form-group">
                <Field
                type="text"
                id="lname" name="lname"
                placeholder="Update your Last name"
                className="form-control"
                />
                <ErrorMessage className="form-text text-muted" name="lname" component="div" />
                </div>
    
                <div className="form-group">
                <Field type="email" id="email" name="email" className="form-control" placeholder="Update email address"/>
                <ErrorMessage className="form-text text-muted" name="email" component="div" />
                </div>

                <div className="form-group">
                <Field type="tel" id="mobile" name="mobile" className="form-control" placeholder="Update mobile address"/>
                <ErrorMessage className="form-text text-muted" name="mobile" component="div" />
                </div>

                <div className="form-group">
                <Field type="text" id="services" name="services" className="form-control" placeholder="Update services address"/>
                <ErrorMessage className="form-text text-muted" name="services" component="div" />
                </div>
    
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                Update
              </button>
            </Form>
          )}
        </Formik> 
      );
}