import { useState } from 'react'
import './Content.css'

export default function Content() {
  const aboutPage = (
    <section id="main-content">
        <h2>Welcome to my webpage!</h2>
      <div>
        <u>Name:</u> Tracey Treat
        <br />
        <u>Age:</u> 23
        <br />
        <u>Hometown:</u> Rosemount, MN
        <br />
      </div>
      <div>
        Tracey was born on November 19, 1999 at the Sheppard Air Force Base in
        Wichita Falls, TX.
        <br />
        She moved to Minnesota shortly after and has lived there ever since.
      </div>
      <div>
        Tracey is a full stack software engineer and an artist. She designed her first website at age 9 and has been coding nonstop since then.
        She loves to draw comics and write funny stories. She is also an avid Pokémon fan!
      </div>
    </section>
  )

  const contactInfo = (
    <section id="main-content">
        <h2>
            Contact Me:
        </h2>
        <div>
            LinkedIn, Instagram: traceystreat
        </div>
        <div>
            Github: traceytreat
        </div>
        <div>
            Steam: t_rangerscool
        </div>
        <div>
            Email: treatracey (at) gmail (dot) com<br/>
            <h6>Please manually replace parentheses with symbols</h6>
        </div>
    </section>
  )

  const downloadLinks = (
    <section id="main-content">
        <h2>Resume</h2>
        <div>
            **DOWNLOAD RESUME**
        </div><br/>
        <h2>Additional Downloads</h2>
        <div>
            You can download my NEW font, 'Tracey Reborn!'
            <div>
            **Download Link**
            </div>
            You can use this font for your personal projects.<br/>
            No commercial use is allowed.
        </div>
        <div>
            You can also download my older font, 'Tracey Treat'.<br />
            <div>
            **Download Link**
            </div>
            This font is no longer supported.
        </div>
    </section>
  )

  const funStuff = (
    <section id="main-content">
        <h2>TRACEY FUN FACTS! DID YOU KNOW?</h2>
        <div>Tracey has two cats, Shadow and Link. They are 14-year old brothers!
            Shadow loves to perform tricks, including fetch, tapping your shoulder, and giving you a high-five.
        </div>
        <div>At age 16, Tracey was a speaker at the DevOpsDays conference in Minneapolis.</div>
        <div>Tracey is a two-time school spelling bee champ!</div>
    </section>
  )
    const [activeNav, setActiveNav] = useState('info');
  const [contentText, setContentText] = useState(aboutPage)

  const handleChangeNav = (current) => {
    console.log('in handleChangeNav');
    setActiveNav(current);
    switch (current) {
        case 'info':
            setContentText(aboutPage);
            break;
        case 'contact':
            setContentText(contactInfo);
            break;
        case 'downloads':
            setContentText(downloadLinks);
            break;
        case 'fun':
            setContentText(funStuff);
            break;
        default:
            console.log('something is wrong');
            break;
    }
  }

  return (
    <>
    <section id='nav-bar'>
        <div className={activeNav === 'info' ? 'nav-button-active' : 'nav-button'} onClick={() => handleChangeNav('info')}>
            Info
        </div>
        <div className={activeNav ==='contact' ? 'nav-button-active' : 'nav-button'} onClick={() => handleChangeNav('contact')}>
            Contact
        </div>
        <div className={activeNav === 'downloads' ? 'nav-button-active' : 'nav-button'} onClick={() => handleChangeNav('downloads')}>
            Downloads
        </div>
        <div className={activeNav === 'fun' ? 'nav-button-active' : 'nav-button'} onClick={() => handleChangeNav('fun')}>
            Fun Stuff
        </div>

    </section>
  <section id="content">
    {contentText}
    </section>
    </>);
}
