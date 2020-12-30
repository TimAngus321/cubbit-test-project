// import React from 'react';
// import Yup from 'yup';
// import {
//     Formik,
//     FormikHelpers,
//     FormikProps,
//     Form,
//     Field,
//     FieldProps,
//     withFormik,
//     FormikErrors,
//   } from 'formik';

// interface ContactInfoForm {
//     email: string;
//     phoneNumber: string;
//     firstName: string;
//     lastName: string;
//   }

//   interface OtherProps {
//     message: string;
//   }
 
//   const InnerForm = (props: OtherProps & FormikProps<ContactInfoForm>) => {
//       const { touched, errors, isSubmitting, message } = props;
//       return (
//         <Form>
//         <h1>{message}</h1>
//         <Field type="email" name="email" />
//         {touched.email && errors.email && <div>{errors.email}</div>}
  
//         <Field type="phoneNumber" name="phoneNumber" />
//         {touched.phoneNumber && errors.phoneNumber && <div>{errors.phoneNumber}</div>}
  
//         <Field type="firstName" name="firstName" />
//         {touched.firstName && errors.firstName && <div>{errors.firstName}</div>}

//         <Field type="lastName" name="lastName" />
//         {touched.lastName && errors.lastName && <div>{errors.lastName}</div>}

//         <button type="submit" disabled={isSubmitting}>
//           Submit
//         </button>
//       </Form>
//       )
//   }

//   interface MyFormProps {
//       initialEmail?: string;
//       phoneNumber: string;
//       fristName: string;
//       lastName: string;
//       message: string;
//   }

//   const ContactForm = withFormik<MyFormProps, ContactInfoForm>({
//     mapPropsToValues: props => {
//       return {
//         email: props.initialEmail || '',
//         phoneNumber: '',
//         firstName: '',
//         lastName: '',
//       };
//     },

//     validate: (values: ContactInfoForm) => {
//         let errors: FormikErrors<ContactInfoForm> = {};
//         if (!values.email) {
//           errors.email = 'Required';
//         } else if (!isValidEmail(values.email)) {
//           errors.email = 'Invalid email address';
//         }
//         return errors;
//       },
    
//       handleSubmit: values => {
//         // do submitting things
//       },
//     })(InnerForm);
  
//     const ContactInformationForm = () => {
//         <div>
//         <h1>My App</h1>
//         <p>This can be anywhere in your application</p>
//         <ContactForm message="Contact Info" />
//             </div>
//     };

//     export default ContactInformationForm;