import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Hero = () => (

  <section className="Hero hero is-medium" id="home">
    <div className="hero-head">
      <header className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <figure className="navbar-item">
              <Link to="/" className="logo" >
                <p>HP</p>
              </Link>
            </figure>
            <span className="navbar-burger burger" data-target="navbarMenuHeroC">
            </span>

          </div>
          <div id="navbarMenuHeroC" className="navbar-menu">
            <div className="navbar-end">

              <span className="navbar-item">
                <Link to="/" className="button has-text-grey has-text-centered is-inverted">
                  <span>Home</span>
                </Link>
              </span>
              <span className="navbar-item">
                <Link to="/characters" className="button has-text-grey has-text-centered is-inverted">
                  <span>Characters</span>
                </Link>
              </span>
              <span className="navbar-item">
                <Link to="/houses" className="button has-text-grey has-text-centered is-inverted">
                  <span>Houses</span>
                </Link>
              </span>
              <span className="navbar-item">
                <Link to="/spells" className="button has-text-grey has-text-centered is-inverted">
                  <span>Spells</span>
                </Link>
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
            <li className="tab has-text-white"><Link to="/characters">Characters</Link></li>
            <li className="tab has-text-white"><Link to="/houses">Houses</Link></li>
            <li className="tab has-text-white"><Link to="/spells">Spells</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  </section>


)

export default withRouter(Hero)

