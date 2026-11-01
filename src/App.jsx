import { links } from "./media";

function Arrow() {
  return (
    <svg
      className="arrow-icon"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 19 19 5M5 5h14v14" />
    </svg>
  );
}

function Play() {
  return (
    <svg
      className="play-icon"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="m7 3 15 9L7 21Z" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <img
        className="hero-photo"
        fetchPriority="high"
        src="/images/principal.jpg"
        width="1440"
        height="1920"
        alt="Francis Lean tocando guitarra ao vivo, sob iluminação vermelha"
      />
      <header className="site-nav">
        <div className="nav-wrap">
          <a
            className="signature"
            href="#inicio"
            aria-label="Francis Lean — início"
          >
            <img
              src="/images/assinatura-referencia.png"
              width="265"
              height="110"
              alt="Francis Lean"
            />
          </a>
          <nav className="nav-center" aria-label="Seções">
            <a href="#aulas">Aulas</a>
            <a href="#gravacoes">Gravações</a>
            <a href="#ao-vivo">Ao vivo</a>
          </nav>
          <div className="socials-head">
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              ◎
            </a>
            <a
              href={links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Play />
            </a>
          </div>
        </div>
      </header>
      <div className="hero-vertline"></div>
      <div className="hero-motto">
        Música
        <br />
        com propósito
        <br />
        em cada
        <br />
        detalhe.
      </div>
      <div className="hero-name">
        <h1 id="hero-title">
          <img
            src="/images/nome-tipografico-referencia.png"
            width="464"
            height="346"
            alt="FRANCIS LEAN"
          />
        </h1>
        <div className="hero-roles">
          Guitarrista
          <br />
          Músico de sessão
          <br />
          Professor
        </div>
      </div>
      <div className="hero-intro">
        <span className="small-rule">01</span>
        <p>
          Guitarra como instrumento de expressão, fé e conexão. Aulas e
          gravações com respeito à identidade de cada música.
        </p>
      </div>
      <span className="hero-side-dots">
        02
        <br />
        03
      </span>
      <div className="hero-preview">
        <a href="#quem-sou-eu">
          <img
            src="/images/ao-vivo-vermelho.webp"
            width="1365"
            height="2048"
            alt="Registro de apresentação ao vivo em preto e branco"
          />
          <span className="preview-action">
            Conheça <b>⟶</b>
          </span>
        </a>
      </div>
      <a className="hero-scroll" href="#quem-sou-eu">
        <span className="scroll-pill"></span>
        <span>Role para explorar</span>
      </a>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="quem-sou-eu" aria-labelledby="about-title">
      <div className="frame-width about-grid">
        <div>
          <p className="small-label label">
            <span>01</span>Quem sou eu
          </p>
          <h2 id="about-title">
            Um violão aos 13 anos.{" "}
            <em>Uma mistura criativa que nunca parou.</em>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            Sou um jovem cristão e músico de 21 anos. Meus instrumentos
            principais são guitarra e violão, mas hoje enxergo a música como um{" "}
            <b>“purê de batatas”</b>: ela nasce de uma grande mistura criativa.
          </p>
          <p>
            Minha jornada começou de um jeito bem comum: aos 13 anos ganhei meu
            primeiro violão dos meus pais e, desde então, nunca consegui me
            livrar completamente dele, hahah! De 2018 pra cá, estudei com
            professores, cursos de guitarristas que admiro e, principalmente,
            analisando como as músicas de que gosto foram construídas.
          </p>
          <p>
            Em paralelo, sempre toquei na equipe de louvor da minha igreja,
            vivenciando vários estilos e desafios que só o palco proporciona.
            Hoje sou{" "}
            <b>
              diretor musical da equipe de jovens e adolescentes da Paz Church
              Fortaleza
            </b>
            , lidando com responsabilidades que vão além de tocar meu
            instrumento.
          </p>
        </div>
      </div>
    </section>
  );
}

function Lessons() {
  return (
    <section className="lessons" id="aulas" aria-labelledby="aulas-title">
      <div className="frame-width lessons-wrap">
        <span className="eyebrow">02 / Ensino</span>
        <div className="lessons-grid">
          <div className="lessons-heading">
            <h2 className="display" id="aulas-title">
              Aulas<span className="sr-only"> de guitarra e violão</span>
            </h2>
            <p>
              Guitarra e violão. Online ou presencial em Fortaleza. Do primeiro
              acorde a quem já toca e quer ir mais longe.
            </p>
          </div>
          <div className="lessons-description">
            <p className="lede">
              Aprender também precisa ser <em>prazeroso.</em>
            </p>
            <p className="plain">
              Quero compartilhar um pouco daquilo que Deus me entregou, em um
              ambiente leve onde a prática faça sentido.
            </p>
            <a
              className="actions-line"
              href={links.lessons}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero fazer aulas{" "}
              <span>
                <Arrow />
              </span>
            </a>
          </div>
        </div>
        <div className="method">
          <div>
            <span className="eyebrow">02.1 / Como ensino</span>
            <h3>Metodologia</h3>
          </div>
          <div className="method-rows">
            <div className="method-row">
              <strong>01</strong>
              <p>
                Aprender de verdade, sem perder a alegria e a sensação de tocar
                um instrumento.
              </p>
            </div>
            <div className="method-row">
              <strong>02</strong>
              <p>
                Uma formação inicial de aproximadamente seis meses, com
                liberdade para continuar se aprofundando após este período
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Recordings() {
  return (
    <section
      className="recordings"
      id="gravacoes"
      aria-labelledby="gravacoes-title"
    >
      <div className="frame-width">
        <div className="recordings-header">
          <div>
            <span className="eyebrow">03 / Músico de sessão</span>
            <h2 id="gravacoes-title" className="display">
              Gravações.
            </h2>
          </div>
          <p className="sub label">Guitarras / Arranjos / Música</p>
        </div>
        <div className="recordings-feature">
          <div className="recordings-visual">
            <img
              className="mainphoto"
              src="/images/ensaio.webp"
              width="1365"
              height="2048"
              alt="Francis Lean tocando guitarra, com computador e instrumentos ao fundo"
              loading="lazy"
            />
            <div className="photo-index">Uma outra perspectiva de tocar</div>
          </div>
          <div className="recordings-copy">
            <p className="large-sentence">
              O arranjo começa <strong>antes da primeira nota.</strong>
            </p>
            <p className="plain">
              Como músico de sessão, minha experiência com direção musical me
              ensinou a ouvir a canção inteira. Em cada gravação, procuro
              entender o contexto e construir guitarras que entreguem o que a
              música pede.
            </p>
            <a
              className="actions-line"
              href={links.recordings}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar gravação{" "}
              <span>
                <Arrow />
              </span>
            </a>
            <a
              className="clip-link"
              href={links.recordingClip}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="still">
                <Play />
                <img
                  src="/images/ensaio.webp"
                  width="1365"
                  height="2048"
                  alt=""
                  loading="lazy"
                />
              </span>
              <span className="ctxt">
                <small>Registro de gravação / Solo</small>
                <strong>Jardim Fechado</strong>
                <span>
                  Assistir ao vídeo <Arrow />
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Releases() {
  return (
    <section className="releases" aria-labelledby="releases-title">
      <div className="frame-width releases-inner">
        <div className="releases-heading">
          <h3 id="releases-title">Trabalhos lançados</h3>
          <p>Guitarras gravadas por Francis Lean</p>
        </div>
        <article className="release-row">
          <span className="no">01</span>
          <div>
            <h4>Jardim Fechado</h4>
            <p>Sara Souza — Gravação das guitarras</p>
          </div>
          <div className="platforms">
            <a
              href={links.jardimYoutube}
              aria-label="Ouvir Jardim Fechado no YouTube (nova aba)"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube <Arrow />
            </a>
            <a
              href={links.jardimSpotify}
              aria-label="Ouvir Jardim Fechado no Spotify (nova aba)"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spotify <Arrow />
            </a>
          </div>
        </article>
        <article className="release-row">
          <span className="no">02</span>
          <div>
            <h4>Salvo Estou</h4>
            <p>Davi Vieira — Gravação das guitarras</p>
          </div>
          <div className="platforms">
            <a
              href={links.salvoYoutube}
              aria-label="Ouvir Salvo Estou no YouTube (nova aba)"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube <Arrow />
            </a>
            <a
              href={links.salvoSpotify}
              aria-label="Ouvir Salvo Estou no Spotify (nova aba)"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spotify <Arrow />
            </a>
          </div>
        </article>
        <div className="studio-bar">
          <span className="label">Home studio / Setup</span>
          <p>
            <strong>Audient EVO 4</strong> · Audio-Technica ATH-M40x · Edifier
            MR4
            <br />
            Estrutura utilizada para gravação e monitoração.
          </p>
        </div>
      </div>
    </section>
  );
}

function Live() {
  return (
    <section className="live" id="ao-vivo" aria-labelledby="live-title">
      <div className="frame-width">
        <div className="live-heading">
          <div>
            <span className="eyebrow">04 / Performances</span>
            <h2 className="display" id="live-title">
              Ao vivo.
            </h2>
          </div>
          <div className="live-heading-aside">
            <div className="live-heading-inset">
              <img
                src="/images/ao-vivo-vermelho.webp"
                width="1365"
                height="2048"
                alt="Outro registro de performance de guitarra ao vivo"
                loading="lazy"
              />
            </div>
            <div className="live-aside-meta">
              <span>03 / registros</span>
              <p className="live-caption">
                Registros de música acontecendo no palco.
              </p>
            </div>
          </div>
        </div>
        <div className="live-visual-rail" aria-hidden="true">
          <span>NO PALCO</span>
          <span className="live-rail-line"></span>
          <span>GUITARRA • EXPRESSÃO • AO VIVO</span>
        </div>
        <div className="live-grid">
          <a
            className="live-item main"
            href={links.liveConference}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/principal.jpg"
              width="1440"
              height="1920"
              alt="Francis Lean durante uma performance ao vivo"
              loading="lazy"
            />
            <span className="index">01</span>
            <span className="caption">
              Diflen Conference 2026 <b>Jardim Fechado</b>
              <span className="arr">
                <Arrow />
              </span>
            </span>
          </a>
          <a
            className="live-item aux"
            href={links.livePerformance}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/ao-vivo-vermelho.webp"
              width="1365"
              height="2048"
              alt="Performance de guitarra sob luz de palco"
              loading="lazy"
            />
            <span className="index">02</span>
            <span className="caption">
              Igreja local<b>Performance</b>
              <span className="arr">
                <Arrow />
              </span>
            </span>
          </a>
          <a
            className="live-item last"
            href={links.liveSolo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/ensaio.webp"
              width="1365"
              height="2048"
              alt="Francis Lean tocando guitarra"
              loading="lazy"
            />
            <span className="index">03</span>
            <span className="caption">
              Igreja local <b>Solo autoral</b>
              <span className="arr">
                <Arrow />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contato" aria-labelledby="contact-title">
      <div className="frame-width">
        <span className="eyebrow">05 / Contato</span>
        <div className="contact-grid">
          <div>
            <h2 className="display" id="contact-title">
              Vamos
              <br />
              fazer
              <br />
              música?
            </h2>
            <p className="foot-note">Me conta o que você está planejando.</p>
          </div>
          <div className="contact-links">
            <a
              className="cta"
              target="_blank"
              rel="noopener noreferrer"
              href={links.lessons}
            >
              Quero fazer aulas{" "}
              <span>
                <Arrow />
              </span>
            </a>
            <a
              className="cta"
              target="_blank"
              rel="noopener noreferrer"
              href={links.recordings}
            >
              Solicitar gravação{" "}
              <span>
                <Arrow />
              </span>
            </a>
            <div className="micro-links">
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram <Arrow />
              </a>
              <a href={links.youtube} target="_blank" rel="noopener noreferrer">
                YouTube <Arrow />
              </a>
              <span>Fortaleza · CE</span>
            </div>
          </div>
        </div>
        <footer>
          <span>Francis Lean / Portfólio musical</span>
        </footer>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <About />
        <Lessons />
        <Recordings />
        <Releases />
        <Live />
        <Contact />
      </main>
    </>
  );
}
