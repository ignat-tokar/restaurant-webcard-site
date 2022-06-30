import './App.css';

function App() {
  return (
    <div>
      <div className="Main-background"
        style={{
          backgroundImage: "url('https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb')"
        }}
      >
        <div className="Menu">
          <span>LOGO</span>
          <ul>
            <li>O NAS</li>
            <li>MENU</li>
            <li>AKCE</li>
            <li>SALONEK</li>
            <li>KONTAKT</li>
          </ul>
        </div>
        <span>PIVO KLENOT</span>
      </div>
      <div className="Rozvoz-section">
        <h2>ROZVOZ JÍDLA A PIVA</h2>
        <p>Rádi vám dovezeme jídlo a pivo v Hradci Králové

          (rozvoz zdarma).

          Prohlédněte si stálý jídelní lístek a denní nabídku.

          Pro objednávku volejte 734 245 400 nebo využijte:</p>
        <span>On-line objednávku</span>
      </div>
      <div className="O-nas">
        <h2>O RESTAURACI</h2>
        <p>Stylová restaurace s vášní pro gastronomii a láskou k Hradci přímo v srdci města na Velkém náměstí.

          Přijďte k nám vyzkoušet domácí recepty a poctivou práci našich kuchařů pod vedením šéfkuchaře Michaela Seidla.

          Celý tým se na vás moc těší.</p>
        <span>ČÍST DÁLE</span>
      </div>
      <div className="Menu-today"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80')"
        }}        
      >
        <h2>Denni menu</h2>
        <p>POLEDNÍ MENU / POLÉVKA + HLAVNÍ CHOD
          POLÉVKA : Minestrone s kuskusem - v ceně menu,-
          MENU 1 : VEGE tortilla pněná sezonní restovanou zeleninou a zapečená cheddarem, domácí guacamole - 155,-
          MENU 2 : Spaghetti bolognese / čerstvé domácí těstoviny s hovězím ragú (140g) s kořenovou zeleninou a červeným vínem, sypané parmesanem - 165,-
          MENU 3 : Grilovaný steak z vepřové kotlety US Duroc (160g) s krémovou pepřovou omáčkou, bramborovým gratinem a máslovou brokolicí - 170,-
          SPECIÁL : Rice bowl s krevetami v tempuře (80g), jasmínová rýže, nakládaná okurka, karotka, teriyaki, sezam - 275,-
          DEZERT RESTAURACE : Jablečný závin s vanilkovým krémem - 40,-
          DEZERT ROZVOZ : Cheesecake se slaným karamelem a arašídy - 40,-</p>
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
          <div className="Horizontal-menu">
            <h2>Napojovy listek</h2>
            <a href="#">Prohlédnout</a>
          </div>
        </div>
      </div>

      <div className="Akce">
        <h2>PLÁNOVANÉ AKCE</h2>
        <h3>Nenechte si ujít nejbližší akce</h3>
        <div className="Akce-block">
          <img src="https://restaurace.pivovarskedomy.cz/files/thumbnails/image_contents/0/uqgq1/coolinarka-pd4_1068x710_1_0.jpg" />
          <span>30.-3.4.2022</span>
          <span>ASIE</span>
        </div>
        <div className="Akce-block">
          <img src="https://restaurace.pivovarskedomy.cz/files/thumbnails/image_contents/0/uqgq1/coolinarka-pd4_1068x710_1_0.jpg" />
          <span>30.-3.4.2022</span>
          <span>ASIE</span>
        </div>
        <span>Dalsi</span>
      </div>

      <div className="Footer">
        <h2>MÍSTO PRO VEČÍREK, OSLAVU I SVATEBNÍ HOSTINU</h2>
        <p>Jsme oblíbeným místem pro firemní i soukromé večírky, obchodní schůzky i romantické večeře ve dvou. Na větší akce vám rádi sestavíme zvláštní menu.

          V salonku pro uzavřenou společnost můžete využít audiovizuální techniku pro vlastní promítání nebo hudbu.

          Ve vnitrobloku je parkoviště pro hosty.</p>
        <img src="https://restaurace.pivovarskedomy.cz/files/thumbnails/image_contents/0/nikk3/jidlo-2_1068x710_1_0.JPG" />
        <div className="Footer-info-block">
          <span>LOGO</span>
          <div className="Footer-part">
            <h2>PIVOVARSKÉ DOMY</h2>
            <span>Velké náměstí 26
              Hradec Králové
              500 03</span>
          </div>
          <div className="Footer-part">
            <h2>RYCHLÝ KONTAKT</h2>
            <span>info@pivovarskedomy.cz
              +420 734 245 400</span>
          </div>
          <div className="Footer-part">
            <h2>OTEVÍRACÍ DOBA</h2>
            <span>po - čt    11:00 - 23:00

              pá - so    11:00 - 24:00

              ne       11:00 - 16:00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
