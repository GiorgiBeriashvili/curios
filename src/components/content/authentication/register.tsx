import HalfMoon from 'halfmoon';
import React, { useCallback, useEffect, useState } from 'react';
import { toastAlert } from '../../shared/Toast';
import { toggleVisibility } from '../../shared/PasswordVisibilityToggler';
import './main.css';

const regex = {
    username: /^([A-Za-z0-9\-_]+)$/,
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^.{8,}$/,
};

const Register: React.FunctionComponent = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmationPassword, setConfirmationPassword] = useState('');

    const [isValidUsername, setIsValidUsername] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [isValidConfirmationPassword, setIsValidConfirmationPassword] = useState(false);

    const [canSubmit, setCanSubmit] = useState(false);

    const validateFields = useCallback(() => {
        if (
            username !== '' &&
            email !== '' &&
            password !== '' &&
            confirmationPassword !== '' &&
            isValidUsername &&
            isValidEmail &&
            isValidPassword &&
            isValidConfirmationPassword
        ) {
            setCanSubmit(true);
        } else {
            setCanSubmit(false);
        }
    }, [
        username,
        email,
        password,
        confirmationPassword,
        isValidUsername,
        isValidEmail,
        isValidPassword,
        isValidConfirmationPassword,
    ]);

    useEffect(() => {
        HalfMoon.onDOMContentLoaded();

        if (username === '') {
            setIsValidUsername(true);
        } else if (!regex.username.test(username)) {
            setIsValidUsername(false);
        } else {
            setIsValidUsername(true);
        }

        if (email === '') {
            setIsValidEmail(true);
        } else if (!regex.email.test(email)) {
            setIsValidEmail(false);
        } else {
            setIsValidEmail(true);
        }

        if (password === '') {
            setIsValidPassword(true);
        } else if (!regex.password.test(password)) {
            setIsValidPassword(false);
        } else {
            setIsValidPassword(true);
        }

        if (confirmationPassword === '') {
            setIsValidConfirmationPassword(true);
        } else if (!regex.password.test(confirmationPassword) || password !== confirmationPassword) {
            setIsValidConfirmationPassword(false);
        } else {
            setIsValidConfirmationPassword(true);
        }

        validateFields();
    }, [
        username,
        email,
        password,
        confirmationPassword,
        isValidUsername,
        isValidEmail,
        isValidPassword,
        isValidConfirmationPassword,
        validateFields,
    ]);

    return (
        <div className="w-400">
            <form action="#" method="POST" className="card shadow" onSubmit={(event) => event.preventDefault()}>
                <h1 className="content-title" style={{ textAlign: 'center' }}>
                    Register
                </h1>
                <div className={isValidUsername ? 'form-group' : 'form-group is-invalid'}>
                    <label htmlFor="username" className="required">
                        Username
                    </label>
                    {!isValidUsername && (
                        <div className="invalid-feedback">
                            <ul>
                                <li>Only letters, numbers, dashes and underscores allowed.</li>
                            </ul>
                        </div>
                    )}
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span
                                className="input-group-text pl-10 pr-10"
                                data-toggle="tooltip"
                                data-title="Only letters, numbers, dashes and underscores allowed."
                            >
                                <i className="fa fa-user-o"></i>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            placeholder="Username"
                            required
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            autoFocus
                            autoComplete="username"
                        />
                    </div>
                </div>
                <div className={isValidEmail ? 'form-group' : 'form-group is-invalid'}>
                    <label htmlFor="email" className="required">
                        Email
                    </label>
                    {!isValidEmail && (
                        <div className="invalid-feedback">
                            <ul>
                                <li>Must be formatted as an email address.</li>
                            </ul>
                        </div>
                    )}
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span
                                className="input-group-text pl-10 pr-10"
                                data-toggle="tooltip"
                                data-title="Must be formatted as an email address."
                            >
                                <i className="fa fa-envelope-o"></i>
                            </span>
                        </div>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="email@example.com"
                            required
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            autoComplete="email"
                        />
                    </div>
                </div>
                <div className={isValidPassword ? 'form-group' : 'form-group is-invalid'}>
                    <label htmlFor="password" className="required">
                        Password
                    </label>
                    {!isValidPassword && (
                        <div className="invalid-feedback">
                            <ul>
                                <li>Must be at least 8 characters long.</li>
                            </ul>
                        </div>
                    )}
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span
                                className="input-group-text"
                                style={{ paddingLeft: '15px', paddingRight: '15px' }}
                                data-toggle="tooltip"
                                data-title="Must be at least 8 characters long."
                            >
                                <i className="fa fa-lock"></i>
                            </span>
                        </div>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                            autoComplete="new-password"
                        />
                        <div className="input-group-append">
                            <span
                                className="input-group-text"
                                id="password-toggle"
                                style={{ cursor: 'pointer' }}
                                onClick={() => toggleVisibility(`#password`, '#password-toggle')}
                                data-toggle="tooltip"
                                data-title="Show Text"
                            >
                                <i className="fa fa-eye"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={isValidConfirmationPassword ? 'form-group' : 'form-group is-invalid'}>
                    <label htmlFor="confirm-password" className="required">
                        Confirm password
                    </label>
                    {!isValidConfirmationPassword && (
                        <div className="invalid-feedback">
                            <ul>
                                <li>Must match the above password exactly.</li>
                            </ul>
                        </div>
                    )}
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span
                                className="input-group-text"
                                style={{ paddingLeft: '15px', paddingRight: '15px' }}
                                data-toggle="tooltip"
                                data-title="Must match the above password exactly."
                            >
                                <i className="fa fa-lock"></i>
                            </span>
                        </div>
                        <input
                            type="password"
                            className="form-control"
                            id="confirm-password"
                            name="password_confirmation"
                            placeholder="Confirm password"
                            value={confirmationPassword}
                            onChange={(event) => setConfirmationPassword(event.target.value)}
                            required
                            autoComplete="new-password"
                        />
                        <div className="input-group-append">
                            <span
                                className="input-group-text"
                                id="change-password-toggle"
                                style={{ cursor: 'pointer' }}
                                onClick={() => toggleVisibility(`#confirm-password`, '#change-password-toggle')}
                                data-toggle="tooltip"
                                data-title="Show Text"
                            >
                                <i className="fa fa-eye"></i>
                            </span>
                        </div>
                    </div>
                </div>
                {canSubmit ? (
                    <input
                        className="btn btn-primary btn-block"
                        type="submit"
                        value="Submit"
                        onClick={() =>
                            toastAlert(
                                'You have successfully registered!',
                                'Registration Status',
                                'alert-success',
                                'filled',
                            )
                        }
                    />
                ) : (
                    <input className="btn btn-primary btn-block" type="submit" value="Submit" disabled />
                )}
            </form>
        </div>
    );
};

export default Register;
