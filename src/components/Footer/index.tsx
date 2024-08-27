import { ContainerFooter, ContainerLogos, TextFooter } from './styles';

const Footer = () => {
  return (
    <ContainerFooter>
      <div>
        <img src="imgs/logo.png" alt="" />
      </div>
      <ContainerLogos>
        <a href="">
          <img src="imgs/instagram-round.png" alt="Instagram logo" />
        </a>
        <a href="">
          <img src="imgs/facebook-round.png" alt="Facebook logo" />
        </a>
        <a href="">
          <img src="imgs/twitter-round.png" alt="Twitter logo" />
        </a>
      </ContainerLogos>
      <TextFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.{' '}
      </TextFooter>
    </ContainerFooter>
  );
};

export default Footer;
