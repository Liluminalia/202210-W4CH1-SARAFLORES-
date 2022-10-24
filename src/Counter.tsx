import { useEffect, useState } from "react";
interface IState {
    counter: number;
    user: string;
}

export function Counter() {
    const initialState: IState = {
        counter: 0,
        user: "pepe",
    };
    const [state, setState] = useState(initialState);
    useEffect(() => {
        console.log(state);
    }, [state]);
    const handlerCounter = (value: number) => {
        // counter = counter + value;
        setState({ ...state, counter: state.counter + value });
    };
    return (
        <>
            <section className="controls">
                <p className="info">
                    {state.counter} gentlemen pointing at you
                </p>
                <button className="button button--select">Select all</button>
            </section>
        </>
    );
}
