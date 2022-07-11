import React from 'react';
import {Form, Field} from 'react-final-form'
import { render } from 'react-dom'
import { authAPI } from '../../api/api';

//types
type ValuesType = {
    email: string
    password: string
    rememberMe?: boolean,
    captcha?: boolean,
}
type LoginFormPropsType = {
    onSubmit: (values: any) => void
}
type ErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean,
    captcha?: boolean,
}


const Login = () => {
    const onSubmit = (values:ValuesType) => {
        window.alert(JSON.stringify(values))
        debugger
        authAPI.login(values).then(response => {
            window.alert(JSON.stringify(response))
        });
    }

    return <div>
        <div><h1>LOGIN FORM</h1></div>
        <LoginForm onSubmit={onSubmit}/>
    </div>
}

const LoginForm = (props: LoginFormPropsType) => (
    <div>

        <Form
            onSubmit={props.onSubmit}
            validate={values => {
                const errors:ErrorType = {}
                if (!values.email) {
                    errors.email = 'Required'
                }
                if (!values.password) {
                    errors.password = 'Required'
                }
                /*if (!values.confirm) {
                    errors.confirm = 'Required'
                } else if (values.confirm !== values.password) {
                    errors.confirm = 'Must match'
                }*/
                return errors
            }}
            render={({handleSubmit, form, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit}>
                    <Field name="email">
                        {({input, meta}) => (
                            <div>
                                <label>Username</label>
                                <input {...input} type="text" placeholder="Username"/>
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <Field name="password">
                        {({input, meta}) => (
                            <div>
                                <label>Password</label>
                                <input {...input} type="password" placeholder="Password"/>
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    {/*<Field name="confirm">
                        {({input, meta}) => (
                            <div>
                                <label>Confirm</label>
                                <input {...input} type="password" placeholder="Confirm"/>
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>*/}
                    <Field name="rememberMe">
                        {({input, meta}) => (
                            <div>
                                <label>remember me</label>
                                <input {...input} type="checkbox" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>

                    <Field name="captcha">
                        {({input, meta}) => (
                            <div>
                                <label>Confirm</label>
                                <input {...input} type="text" placeholder={"captha"}/>
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>


                    <div className="buttons">
                        <button type="submit"
                                disabled={submitting}>
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                        >
                            Reset
                        </button>
                    </div>
                    <pre>{JSON.stringify(values)}</pre>
                </form>
            )}
        />

    </div>
)
/*
return (
    <Form>
        onSubmit={onSubmit}
        validate={validate}
        <div>
            username:
            <Field placeholder={"login"}/>
        </div>
        <div>
            password:
            <input type={'password'} placeholder={'password'}/>
        </div>
        <div>
            <input type={'checkbox'}/> Remember me
        </div>
        <div>
            <button>LogIn</button>
        </div>
    </Form>
)

 */

export default Login