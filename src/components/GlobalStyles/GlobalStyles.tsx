import React, { ReactNode } from 'react';
import './GlobalStyles.scss';

type ChildrenProps = {
    children: ReactNode;
};

function GlobalStyles({ children }: ChildrenProps) {
    return React.Children.only(children);
}

export default GlobalStyles;
