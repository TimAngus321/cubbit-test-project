import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
 
 const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
 const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

 const ContactInfoSchema = Yup.object().shape({
   firstName: Yup.string().required('First Name Required'),
   lastName: Yup.string().required('Last Name Required'),
   email: Yup.string().matches(emailRegExp, 'Invalid Email').email('Invalid email').required('Email Required'),
   phoneNumber: Yup.string().matches(phoneRegExp, 'Please add a valid phone number').required('Phone Number Required'),
 });

 
 
 const ContactInfoForm = () => (
   <div
   className="contact-form"
   >
     <h3
     className="contact-form-header"
     >Contact Information</h3>
     <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         email: '',
         phoneNumber: '',
       }}
       validationSchema={ContactInfoSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
        <Form className="contact-form-style">
        <div className="email-field-error-containter">
        <div>Email</div>
        <Field 
        name="email" 
        type="email" 
        className="email-field"/>
        {errors.email && touched.email ? 
        <span className="email-error">{errors.email}</span> : null}
        </div>
        <div className="phone-field-error-container">
        <div>Phone Number</div>
        {errors.phoneNumber && touched.phoneNumber ? 
        <span className="phone-error">
        {errors.phoneNumber}</span> : null}
        <Field 
        name="phoneNumber"
        className="phone-field"
        />
        </div>
           <div className="full-name-container">
               <div className="first-error-container">
               <div>First Name</div>
                <Field 
                name="firstName"
                className="first-name-field"
                    />
                    {errors.firstName && touched.firstName ? (
                    <span
                    className="first-name-error"
                    >{errors.firstName}</span>) : null}
                </div>
                <div className="last-error-container">
                <div>Last Name</div>
                <Field 
                name="lastName"
                className="last-name-field"
                    />
                  {errors.lastName && touched.lastName ? (
                  <span className="last-name-error"
                  >{errors.lastName}</span>) : null}
                </div>
          </div>
          {/* <button
           type="submit"
           className="storybook-button 
           storybook-button--primary
           storybook-button--medium"
           >
             Submit
          </button> */}
         </Form>
       )}
     </Formik>
   </div>
 );

 export default ContactInfoForm;