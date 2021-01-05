import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { CountryDropdown } from 'react-country-region-selector';

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
     <h3>Shipping Address</h3>
     <Formik
       initialValues={{
         streetAddress: '',
         otherInformation: '',
         postalCode: '',
         country: '',
         city: '',
         region: '',
       }}
       validationSchema={AddressSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched, values, handleChange, handleBlur }) => (
        <Form className="contact-form-style">
        <div className="postalCode-field-error-containter">
        <div>Postal Code</div>
        <Field 
        name="postalCode" 
        type="postalCode" 
        className="postalCode-field"/>
        {errors.postalCode && touched.postalCode ? 
        <span className="postalCode-error">{errors.postalCode}</span> : null}
        </div>
        <div className="other-field-error-container">
        <div>Other Information (optional)</div>
        <Field 
        name="otherInformation"
        className="other-field"
        />
        {errors.otherInformation && touched.otherInformation ? 
        <span className="other-error">
        {errors.otherInformation}</span> : null}
        </div>
           <div className="postal-country-container">
               <div className="postal-error-container">
               <div>Postal Code</div>
                <Field 
                name="postal"
                className="postal-address-field"
                    />
                    {errors.postalCode && touched.postalCode ? (
                    <span
                    className="postal-error"
                    >{errors.postalCode}</span>) : null}
                </div>
                <div className="country-container">
                <div>Country</div>
                <CountryDropdown
                name="country-field"
                value={values.country}
                onChange={(_, e) => handleChange(e)}
                onBlur={handleBlur}
                    />
                  {errors.country && touched.country ? (
                  <span className="country-error"
                  >{errors.country}</span>) : null}
                </div>
          </div>
        <div className="city-state-container">
          <div className="other-field-error-container">
            <div>City</div>
            <Field 
            name="city"
            className="city-field"
            />
            {errors.city && touched.city ? 
            <span className="city-error">
            {errors.city}</span> : null}
            </div>
            <div className="region-error-container">
            <div>State/Religion/Province</div>
            <Field 
            name="regionProvince"
            className="region-field"
            />
            {errors.region && touched.region ? 
            <span className="region-error">
            {errors.region}</span> : null}
            </div>
        </div>
         </Form>
       )}
     </Formik>
   </div>
)

export default ShippingAddress; 
