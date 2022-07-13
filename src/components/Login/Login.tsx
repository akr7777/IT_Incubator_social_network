import React from 'react';
import {Form, Field} from 'react-final-form'
import { render } from 'react-dom'
import { authAPI } from '../../api/api';
import { FORM_ERROR } from 'final-form';
import { LoginPropsType } from './LoginContainer';

//types
export type ValuesType = {
    email: string
    password: string
    rememberMe?: boolean,
    captcha?: boolean,
}
type LoginFormPropsType = {
    authError: boolean,
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
        /*let loginResult = props.onLoginRequest(values);
        if (loginResult === 0) return { [FORM_ERROR]: 'Login Failed 0000000' };
            else return { [FORM_ERROR]: 'Login Failed 1111111' }*/
    }

    return <div>
        <div><h1>LOGIN FORM</h1></div>
        <LoginForm onSubmit={onSubmit} authError={props.authError}/>
        { props.isAuth && <div>{ <button onClick={props.logoutProcedure}>LOGOUT!</button> }</div> }
    </div>
}

const LoginForm = (props: LoginFormPropsType) => (
    <div>
        <Form
            name={'login'}
            onSubmit={values => props.onSubmit(values as ValuesType)}
            //onSubmit={onSubmitFormFunction1}
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

                    {/*{<div>___ {submitError} ___ </div>}*/}
                    <div>Err:</div>
                    { props.authError && <div>Bad credentials!</div>}

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