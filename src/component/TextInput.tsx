import React from 'react'
import ITextFieldCommonProps, { FieldSizes, TextFieldVariants } from '../interface/input.field'

interface ITextFieldProps extends ITextFieldCommonProps {
    onChange: (value: string) => void
    onInput: (value: string) => void
}

const TextInput = ({name, label, description, text, required, className, error, variant, radius, size, onChange, onInput, ...restProps}: ITextFieldProps) => {

    function handleChange(event: React.FormEvent<HTMLInputElement>) {
        const target = event.target as HTMLInputElement
        onChange(target.value)
    }

    const getInputClasses = () => {
        const classes = []
        if (variant !== TextFieldVariants.unstyled)
            classes.push('form-control')

        if (variant === TextFieldVariants.filled)
            classes.push('bg-light')

        if (error)
            classes.push('is-invalid')

        classes.push(`form-control-${FieldSizes[size]}`)

        return classes.join(' ')
    }

    const style: React.CSSProperties = {
        borderRadius: `${radius}px`,
    }

    return (
        <div className={className}>
            <label htmlFor={name}>
                {label}
                {required && <span className="text-danger ps-1">*</span>}
            </label>
            {description && <p><small className="text-secondary">{description}</small></p>}
            <div className="input-group has-validation">
                {text && <span className="input-group-text">{text}</span>}
                <input
                    {...restProps}
                    style={style}
                    className={`${className} ${getInputClasses()}`}
                    onChange={handleChange}
                    onInput={handleChange}
                />
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    )
}

export default TextInput
