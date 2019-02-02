import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    onFormSubmit(formValues) {
        console.log(formValues);
    }

    renderInput({ input, label, meta }) {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
                <div>{meta.error}</div>
            </div>
        );
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
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
    form: 'streamCreate',
    validate
})(StreamCreate);
