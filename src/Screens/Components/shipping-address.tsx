import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddressSchema = Yup.object().shape({
    streetAddress: Yup.string().required('Required'),
    otherInformation: Yup.string().required('Required'),
    postalCode: Yup.string().required('Required'),
    Country: Yup.string().required('required'),
    city: Yup.string().required('required'),
    stateProvince: Yup.string().required('requred'),
  });

const ShippingAddress = () => (
    <div>
     <h1>Signup</h1>
     <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         email: '',
       }}
       validationSchema={AddressSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="firstName" />
           {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
           ) : null}
           <Field name="lastName" />
           {errors.lastName && touched.lastName ? (
             <div>{errors.lastName}</div>
           ) : null}
           <Field name="email" type="email" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   </div>
)

export default ShippingAddress; 
