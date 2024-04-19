import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AccountInfoSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required').matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number'
    ),
});

const AccountInfoForm: React.FC = () => {
    return (
    <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={AccountInfoSchema}
        onSubmit={(values) => {
        console.log(values);
        }}
    >
        {() => (
        <Form>
            <h2>Account Information</h2>
            <div>
                <label htmlFor="username">Username</label>
                <Field type="text" name="username" />
                <ErrorMessage name="username" component="div" />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
            </div>

            <button type="submit">Submit</button>
        </Form>
        )}
    </Formik>
    );
};

export default AccountInfoForm;