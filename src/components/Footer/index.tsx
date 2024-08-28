import { FooterContainer, LogosContainer, FooterText } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <img src="imgs/logo.png" alt="" />
      </div>
      <LogosContainer>
        <a href="">
          <img src="imgs/instagram-round.png" alt="Instagram logo" />
        </a>
        <a href="">
          <img src="imgs/facebook-round.png" alt="Facebook logo" />
        </a>
        <a href="">
          <img src="imgs/twitter-round.png" alt="Twitter logo" />
        </a>
      </LogosContainer>
      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.{' '}
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
