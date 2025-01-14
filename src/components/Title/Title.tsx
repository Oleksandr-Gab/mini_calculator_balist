import css from './Title.module.css';

type Props = {
    children: string;
};

export default function Title({ children }: Props) {
    return <h1 className={css.title}>{children}</h1>;
}
