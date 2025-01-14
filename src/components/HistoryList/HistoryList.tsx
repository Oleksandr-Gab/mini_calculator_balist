import HistoryCard from '../HistoryCard/HistoryCard';

type Props = {
    arr: {
        id: number;
        masa: number;
        diameter: number;
        speed: number;
        kineticDate: number;
        date: number;
    }[];
};

const HistoryList = ({ arr }: Props) => {
    return (
        <ul>
            {arr.map(e => (
                <li key={e.id}>
                    <HistoryCard data={e} />
                </li>
            ))}
        </ul>
    );
};

export default HistoryList;
