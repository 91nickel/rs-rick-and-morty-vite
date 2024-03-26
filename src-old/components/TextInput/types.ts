export enum FieldTypes {
    text = 'text',
    password = 'password',
    email = 'email',
}

export enum TextFieldVariants {
    default = 'default',
    filled = 'filled',
    unstyled = 'unstyled',
}

export enum FieldSizes {
    sm, md, lg
}

export interface ITextFieldStaticProps {
    name: string
    type: string
    className: string
    defaultValue: string
    text?: string
}

export interface ITextFieldControllableProps {
    placeholder: string
    label: string
    description: string
    error: string
    variant: TextFieldVariants
    radius: number
    size: number
    disabled: boolean
    required: boolean
}

export default interface ITextFieldCommonProps extends ITextFieldStaticProps, ITextFieldControllableProps {
}
