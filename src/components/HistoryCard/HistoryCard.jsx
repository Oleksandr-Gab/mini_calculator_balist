import css from "./HistoryCard.module.css";

const HistoryCard = ({
    data: { masa, diameter, speed, kineticDate, date },
}) => {
    return (
        <div className={css.wrapper}>
            <ul>
                <li>Дата вимірювання: {date}</li>
                <li>Маса снаряда: {masa}</li>
                <li>Діаметр снаряда: {diameter}</li>
                <li>Швидкість снаряда: {speed}</li>
                <li>Питома кінетична енергія: {kineticDate}</li>
            </ul>
        </div>
    );
};

export default HistoryCard;
