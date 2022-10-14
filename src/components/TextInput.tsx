import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className='w-full py-4 px-3 flex items-center gap-3 bg-gray-800 rounded focus-within:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
    return (
        <Slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputField(props: TextInputFieldProps) {
    return (
        <input className='bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400'
            {...props}
        />

    )
}

TextInputField.displayName = 'TextInput.Field'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputField,
    Icon :TextInputIcon,
}