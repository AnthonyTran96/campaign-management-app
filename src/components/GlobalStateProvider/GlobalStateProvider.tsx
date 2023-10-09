import { ReactNode, createContext, useReducer } from 'react';
import { initState, Campaign } from '../../reducer/states';
import reducer from '../../reducer';
import { Action } from '../../reducer/actions';

interface ChildrenProp {
    children: ReactNode;
}

export type GlobalStateType = {
    state: Campaign;
    dispatch: React.Dispatch<Action>;
};

export const GlobalStateContext = createContext<GlobalStateType>({
    state: initState,
    dispatch: () => {},
});

function GlobalStateProvider({ children }: ChildrenProp) {
    const [state, dispatch] = useReducer(reducer, initState);

    return <GlobalStateContext.Provider value={{ state, dispatch }}>{children}</GlobalStateContext.Provider>;
}

export default GlobalStateProvider;
