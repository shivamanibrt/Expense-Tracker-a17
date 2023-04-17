import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CustomInput } from '../../Components/Custom-input/CustomInput';

const Register = () => {
    const inputField = [
        {
            label: 'First Name', name: 'fName', placeholder: 'John', required: true
        },
        {
            label: 'Last Name', name: ':lName', placeholder: 'Doe', required: true
        },
        {
            label: 'Email',
            type: 'email',
            name: 'johndoe@email.com',
            placeholder: 'John',
            required: true
        },
        {
            label: 'Password',
            type: 'password',
            name: 'password',
            placeholder: '******',
            required: true
        },
        {
            label: 'Confirm Password',
            type: 'password',
            name: 'confirm password',
            placeholder: '******',
            required: true
        }
    ]
    return (
        <div className='form-container'>
            <Form className='border p-5 rounded shadow-lg'>
                <h3>Hola !</h3>
                {inputField.map((item, i) => {
                    return <CustomInput {...item} />
                })}

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>

    )
}
export default Register;
