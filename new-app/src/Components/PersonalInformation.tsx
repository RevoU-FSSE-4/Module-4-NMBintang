import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PersonalInfoSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    dob: Yup.date().required('Date of Birth is required'),
    });

const PersonalInfoForm: React.FC = () => {
    return (
    <Formik
        initialValues={{ fullName: '', email: '', dob: '' }}
        validationSchema={PersonalInfoSchema}
        onSubmit={(values) => {
        console.log(values);
        }}
    >
        {() => (
        <Form>
            <h2>Personal Information</h2>
            <div>
                <label htmlFor="fullName">Full Name</label>
                <Field type="text" name="fullName" />
                <ErrorMessage name="fullName" component="div" />
            </div>

            <div>
                <label htmlFor="email">Email Address</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
            </div>

            <div>
                <label htmlFor="dob">Date of Birth</label>
                <Field type="date" name="dob" />
                <ErrorMessage name="dob" component="div" />
            </div>
            
            <button type="submit">Next</button>
        </Form>
        )}
    </Formik>
    );
};

export default PersonalInfoForm;
