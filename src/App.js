import { useEffect, useState } from 'react';
import './App.css';
import mainBackgroundImage from './assets/main-background.jpg';
import mainBackgroundImageAdaptive from './assets/main-background-adaptive.jpg';
import menuBackgroundImage from './assets/menu-background.jpeg';
import footerImage from './assets/footer.jpg';
import menuIcon from './assets/menu.png';
import exitIcon from './assets/exit.png';
import m1 from './assets/1.jpeg';
import m2 from './assets/2.jpeg';
import m3 from './assets/3.jpeg';
import m4 from './assets/4.jpeg';
import m5 from './assets/5.jpeg';
import m6 from './assets/6.jpeg';

import a1 from './assets/a1.jpeg';
import a2 from './assets/a2.jpeg';

import backButtonImg from './assets/back.png';
import logoImg from './assets/logo.png';

import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

function MenuButton(props) {

  return (
    <div className="Menu-button-adaptive">
      <div className="Menu-block-adaptive">
        <div onClick={props.exitHandler}>
          <img src={exitIcon} />
          <span>ZAVRIT MENU</span>
          <hr />
        </div>
        <div>
        <li onClick={props.onasScroll}>O NAS</li>
        <li onClick={props.menuScroll}>MENU</li>
        <li onClick={props.akceScroll}>AKCE</li>
        <li onClick={props.contactScroll}>KONTAKT</li>
        </div>
      </div>
    </div>
  );
}

function Akce(){

  let navigate = useNavigate();

  const exitHandler = () => {
    navigate('/restaurant-webcard-site');
  }

  return (
    <div>
      <div onClick={exitHandler} className="Akce-exit-block">
        <img id="akce-exit-button" src={backButtonImg} />
        <h2>Zpět na hlavní stránku</h2>
      </div>
      <div className="Akce">
      
        {/* <h2>PLÁNOVANÉ AKCE</h2> */}

        {/* <p>Nenechte si ujít nejbližší akce</p> */}
        <div className="Akce-block">
          <img src={a1} />
          {/* <span id="date">30.-3.4.2022</span> */}
          {/* <span id="akce-title">ASIE</span> */}
        </div>
        <div className="Akce-block">
          <img src={a2} />
          {/* <span id="date">30.-3.4.2022</span> */}
          {/* <span id="akce-title">ASIE</span> */}
        </div>
        {/* <div id="button-block">
      <span id="akce-button">Dalsi</span>
    </div> */}
      </div>
    </div>
  );
}

