import { PointingMenInfo } from "./models/data";
import { IGentleman } from "./models/IGentleman";

export function Gentleman() {
    return (
        <>
            {PointingMenInfo.map((i: IGentleman) => (
                <li className="gentleman">
                    <div className="gentleman__avatar-container">
                        <img
                            className="gentleman__avatar"
                            src={"img/" + i.picture}
                            alt={i.alternativeText}
                        />
                        <span className="gentleman__initial">
                            {i.name.slice(0, 1)}
                        </span>
                    </div>
                    <div className="gentleman__data-container">
                        <h2 className="gentleman__name">{i.name}</h2>
                        <ul className="gentleman__data-list">
                            <li className="gentleman__data">
                                <span className="gentleman__data-label">
                                    Profession:
                                </span>
                                {i.profession}
                            </li>
                            <li className="gentleman__data">
                                <span className="gentleman__data-label">
                                    Status:
                                </span>{" "}
                                {i.status}
                            </li>
                            <li className="gentleman__data">
                                <span className="gentleman__data-label">
                                    Twitter:
                                </span>{" "}
                                {i.twitter}
                            </li>
                        </ul>
                    </div>
                    <i
                        className="icon gentleman__icon fas fa-check"
                        onClick={() => {}}
                    ></i>
                    <i
                        className="icon gentleman__icon gentleman__icon--delete fas fa-times"
                        onClick={() => {
                            //intento fallido de boton de borrar
                            // handlerEraser()
                        }}
                    ></i>
                </li>
            ))}
            ;
        </>
    );
}
//intento fallido de boton de borrar
// function handlerEraser(deletedID: number) {
//     PointingMenInfo = PointingMenInfo.filter((item) => item.id !== deletedID);
// }
