import s from './Reg.module.css';
export default function Reg() {
  return (
    <>
      <div className={s.form}>
        <p className={s.title}>
          Вы можете авторизоваться с помощью Google Account:
        </p>
        <button type="submit" className={s.buttonGoogle}>
          Google
        </button>
        <p className={s.text}>
          Или зайти с помощью e-mail и пароля, предварительно
          зарегистрировавшись:
        </p>
        <label className={s.label}>Электронная почта:</label>
        <input
          className={s.input}
          type="email"
          name="email"
          placeholder="your@email.com"
        ></input>

        <label className={s.label}>Пароль:</label>
        <input
          className={s.input}
          type="password"
          name="password"
          placeholder="Пароль"
        ></input>
        <div className={s.containerButton}>
          <button className={s.button}>ВОЙТИ</button>
          <button className={s.button}>РЕГИСТРАЦИЯ</button>
        </div>
      </div>
    </>
  );
}
