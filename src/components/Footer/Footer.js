function Footer() {
  return (
    <div className="overflow">

      <div className="footer">
        <div className="top">
          <div className="container">
            <div className="wrapper clearfix">
              <div className="item">
                <div className="logo"></div>
              </div>
              <div className="item">
                <div className="headline">Pivovarské domy</div>
                <div className="text-content">
                  <p>Velk&eacute; n&aacute;měst&iacute; 26<br />
                    Hradec Kr&aacute;lov&eacute;<br />
                    500 03</p>
                </div>
              </div>
              <div className="item">
                <div className="headline">Rychlý kontakt</div>
                <div className="text-content">
                  <p><a href="mailto:info@pivovarskedomy.cz">info@pivovarskedomy.cz</a><br />
                    +420 734 245 400<br />
                    &nbsp;</p>
                </div>
              </div>
              <div className="item">
                <div className="headline">Otevírací doba</div>
                <div className="text-content">
                  <p><strong>po - čt&nbsp;&nbsp;</strong> &nbsp;11:00 - 23:00</p>

                  <p><strong>p&aacute; - so</strong>&nbsp; &nbsp; 11:00 - 24:00</p>

                  <p><strong>&nbsp; &nbsp; ne</strong>&nbsp; &nbsp; &nbsp; &nbsp;11:00 - 16:00</p>

                  <p><br />
                    &nbsp;</p>
                </div>
              </div>
              <div className="item">
                <div className="map">
                  <img src="/files/setting/0/mguva/mapa-web-12.png" alt="mapa" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="wrapper clearfix">
              <div className="copyright">&copy; 2022 Všechna práva vyhrazena</div>
              <div className="item hidden-sm">
                <span className="far fa-credit-card"></span>Přijímáme platební karty
              </div>
              <div className="item">
                <span className="fas fa-parking"></span>Parkoviště pro hosty
              </div>
              <div className="author">
                <a href="https://www.webnia.cz/" className="webnia">
                  <span>Vytvořila WEBNIA.cz</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;