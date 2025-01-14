import css from './HistoryCard.module.css';

type Props = {
    data: {
        masa: number;
        diameter: number;
        speed: number;
        kineticDate: number;
        date: number;
    };
};

const HistoryCard = ({
    data: { masa, diameter, speed, kineticDate, date },
}: Props) => {
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
