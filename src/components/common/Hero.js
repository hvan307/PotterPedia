import React from 'react'
// import HpLogo from './images/HpLogo'

const Hero = () => (

  <section className="Hero hero is-medium" id="home">
    <div className="hero-head">
      <header className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <figure className="navbar-item">
              <img src="https://i.dlpng.com/static/png/5520785-create-any-harry-potter-logo-using-adobe-photoshop-harry-harry-potter-logo-1200_497_preview.png" alt="Logo" />
            </figure>
            <span className="navbar-burger burger" data-target="navbarMenuHeroC">
            </span>

          </div>
          <div id="navbarMenuHeroC" className="navbar-menu">
            <div className="navbar-end">

              <span className="navbar-item">
                <a href="#home" className="button has-text-grey has-text-centered is-inverted">
                  <span>Home</span>
                </a>
              </span>
              <span className="navbar-item">
                <a href="#characters" className="button has-text-grey has-text-centered is-inverted">
                  <span>Characters</span>
                </a>
              </span>
              <span className="navbar-item">
                <a href="#houses" className="button has-text-grey has-text-centered is-inverted">
                  <span>Houses</span>
                </a>
              </span>
              <span className="navbar-item">
                <a href="#spells" className="button has-text-grey has-text-centered is-inverted">
                  <span>Spells</span>
                </a>
              </span>
            </div>

          </div>
        </div>
      </header>
    </div>

    {/* <!-- Hero content: will be in the middle --> */}
    <div className="hero-body is-medium">
      <div className="container">
        <h1 className="title is-1 has-text-centered">
          <span>⚡️</span> POTTERPEDIA <span>⚡️</span>
        </h1>
        <h2 className="subtitle is-6 has-text-grey has-text-centered">
          A digital world of witchcraft and wizardry for Potterheads
        </h2>
      </div>
    </div>

    {/* <!-- Hero footer: will stick at the bottom --> */}
    <div className="hero-foot">
      <nav className="tabs is-boxed is-fullwidth">
        <div className="container">
          <ul>
            <li className="tab has-text-white"><a href="#characters">Characters</a></li>
            <li className="tab has-text-white"><a href="#houses">Houses</a></li>
            <li className="tab has-text-white"><a href="#spells">Spells</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </section>


)

export default Hero

