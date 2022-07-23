import React from 'react';
import {Form, Field} from 'react-final-form'
import { render } from 'react-dom'
import { FORM_ERROR } from 'final-form';
import { Navigate } from 'react-router-dom';
import { authAPI } from '../../api/api';
import s from './Login.module.css';

//types
export type ValuesType = {
    email: string
    password: string
    rememberMe?: boolean,
    captcha?: string,
}
type LoginFormPropsType = {
    authError: string | null,
    onSubmit: (values: ValuesType) => void,
    capchaURL: string,
    //onSubmit: (values: ValuesType) => { "FINAL_FORM/form-error": string; },
}
type ErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean,
    captcha?: string,
}

type LoginPropsType1 = {
    isAuth: boolean,
    authError: string | null,
    captchaURL: string,

    onLoginRequest: (values:ValuesType) => void,
    logoutProcedure: () => void,

    /*id: number,
    email: string,
    login: string,*/
}

const Login = (props: LoginPropsType1) => {
    //debugger
    const onSubmit = (values: ValuesType) => {
        props.onLoginRequest(values);
    }

    return <div>
        { props.isAuth && <Navigate to={'/profile'}/>}
        <div><h1>LOGIN FORM</h1></div>
        <LoginForm onSubmit={onSubmit} authError={props.authError} capchaURL={props.captchaURL}/>
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
                if (props.capchaURL && !values.captcha) {
                    errors.captcha = 'Required'
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

                    {/*-------------CAPTCHA---------------*/}
                    {
                        props.capchaURL &&
                        <Field name="captcha">
                            {({input, meta}) => (
                                <div>
                                    <div>
                                        <label>Confirm</label>
                                    </div>
                                    <div>
                                        <img src={props.capchaURL}/>
                                    </div>
                                    <div>
                                        <input {...input} type="text" placeholder={"captha"}/>
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                </div>
                            )}
                        </Field>
                    }


                    {/* ERRROR MESSAGE */}
                    { props.authError && <div className={s.error_div}> <label className={s.error_text}> {props.authError} </label></div>}

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
                    {/*<pre>{JSON.stringify(values)}</pre>*/}

                </form>
            )}
        />

    </div>
)

export default Login