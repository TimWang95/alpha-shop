import { ReactComponent as IconToggle } from "assets/icons/toggle.svg"
import { ReactComponent as IconLogo } from "assets/icons/logo.svg"
import { ReactComponent as IconSearch } from "assets/icons/search.svg"
import { ReactComponent as IconCart } from "assets/icons/cart.svg"
import { ReactComponent as IconMoon } from "assets/icons/moon.svg"
import { ReactComponent as IconSun } from "assets/icons/sun.svg"

 export default function Header() {
  return (
    <>
      <div id="svg-icons-container"></div>
      {/* <!-- header --> */}
      <header className="site-header">
        <div className="header-container mx-auto">
          {/* <!-- navbar-toggle --> */}
          <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />

          <label htmlFor="navbar-toggle" className="burger-container">
            <IconToggle className="icon-toggle cursor-point"/>
          </label>

          {/* <!-- navbar-menu --> */}
          <nav className="navbar-menu">
            <ul className="nav-list site-menu-list mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">男款</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">女款</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">最新消息</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">客製商品</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">聯絡我們</a>
              </li>
            </ul>

            <ul className="nav-list site-action-list">
              {/* <!-- search --> */}
              <li className="nav-item">
                <IconSearch className="nav-icon cursor-point" />
              </li>
              {/* <!-- cart --> */}
              <li className="nav-item">
                <IconCart className="nav-icon cursor-point" /> 
              </li>
              <li id="theme-toggle" className="nav-item">
                {/* <!-- moon --> */}
                <IconMoon className="nav-icon cursor-point" />
                {/* <!-- sun --> */}
                <IconSun className="nav-icon cursor-point" />
              </li>
            </ul>
          </nav>

          {/* <!-- logo --> */}
          <a className="header-logo-container" href="#">
            <IconLogo className="icon-logo cursor-point"/>
          </a>
        </div>
      </header>
    </>
  )
}