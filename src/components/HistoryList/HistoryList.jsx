import HistoryCard from "../HistoryCard/HistoryCard";

const HistoryList = ({ arr }) => {
    return (
        <ul>
            {arr.map((e) => (
                <li key={e.id}>
                    <HistoryCard data={e} />
                </li>
            ))}
        </ul>
    );
};

export default HistoryList;
