import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

    onFormSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        const errorClass = `field ${meta.touched && meta.error ? 'error' : ''}`;
        return (
            <div className={errorClass}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        );
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter title " />
                <Field name="description" component={this.renderInput} label="Enter description" />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
};

export default reduxForm({
    form: 'StreamForm',
    validate
})(StreamForm);