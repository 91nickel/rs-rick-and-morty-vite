import React, { useRef, useState }       from 'react'
import TextInput                         from "./TextInput";
import ITextFieldCommonProps             from "interface/input.field";
import { FieldTypes, TextFieldVariants } from 'interface/input.field'

enum FieldNames {
    login = 'login',
    password = 'password',
}

export type IFormValues = {
    [key in FieldNames]: string;
};

interface IProps {
    onSubmit: Function
}

interface IFormFieldDescription extends ITextFieldCommonProps {
    name: FieldNames
    type: FieldTypes
}

const formFields: Array<IFormFieldDescription> = [
    {
        name: FieldNames.login,
        className: '',
        type: FieldTypes.text,
        defaultValue: '',

        placeholder: '',
        label: 'Login',
        description: '',
        error: '',
        variant: TextFieldVariants.default,
        radius: 4,
        size: 1,
        disabled: false,
        required: true,
    },
    {
        name: FieldNames.password,
        className: '',
        type: FieldTypes.password,
        defaultValue: '',

        placeholder: '',
        label: 'Password',
        description: '',
        error: '',
        variant: TextFieldVariants.default,
        radius: 4,
        size: 1,
        disabled: false,
        required: true,
    },
]

const defaultValues = Object.assign({}, ...formFields.map(f => ({[f.name]: ''}))) as IFormValues

const SignInForm = ({onSubmit}: IProps) => {

    const [errors, setErrors] = useState(defaultValues)
    const values = useRef(defaultValues)

    function handleChange(name: FieldNames, value: string) {
        values.current = {...values.current, [name]: value}
    }

    function handleSubmit(event: React.FormEvent) {
        console.log(event)
        event.preventDefault()
        onSubmit(values.current)
    }

    return (
        <form onSubmit={handleSubmit}>
            {
                formFields.map((field: IFormFieldDescription, i) => {
                    return (
                        <TextInput
                            key={field.name}
                            {...field}
                            error={errors[field.name] || ''}
                            onInput={(value: string) => handleChange(field.name, value)}
                            onChange={(value: string) => handleChange(field.name, value)}
                        />
                    )
                })
            }
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    )
}

export default SignInForm
