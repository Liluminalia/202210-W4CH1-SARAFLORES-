import { PointingMenInfo } from "./models/data";
import { IGentleman } from "./models/IGentleman";

export function Button() {
    return (
        <>
            <button
                className="button button--select"
                onClick={() => {
                    PointingMenInfo.map((i: IGentleman) => (i.selected = true));
                }}
            >
                Select all
            </button>
        </>
    );
}
