import style from "./styles/app.module.css";
import avatar from "./assets/images/avatar-jessica.jpeg";

const App = () => {
  return (
    <div className={style.app}>
      <div className={style.container}>
        <div className={style.content}>
          <img className={style.avatar} src={avatar} alt="avatar" />
          <div className={style.title}>Jessica Randall</div>
          <div className={style.subTitle}>London, United Kingdom</div>
          <div className={style.paragraph}>
            "Front-end developer and avid reader."
          </div>
        </div>
        <div className={style.buttonContain}>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={style.button}
          >
            GitHub
          </a>
          <a
            href="https://www.frontendmentor.io/"
            target="_blank"
            rel="noopener noreferrer"
            className={style.button}
          >
            Frontend Mentor
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={style.button}
          >
            LinkedIn
          </a>
          <a
            href="hhttps://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={style.button}
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={style.button}
          >
            Instagram
          </a>
        </div>
      </div>

      <div className={style.attribution}>
        Challenge by{" "}
        <a
          className={style.attriLink}
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a className={style.attriLink} href="#">
          CodeLord36
        </a>
        .
      </div>
    </div>
  );
};

export default App;
