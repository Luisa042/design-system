import {Slot} from '@radix-ui/react-slot';
import {clsx} from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({children, asChild, className, ...props}: ButtonProps) {
    const Component = asChild ? Slot : 'button'

    return (
        <Component className={clsx(
            'px-4 py-3 bg-cyan-500 rounded font-semibold font-sans text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white', className
        )} {...props}>
            {children}
        </Component>
    )
}