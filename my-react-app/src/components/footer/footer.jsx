import "./footer.scss";
import logo_Yeahub from "../../images/Yeahub_light.png";
import logo_Telegram from "../../images/Telegram_white.png";
import logo_YouTube from "../../images/YouTube_white.png";
import logo_Figma from "../../images/Figma.png";
import logo_TikTok from "../../images/TikTok.png";
import logo_GitHube from "../../images/Github_white.png";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <a>
          <img src={logo_Yeahub} alt="logo Yeahub" />
        </a>
        <span>Выбери, каким будет IT завтра — вместе c нами!</span>
        <span className="footer__description">
          YeaHub — это полностью открытый проект, призванный объединить и
          улучшить IT-сферу. Наш исходный код доступен для просмотра на GitHub.
          Дизайн проекта также открыт для ознакомления в Figma.
        </span>
      </div>
      <div className="footer__meta">
        <span>© 2026 YeaHub</span>
        <div>
          <a href="#">Документы</a>
          <a href="#">Медиа</a>
          <a href="#">
            <img src={logo_Telegram} alt="logo Telegram" />
          </a>
          <a href="#">
            <img src={logo_YouTube} alt="logo YouTube" />
          </a>
          <a href="#">
            <img src={logo_Figma} alt="logo Figma" />
          </a>
          <a href="#">
            <img src={logo_TikTok} alt="logo TikTok" />
          </a>
          <a href="#">
            <img src={logo_GitHube} alt="logo GitHube" />
          </a>
        </div>
      </div>
    </footer>
  );
}
