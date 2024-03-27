import React, { useRef, useState } from 'react'
import { useForm, UseFormReturnType } from '@mantine/form'
import { Box, Button, PasswordInput, TextInput } from '@mantine/core'

enum FieldNames {
    login = 'login',
    password = 'password',
}

interface IProps {
    onSubmit: Function
}

const SignInForm = ({onSubmit}: IProps) => {

    const initialValues = {
        [FieldNames.login]: '',
        [FieldNames.password]: '',
    }

    const form = useForm(
        {
            name: 'auth',
            initialValues,
            initialErrors: {...initialValues},
            validate: (values) => {
                return {
                    [FieldNames.login]: values[FieldNames.login].trim().length < 6
                        ? 'Login must include at least 6 characters'
                        : null,
                    [FieldNames.password]: values[FieldNames.password].length < 6
                        ? 'Password must include at least 6 characters'
                        : null,
                }
            },
        }
    )

    function handleChange(name: FieldNames, value) {
        // console.log('handleChange', name, value)
        form.setValues({[name]: value})
        form.validate()
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        console.log(form.values)
        if (!form.validate().hasErrors) {
            onSubmit(form.values)
        }
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            w={{base: 320, sm: 400, lg: 500}}
        >
            <TextInput
                mb="md"
                label="Логин"
                description=""
                required={true}
                error={form.errors[FieldNames.login] || ''}
                onInput={value => handleChange(FieldNames.login, value)}
                onChange={value => handleChange(FieldNames.login, value)}
                {...form.getInputProps(FieldNames.login)}
            />
            <PasswordInput
                mb="md"
                label="Пароль"
                description=""
                required={true}
                error={form.errors[FieldNames.password] || ''}
                onInput={value => handleChange(FieldNames.password, value)}
                onChange={value => handleChange(FieldNames.password, value)}
                {...form.getInputProps(FieldNames.password)}
            />
            <Button type="submit" variant="filled">Login</Button>
        </Box>
    )
}

export default SignInForm
