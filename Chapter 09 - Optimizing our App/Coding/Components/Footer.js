// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://github.com/SAIRUSVARMA"
        target="_blank"
        title="Sairus Varma's Github Profile"
      >
        Sairus Varma
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <a>
        <strong>
          Food<span>Heaven</span>
        </strong>
      </a>
    </div>
  );
};

export default Footer;
