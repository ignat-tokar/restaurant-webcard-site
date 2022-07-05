import './App.css';
import mainBackgroundImage from './assets/main-background.jpeg';
import menuBackgroundImage from './assets/menu-background.jpeg';
import footerImage from './assets/footer.jpg';

function App() {
  return (
    <div>
      <div className="Main-background"
        style={{
          backgroundImage: `url('${mainBackgroundImage}')`
        }}
      >
        <div className="Menu">
          <span id="logo">LOGO</span>
          <ul>
            <li>O NAS</li>
            <li>MENU</li>
            <li>AKCE</li>
            <li>KONTAKT</li>
          </ul>
        </div>
        <span id="title">PIVO KLENOT</span>
      </div>
      <div className="O-nas">
        <h2>O RESTAURACI</h2>
        <div className="p-block">
          <p>Stylová restaurace s vášní pro gastronomii a láskou k Hradci přímo v srdci města na Velkém náměstí.

          </p><p>Přijďte k nám vyzkoušet domácí recepty a poctivou práci našich kuchařů pod vedením šéfkuchaře Michaela Seidla.

          </p><p>Celý tým se na vás moc těší.</p>
        </div>
        <span id="cist-dale">ČÍST DÁLE</span>
      </div>
      <div className="Menu-today"
        style={{
          backgroundImage: `url('${menuBackgroundImage}')`
        }}
      >
        <p id="menu-title">Denni menu na 30.6.2022</p>
        <hr />
        <p id="menu-row">POLEDNÍ MENU / POLÉVKA + HLAVNÍ CHOD</p>
        <hr />
        <p id="menu-row">POLÉVKA : Minestrone s kuskusem - v ceně menu,-</p>
        <hr />
        <p id="menu-row">MENU 1 : VEGE tortilla pněná sezonní restovanou zeleninou a zapečená cheddarem, domácí guacamole - 155,-</p>
        <hr />
        <p id="menu-row">MENU 2 : Spaghetti bolognese / čerstvé domácí těstoviny s hovězím ragú (140g) s kořenovou zeleninou a červeným vínem, sypané parmesanem - 165,-</p>
        <hr />
        <p id="menu-row">MENU 3 : Grilovaný steak z vepřové kotlety US Duroc (160g) s krémovou pepřovou omáčkou, hramborovým gratinem a máslovou hrokolicí - 170,-</p>
        <hr />
        <p id="menu-row">SPECIÁL : Rice bowl s krevetami v tempuře (80g), jasmínová rýže, nakládaná okurka, karotka, teriyaki, sezam - 275,-</p>
        <hr />
        <p id="menu-row">DEZERT RESTAURACE : Jablečný závin s vanilkovým krémem - 40,-</p>
        <hr />
        <p id="menu-row">DEZERT ROZVOZ : Cheesecake se slaným karamelem a arašídy - 40,-</p>
      </div>
      <div className="Menu-all">
        <div className="Vertical-menu-wrapper">
          <div className="Vertical-menu"
            style={{
              backgroundImage: "url('https://restaurace.pivovarskedomy.cz/files/thumbnails/setting/0/tb0st/denni-menu-karta-bg_700x1000_1_0.jpg')"
            }}
          >
            <h2>DENNI MENU</h2>
            <a href="#">Prohlédnout</a>
          </div>
          <div className="Vertical-menu"
            style={{
              backgroundImage: "url('https://restaurace.pivovarskedomy.cz/files/thumbnails/setting/0/tb0st/denni-menu-karta-bg_700x1000_1_0.jpg')"
            }}
          >
            <h2>DENNI MENU</h2>
            <a href="#">Prohlédnout</a>
          </div>
          <div className="Vertical-menu"
            style={{
              backgroundImage: "url('https://restaurace.pivovarskedomy.cz/files/thumbnails/setting/0/tb0st/denni-menu-karta-bg_700x1000_1_0.jpg')"
            }}
          >
            <h2>DENNI MENU</h2>
            <a href="#">Prohlédnout</a>
          </div>
        </div>
        <div className="Horizontal-menu-wrapper">
          <div className="Horizontal-menu"
            style={{
              backgroundImage: "url('https://restaurace.pivovarskedomy.cz/files/thumbnails/setting/0/4vsrz/napojovy-listek-karta-bg_1080x460_1_0.png')"
            }}
          >
            <h2>Napojovy listek</h2>
            <a href="#">Prohlédnout</a>
          </div>
          <div className="Horizontal-menu"
            style={{
              backgroundImage: "url('https://restaurace.pivovarskedomy.cz/files/thumbnails/setting/0/4vsrz/napojovy-listek-karta-bg_1080x460_1_0.png')"
            }}
          >
            <h2>Napojovy listek</h2>
            <a href="#">Prohlédnout</a>
          </div>
        </div>
      </div>

      <div className="Akce">
        <h2>PLÁNOVANÉ AKCE</h2>
        <p>Nenechte si ujít nejbližší akce</p>
        <div className="Akce-block mobile">
          <img src="https://restaurace.pivovarskedomy.cz/files/thumbnails/image_contents/0/uqgq1/coolinarka-pd4_1068x710_1_0.jpg" />
          <span id="date">30.-3.4.2022</span>
          <span id="akce-title">ASIE</span>
        </div>
        <div className="Akce-block">
          <img src="https://restaurace.pivovarskedomy.cz/files/thumbnails/image_contents/0/uqgq1/coolinarka-pd4_1068x710_1_0.jpg" />
          <span id="date">30.-3.4.2022</span>
          <span id="akce-title">ASIE</span>
        </div>
        <div id="button-block">
          <span id="akce-button">Dalsi</span>
        </div>
      </div>

      <div className="Footer">
        <div className="Footer-background"
          style={{
            backgroundImage: `url('${footerImage}')`
          }}
        >
          <h2>MÍSTO PRO VEČÍREK, OSLAVU I SVATEBNÍ HOSTINU</h2>
          <p>Jsme oblíbeným místem pro firemní i soukromé večírky, obchodní schůzky i romantické večeře ve dvou. Na větší akce vám rádi sestavíme zvláštní menu.

          </p><p>V salonku pro uzavřenou společnost můžete využít audiovizuální techniku pro vlastní promítání nebo hudbu.

          </p><p>Ve vnitrobloku je parkoviště pro hosty.</p>
        </div>
        <div className="Footer-info-block">
          <div className="Footer-part">
            <h2>PIVOVARSKÉ DOMY</h2>
            <span>Velké náměstí 78
              Hradec Králové
              512 03</span>
          </div>
          <div className="Footer-part">
            <h2>OTEVÍRACÍ DOBA</h2>
            <p>po - čt    11:00 - 23:00

            </p><p>pá - so    11:00 - 24:00

            </p><p>ne       11:00 - 16:00
            </p>
          </div>          
          <div className="Footer-part">
            <h2>RYCHLÝ KONTAKT</h2>
            <span>info@pivovarskedomy.cz
              +420 345 343 530</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
