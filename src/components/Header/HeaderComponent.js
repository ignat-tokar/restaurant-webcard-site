function HeaderComponent() {
  return (
    <div className="header">
      <div className="container">
        <div className="wrapper clearfix">
          <a className="logo" href="/"></a>
          <a href="" className="toggle">Menu</a>
          <div className="right">
            <a href="" className="toggle">
              <span className="fas fa-times"></span>Zavřít menu
            </a>
            <div className="navigation">
              <ul className="clearfix">
                <li>
                  <a href="/o-nas">
                    O nás

                  </a>
                </li>
                <li>
                  <a href="/menu">
                    Menu
                    <span className="fas fa-angle-down"></span>
                  </a>
                  <div className="drop">
                    <ul>
                      <li>
                        <a href="/denni-menu">
                          Denní menu

                        </a>
                      </li>
                      <li>
                        <a href="/jidelni-listek">
                          Jídelní lístek

                        </a>
                      </li>
                      <li>
                        <a href="/napojovy-listek">
                          Nápojový lístek

                        </a>
                      </li>
                      <li>
                        <a href="/vinny-listek">
                          Vinný lístek

                        </a>
                      </li>
                      <li>
                        <a href="/vikendova-nabidka">
                          Víkendová nabídka

                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/akce">
                    Akce

                  </a>
                </li>
                <li>
                  <a href="/salonek">
                    Salónek

                  </a>
                </li>
                <li>
                  <a href="/kontakt">
                    Kontakt

                  </a>
                </li>
              </ul>

            </div>
            {/* <div className="social">
              <ul>
                <li>
                  <a href="#" target="_blank">
                    <span className="fab fa-facebook">F</span>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <span className="fab fa-instagram">I</span>
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;