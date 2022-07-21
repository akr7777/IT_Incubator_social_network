import React from 'react';
import {Form, Field} from 'react-final-form'
import { render } from 'react-dom'
import { FORM_ERROR } from 'final-form';
import { LoginPropsType } from './LoginContainer';
import { Navigate } from 'react-router-dom';
import { authAPI } from '../../api/api';
//types
export type ValuesType = {
    email: string
    password: string
    rememberMe?: boolean,
    captcha?: boolean,
}
type LoginFormPropsType = {
    authError: string | null,
    onSubmit: (values: ValuesType) => void,
    //onSubmit: (values: ValuesType) => { "FINAL_FORM/form-error": string; },
}
type ErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean,
    captcha?: boolean,
}

const Login = (props: LoginPropsType) => {
    //debugger;
    const onSubmit = (values: ValuesType) => {
        props.onLoginRequest(values);
    }

    return <div>
        { props.isAuth && <Navigate to={'/profile'}/>}
        <div><h1>LOGIN FORM</h1></div>
        <LoginForm onSubmit={onSubmit} authError={props.authError}/>
        { props.isAuth && <div>{ <button onClick={props.logoutProcedure}>LOGOUT!</button> }</div> }
        <hr/><hr/><hr/>
    </div>
}

const LoginForm = (props: LoginFormPropsType) => (
    <div>
        <Form
            name={'login'}
            onSubmit={values => props.onSubmit(values as ValuesType)}
            validate={values => {
                const errors:ErrorType = {}
                if (!values.email) {
                    errors.email = 'Required'
                }
                if (!values.password) {
                    errors.password = 'Required'
                }
                return errors
            }}

            render={({submitError, handleSubmit, form, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit}>
                    <Field name="email">
                        {({input, meta}) => (
                            <div>
                                <label>email</label>
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

                    {/* ERRROR MESSAGE */}
                    { props.authError && <div>{props.authError}</div>}

                    <div className="buttons">
                        <button type="submit"
                                disabled={submitting}>
                            Submit
                        </button>
                        {/*<button
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                        >
                            Reset
                        </button>*/}
                    </div>
                    <pre>{JSON.stringify(values)}</pre>

                </form>
            )}
        />

    </div>
)

export default Login