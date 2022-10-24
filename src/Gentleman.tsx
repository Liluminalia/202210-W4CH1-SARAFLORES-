import { PointingMenInfo } from "./models/data";

export function Gentleman() {
    return PointingMenInfo.forEach((i: any) => {
        <>
            <li className="gentleman">
                <div className="gentleman__avatar-container">
                    <img
                        className="gentleman__avatar"
                        src={"img/" + PointingMenInfo[i].picture}
                        alt={PointingMenInfo[i].alternativeText}
                    />
                    <span className="gentleman__initial">F</span>
                </div>
                <div className="gentleman__data-container">
                    <h2 className="gentleman__name">
                        {PointingMenInfo[i].name}
                    </h2>
                    <ul className="gentleman__data-list">
                        <li className="gentleman__data">
                            <span className="gentleman__data-label">
                                Profession:
                            </span>
                            {PointingMenInfo[i].profession}
                        </li>
                        <li className="gentleman__data">
                            <span className="gentleman__data-label">
                                Status:
                            </span>{" "}
                            {PointingMenInfo[i].status}
                        </li>
                        <li className="gentleman__data">
                            <span className="gentleman__data-label">
                                Twitter:
                            </span>{" "}
                            {PointingMenInfo[i].twitter}
                        </li>
                    </ul>
                </div>
                <i className="icon gentleman__icon fas fa-check"></i>
                <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
            </li>
        </>;
    });
}
