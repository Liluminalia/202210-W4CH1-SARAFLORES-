import { useEffect, useState } from "react";
export function Info() {
    const [counter, setCounter] = useState(0);
    useEffect(() => {}, [counter]);

    const selectAll = (value: number) => {
        //pendiente arreglar
        setCounter(counter + value);
    };
    return (
        <>
            <section className="controls">
                <p className="info">{counter} gentlemen pointing at you</p>
                <button
                    className="button button--select"
                    onClick={() => {
                        //pendiente arreglar
                        selectAll(-1);
                    }}
                >
                    Select all
                </button>
            </section>
        </>
    );
}