function MainApp() {

  const [isAdaptive, setIsAdaptive] = useState(
    window.screen.width < 480 ? true : false
  );
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState();

  const [day, setDay] = useState(new Date().toDateString().split(' ')[0]);
  const [dayText, setDayText] = useState(null);

  let navigate = useNavigate();

  useEffect(()=>{

    let newDate = new Date().toLocaleDateString();
    setDate(
    newDate.split('/')[1] + '.' +
    newDate.split('/')[0] + '.' +
    newDate.split('/')[2])

    switch(day){
      case 'Mon': {
        setDayText(<><hr />
        <p id="menu-row">PONEDELI</p>
        <hr />
        <p id="menu-row">Borsc s masem - 40,-</p>
        <hr />
        <p id="menu-row">Kureci rizek s bramborovou kasi - 135,-</p>
        <hr />
        <p id="menu-row">Salat z cerstveho zeli - 20,-</p>
        <hr />
        <p id="menu-row">Kompot - 20,-</p>        
        <hr /></>);
        return;
      }
      case 'Tue': {
        setDayText(<><hr />
        <p id="menu-row">UTERY</p>
        <hr />
        <p id="menu-row">Kureci vyvar - 40,-</p>
        <hr />
        <p id="menu-row">Pilaf - 135,-</p>
        <hr />
        <p id="menu-row">Zeleniovy salat - 20,-</p>
        <hr />
        <p id="menu-row">Kompot - 20,-</p>     
        <hr /></>);
        return;
      }
      case 'Wed': {
        setDayText(<><hr />
        <p id="menu-row">STREDA</p>
        <hr />
        <p id="menu-row">Bob gulas - 40,-</p>
        <hr />
        <p id="menu-row">Chovlent - 135,-</p>
        <hr />
        <p id="menu-row">Repa s krenem - 20,-</p>
        <hr />
        <p id="menu-row">Kompot - 20,-</p>        
        <hr /></>);
        return;
      }
      case 'Thu': {
        setDayText(<><hr />
        <p id="menu-row">CTVARTEK</p>
        <hr />
        <p id="menu-row">Solyanka - 40,-</p>
        <hr />
        <p id="menu-row">Rokot krumpli - 135,-</p>
        <hr />
        <p id="menu-row">Zeleniovy salat - 20,-</p>
        <hr />
        <p id="menu-row">Kompot - 20,-</p>     
        <hr /></>);
        return;
      }
      case 'Fri': {
        setDayText(<><hr />
        <p id="menu-row">PATEK</p>
        <hr />
        <p id="menu-row">Borsc s masem - 40,-</p>
        <hr />
        <p id="menu-row">Pelmeni - 135,-</p>
        <hr />
        <p id="menu-row">Zeleniovy salat - 20,-</p>
        <hr />
        <p id="menu-row">Kompot - 20,-</p>        
        <hr /></>);
        return;
      }
      case 'Sat': {
        setDayText(<><hr />
        <p id="menu-row">SOBOTA</p>
        <hr />
        <p id="menu-row">Borsc s masem - 40,-</p>
        <hr />
        <p id="menu-row">Kureci rizek s bramborovou kasi - 135,-</p>
        <hr />
        <p id="menu-row">Salat z cerstveho zeli - 20,-</p>
        <hr />
        <p id="menu-row">Kompot - 20,-</p>        
        <hr /></>);
        return;
      }
      case 'Sun': {
        setDayText(<><hr />
        <p id="menu-row">NEDELE</p>
        <hr />
        <p id="menu-row">Kureci vyvar - 40,-</p>
        <hr />
        <p id="menu-row">Pilaf - 135,-</p>
        <hr />
        <p id="menu-row">Zeleniovy salat - 20,-</p>
        <hr />
        <p id="menu-row">Kompot - 20,-</p>        
        <hr /></>);
        return;
      }      
      default: return 'hello';
    }
  },[]);

  const openHandler = () => {
    setOpen(true);
  }
  const exitHandler = () => {
    setOpen(false);
  }

  const scrollHandler = (identifier) => {
    let elem = window.document.querySelector(identifier);
    elem.scrollIntoView(true);
  }

  const contactScroll = () => scrollHandler('.Footer-info-block');

  const onasScroll = () => scrollHandler('.O-nas');
  const menuScroll = () => scrollHandler('.Menu-all');
  const akceScroll = () => {
    navigate('/restaurant-webcard-site/akce');
  };
  return (
    <div>
      <div className="Main-background"
        style={{
          backgroundImage: `url('${mainBackgroundImage}')`
        }}
      >
        {open
          ? <MenuButton
            open={open}
            exitHandler={exitHandler}
            onasScroll={onasScroll}
            menuScroll={menuScroll}
            akceScroll={akceScroll}
            contactScroll={contactScroll}
          />
          : <>
            <div className="Menu">
              <img src={logoImg} id="logo" />
              {isAdaptive
                ? <img id="exit-menu-button" onClick={openHandler} src={menuIcon} />
                : <ul>
                  <li onClick={onasScroll}>O NAS</li>
                  <li onClick={menuScroll}>MENU</li>
                  <li onClick={akceScroll}>AKCE</li>
                  <li onClick={contactScroll}>KONTAKT</li>
                </ul>
              }
            </div>
            <span id="title">GOLDEN PALM</span>
          </>
        }
      </div>
      <div className="O-nas">
        <h2>O RESTAURACI</h2>
        <div className="p-block">
          <p>Pivnice a restaurace v samém centru Hradce Králové - poctivá ukrajinská domácí kuchyně z čerstvých surovin (v nabídce také něco pro vegany), víkendové akce, sportovní přenosy a samovýčep s posezením pro 10 osob.

          </p><p>Těšíme se na Vaši návštěvu!

          </p>
        </div>
        {/* <span id="cist-dale">ČÍST DÁLE</span> */}
      </div>
      <div className="Menu-today"
        style={{
          backgroundImage: `url('${menuBackgroundImage}')`
        }}
      >
        <p id="menu-title">POLEDNÍ MENU na dnes</p>
        {dayText}
        
        {/* <hr />
        <p id="menu-row">SPECIÁL : Rice bowl s krevetami v tempuře (80g), jasmínová rýže, nakládaná okurka, karotka, teriyaki, sezam - 275,-</p>
        <hr />
        <p id="menu-row">DEZERT RESTAURACE : Jablečný závin s vanilkovým krémem - 40,-</p>
        <hr />
        <p id="menu-row">DEZERT ROZVOZ : Cheesecake se slaným karamelem a arašídy - 40,-</p> */}
      </div>
      <div className="Menu-all">
        <h2>MENU</h2>
        <div className="Vertical-menu-wrapper">
          <div className="Vertical-menu"><img src={m1}/></div>
          <div className="Vertical-menu"><img src={m2}/></div>
          <div className="Vertical-menu"><img src={m3}/></div>
          <div className="Vertical-menu"><img src={m4}/></div>
          <div className="Vertical-menu"><img src={m5}/></div>
          <div className="Vertical-menu"><img src={m6}/></div>
          {/* <div className="Vertical-menu"
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
          </div> */}
        </div>
        {/* <div className="Horizontal-menu-wrapper">
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
        </div> */}
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
            <h2>ADRESS</h2>
            <span>Československé armády 275/21, Hradec Králové</span>
          </div>
          <div className="Footer-part">
            <h2>OTEVÍRACÍ DOBA</h2>
            <p>po - čt    11:00 - 00:00

            </p><p>pá - so    11:00 - 01:00

            </p><p>ne       11:00 - 00:00
            </p>
          </div>
          <div className="Footer-part">
            <h2>RYCHLÝ KONTAKT</h2>
            <span>restauracenapalmovce@email.cz
            </span><br /><span>+420 774 442 588</span>
          </div>

        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/restaurant-webcard-site" element={<MainApp />}/>
        <Route path="/restaurant-webcard-site/akce" element={<Akce />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
