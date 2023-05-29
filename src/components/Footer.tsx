const Footer = () => {
  return (
    <footer className="min-h-[10vh] flex flex-col md:flex-row items-center justify-left pl-4 md:pl-8 border-t-2 border-[#5BC400] py-7">
      <img
        className="h-12 w-12 md:h-[70px] md:w-[70px]"
        src="/assets/images/calang_logo.svg"
        alt="Calang.io Logo"
      />
      <span className="text-[#5BC400] ml-2 md:ml-4 mt-4 md:mt-0 md:text-lg">
        Simplifique e agilize o gerenciamento de tarefas com nossa plataforma.
        <br />
        <b>Para mais informações</b>, entre em contato: (088) 1111-2222 ou pelo{" "}
        <b>WhatsApp</b>.
      </span>
    </footer>
  );
};

export default Footer;
