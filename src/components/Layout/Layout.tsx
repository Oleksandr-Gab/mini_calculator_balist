import css from './Layout.module.css';

type Props = {
    children: React.ReactElement;
};
export default function Layout({ children }: Props) {
    return <div className={css.container}>{children}</div>;
}
