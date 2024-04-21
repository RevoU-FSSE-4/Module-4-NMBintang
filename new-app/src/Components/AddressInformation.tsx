import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


interface AddressInfoFormProps {
    nextStep: () => void;
}

const AddressInfoSchema = Yup.object().shape({
    streetAddress: Yup.string().required('Street Address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zipCode: Yup.string().matches(/^\d{5}(-\d{4})?$/, 'Invalid Zip Code').required('Zip Code is required'),
});

const AddressInfoForm: React.FC<AddressInfoFormProps> =({nextStep}) =>
    
    <Formik
        initialValues={{ streetAddress: '', city: '', state: '', zipCode: '' }}
        validationSchema={AddressInfoSchema}
        onSubmit={(values) => {
        console.log(values);
        }}
    >
        {() => (
        <Form>
            <h2>Address Information</h2>
            <div>
                <label htmlFor="streetAddress">Street Address</label>
                <Field type="text" name="streetAddress" />
                <ErrorMessage name="streetAddress" component="div" />
            </div>

            <div>
                <label htmlFor="city">City</label>
                <Field type="text" name="city" />
                <ErrorMessage name="city" component="div" />
            </div>

            <div>
                <label htmlFor="state">State</label>
                <Field type="text" name="state" />
                <ErrorMessage name="state" component="div" />
            </div>

            <div>
                <label htmlFor="zipCode">Zip Code</label>
                <Field type="text" name="zipCode" />
                <ErrorMessage name="zipCode" component="div" />
            </div>

            <button type="submit">Next</button>
        </Form>
        )}
    </Formik>

export default AddressInfoForm;