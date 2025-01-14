import { TiThMenu } from 'react-icons/ti';
import { GiGunshot } from 'react-icons/gi';
import css from './Header.module.css';

type Props = {
    mobilMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ mobilMenu }: Props) {
    return (
        <>
            <header className={css.header}>
                <GiGunshot />
                {/* <Navigation /> */}
                <button className={css.menu} onClick={() => mobilMenu(true)}>
                    <TiThMenu />
                </button>
            </header>
        </>
    );
}
