import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { reactLocalStorage } from 'reactjs-localstorage';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

class AddFriend extends Component {
    render() {
        return (
            <div className="container pt-5">
                <div className="row">
                    <div className="col-6">
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                phone: ''
                            }}
                            validationSchema={yup.object().shape({
                                name: yup.string()
                                    .required("Name is required"),
                                email: yup.string()
                                    .email("Email is invalid")
                                    .required("Email is required"),
                                phone: yup.string()
                                    .matches(phoneRegExp, 'Phone number is invalid')
                                    .min(10, "Phone number must be at least 10 characters")
                                    .max(11, "Phone number must be less than 11 characters")
                                    .required("Phone number is required"),
                            })}
                            onSubmit = {async (fields, {resetForm}) => {
                                let { dispatch } = this.props;
                                await dispatch({ type: 'ADD_FRIEND', data: fields });
                                reactLocalStorage.setObject('friendList', {list: this.props.friendList});
                                resetForm({});
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="name"><b>Name</b></label>
                                        <Field
                                            name="name"
                                            type="text"
                                            className={
                                                "form-control" +
                                                (errors.name && touched.name ? " is-invalid" : "")
                                            }
                                        />
                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                            className="invalid-feedback"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email"><b>Email</b></label>
                                        <Field
                                            name="email"
                                            type="text"
                                            className={
                                                "form-control" +
                                                (errors.email && touched.email ? " is-invalid" : "")
                                            }
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="invalid-feedback"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone"><b>Phone Number</b></label>
                                        <Field
                                            name="phone"
                                            type="text"
                                            className={
                                                "form-control" +
                                                (errors.phone && touched.phone ? " is-invalid" : "")
                                            }
                                        />
                                        <ErrorMessage
                                            name="phone"
                                            component="div"
                                            className="invalid-feedback"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((store) => {
    return {
        friendList: store.list
    }
})(AddFriend);