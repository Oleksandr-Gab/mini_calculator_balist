import css from "./HistoryCard.module.css";

const HistoryCard = ({ data: { masa, diameter, speed, kineticDate } }) => {
    return (
        <div className={css.wrapper}>
            <ul>
                <li>Маса снаряда: {masa}</li>
                <li>Діаметр снаряда: {diameter}</li>
                <li>Швидкість снаряда: {speed}</li>
                <li>Питома кінетична енергія: {kineticDate}</li>
            </ul>
        </div>
    );
};

export default HistoryCard;
