import React, {useState} from "react";
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const AccountInfoSchema = Yup.object().shape({
    dataCategories: Yup.string().required('Data Categories is required'),
    dataDescription: Yup.string().required('Data Description is required')
});

const Categories: React.FC = () => {

    const [submitting, setSubmitting] = useState(false);

    const UpdateCategories = async (values: any) => {
        setSubmitting(true);
        try {
            const bearerToken = localStorage.getItem('token');
            if (!bearerToken) {
                throw new Error('Token not found in localStorage');
            }

            const response = await fetch('https://library-crud-sample.vercel.app/api/category/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${bearerToken}`,
                },
                body: JSON.stringify({
                    "category_name": values.dataCategories,
                    "category_description": values.dataDescription,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            const responseData = await response.json();
            console.log('API response:', responseData);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={{ dataCategories: '', dataDescription: '' }}
            validationSchema={AccountInfoSchema}
            onSubmit={UpdateCategories}
        >
            {() => (
                <Form className="flex flex-col items-center">
                    <h2 className="text-3xl mb-6">Your Categories</h2>
                    <div className="w-full max-w-xs">
                        <div className="mb-4">
                            <label className="text-xl" htmlFor="dataCategories">Categories</label>
                            <Field className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" type="text" name="dataCategories" />
                            <ErrorMessage className="text-red-500" name="dataCategories" component="div" />
                        </div>
                        <div>
                            <label className="text-xl" htmlFor="dataDescription">Description</label>
                            <Field className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" type="text" name="dataDescription" />
                            <ErrorMessage className="text-red-500" name="dataDescription" component="div" />
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Add New</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
export default Categories;