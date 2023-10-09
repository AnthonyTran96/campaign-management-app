import React, { ReactNode, MouseEvent } from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

type ButtonProps = {
    bold?: boolean;
    children: ReactNode;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    className: string;
};

function Button({ bold = false, children, className, ...passProps }: ButtonProps) {
    const props: any = {
        onclick,
        ...passProps,
    };
    const classes = cx({
        [className]: className,
        bold,
    });
    return (
        <div className={classes} {...passProps}>
            Button
        </div>
    );
}

export default Button;
