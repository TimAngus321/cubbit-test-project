import React from 'react';
import Header from '/Users/timothyangus/code/TimAngus321/challenges/cubbit-test-project/src/Screens/Components/header';
import ContactInfoForm from '/Users/timothyangus/code/TimAngus321/challenges/cubbit-test-project/src/Screens/Components/contact-info-validation';
import ShippingAddress from "/Users/timothyangus/code/TimAngus321/challenges/cubbit-test-project/src/Screens/Components/shipping-address";

const Checkout = () => {
    return (
        <div>
            <Header />
            <ContactInfoForm />
            <ShippingAddress />
        </div> 
    )
}

export default Checkout;