import css from "./HomePage.module.css";

export default function HomePage() {
    return (
        <>
            <h1 className={css.title}>міні-калькулятора баліста</h1>
            <p>
                Вітаю! Цей маленький web-додаток створений для розрахунку
                питомої кінетичної енергії снаряда
            </p>
        </>
    );
}
