'use client'
import {
  Logo,
  HomeStyle,
  SectionTop,
  SectionBanner,
  SectionTypeOfMarkets,
  SectionMarketEvents,
  SectionMap
} from "@/components/styles/home";
import { playfair_display, lora } from './fonts'
import { useEffect, useState } from 'react';
import Footer from '../components/footer'
import BecomeVendor from "@/components/becomeVendor";
import DeskNav from '../components/deskNav'
import NavMobile from '../components/mobileNav'

function callNavItem(idParent: string) {
  if (idParent == '') {
    document.querySelector(`.food`)?.setAttribute('style', 'transition: 1.5s; width:60px')
    document.querySelector(`.retail`)?.setAttribute('style', 'transition: 1.5s; width:60px')
    document.querySelector(`.community`)?.setAttribute('style', 'transition: 1.5s; width:60px')
    document.querySelector('.body')?.classList.remove('hide')
    document.querySelector(`.logo`)?.classList.remove('logoMoved')
    document.querySelector(`.logo`)?.setAttribute('style', 'transition: 2s')

    // Card content invisible
    document.querySelector(`.topContentFood`)?.classList.remove('cardContentShow')
    document.querySelector(`.topContentRetail`)?.classList.remove('cardContentShow')
    document.querySelector(`.topContentCommunity`)?.classList.remove('cardContentShow')

  }
}

export default function Home() {
  const [state, setState] = useState(false)

  useEffect(() => {

    function handleScroll() {
      if (window.scrollY >= 550 && window.scrollY < 1000 && window.screenX > 760) {
        document.querySelector('.banner')?.classList.add('visible')
        setState(!state)
      } else if (window.scrollY >= 1800) {
        document.querySelector('.typesOfMarket')?.classList.add('visible')
        setState(!state)
      }
    }

    function handleOpen() {
      const timer = setTimeout(() => {
        document.querySelector('.community')?.setAttribute('style', 'transition: height 1s ease-in-out;')
        document.querySelector('.community')?.classList.add('visible')
      }, 500)

      const timerRetail = setTimeout(() => {
        document.querySelector('.retail')?.setAttribute('style', 'transition: height 1s ease-in-out;')
        document.querySelector('.retail')?.classList.add('visible')
      }, 650)

      const timerFood = setTimeout(() => {
        document.querySelector('.food')?.setAttribute('style', 'transition: height 1s ease-in-out;')
        document.querySelector('.food')?.classList.add('visible')
      }, 750)

      const title = setTimeout(() => {
        document.querySelector('.h1')?.setAttribute('style', 'opacity:1; transition: opacity 1s ease-in-out;')
      }, 1000)

      return () => {
        clearTimeout(timer)
        clearTimeout(timerRetail)
        clearTimeout(timerFood)
        clearTimeout(title)
      }
    }

    if (window.location.pathname == '/') {
      handleOpen()
    }

    if (window.screenX <= 760) {
      document.querySelector('.banner')?.classList.add('visible')
      document.querySelector('.typesOfMarket')?.classList.add('visible')
    }

    window.addEventListener("scroll", handleScroll);

  }, [state])

  return (
    <>
      <DeskNav />
      <NavMobile />
      <Logo>
        <div className="logo" onClick={() => callNavItem('')}>
          <svg width="90px" height="90px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <path d="M90.643 97.44s-4.586 0-5.309-1.005c-.722-1.005-1.558-2.991-1.5-5.913.058-2.921.557-3.22 1.733-5.823 1.177-2.604 1.592-3.593 3.717-6.239 2.124-2.646 2.953-3.544 6.23-6.153 3.28-2.608 3.441-3.037 7.174-4.512 3.734-1.475 5.6-2.2 11.255-2.768 5.655-.566 4.472-.401 8.768.761s5.042 1.18 9.55 4.196c4.508 3.015 8.397 7.81 8.397 7.81l4.82-9.237 7.266-9.53 11.205-11.582 4.332-.101 1.392 4.69-5.677 5.34-8.826 11.27-6.59 12.584s5.965-.458 11.805.587 5.267.322 9.828 3.284c4.56 2.962 6.525 3.368 10.667 10.028 4.141 6.66 4.082 7.188 4.927 15.051.845 7.863.594 8.612-1.781 14.235-2.376 5.623-7.35 7.375-7.35 7.375l-6.042-3.86s-.155 3.837-1.171 7.152c-1.017 3.314-2.294 7.256-5.262 13.832-2.968 6.576-3.867 8.752-8.447 16.545-4.58 7.794-4.533 7.476-9.561 14.097-5.028 6.622-5.52 7.248-11.461 13.59-5.942 6.341-5.408 7.14-11.71 11.142-6.303 4.001-15 5.816-15 5.816s-7.236-.109-13.338-3.998c-6.102-3.888-8.627-10.001-8.627-10.001s-2.973-7.293-4.894-15.16c-1.92-7.865-1.733-7.071-2.316-14.37-.584-7.298-.45-8.579-.2-17.11.251-8.532.012-8.558 1.192-16.743 1.18-8.185 1.214-9.874 3.917-18.698 2.702-8.825 6.887-16.582 6.887-16.582zm6.757-1.13s-4.981 6.523-8.491 16.386c-3.51 9.862-4.865 21.143-4.865 21.143s-1.057 7.613-1.178 16.826c-.122 9.214-.433 9.227.714 18.455 1.147 9.228 2.148 12.589 3.83 18.112 1.683 5.523 4.79 10.185 4.79 10.185s3.491 5.343 8.21 7.325c4.72 1.981 6.69 1.61 10.285.44 3.594-1.17 10.828-5.365 16.947-10.386 6.12-5.02 11.044-12.58 11.044-12.58s7.887-10.361 12.657-18.117c4.77-7.756 5.593-9.93 8.637-16.503 3.043-6.573 4.245-8.834 5.366-13.738 1.12-4.904 1.12-10.98 1.12-10.98l-8.993-10.091-8.248 9.205s-6.31 4.725-11.26 5.854c-4.95 1.129-5.917.617-10.26-.946s-5.084-1.915-8.154-5.68c-3.071-3.765-4.529-9.87-4.529-9.87s-.717-10.799-.777-13.16c-.06-2.36.322-4.717.322-4.717L97.4 96.31z" stroke="#979797" fillRule="evenodd" />
          </svg>
        </div>
      </Logo>
      <HomeStyle id='homeBody'>
        <div className='body'>
          <SectionTop>
            <h1 className={`${playfair_display.className} h1`}>Canal Street Market is a carefully curated retail market, food hall & community space open year-round at 265 Canal Street. Support Small Business this weekend!</h1>
          </SectionTop>
          <SectionBanner >
            <div className='banner'>
              <img src="/imagem.png" alt="banner" />
            </div>
          </SectionBanner>
          <SectionTypeOfMarkets>
            <h2 className={playfair_display.className}>A New Kind of Market</h2>
            <div className='typesOfMarket'>
              <div className='typesOfMarket_content'>
                <div className='typesOfMarket_box_img01'></div>
                <p className={lora.className}>Merging retail, food, art, and culture, Canal Street Market highlights top retail and design concepts, restaurants, and up-and-coming players in the downtown New York City community.</p>
              </div>
              <div className='typesOfMarket_content'>
                <div className='typesOfMarket_box_img02'></div>
                <p className={lora.className}>Retail Market Hours: <br /> Thursday – Sun: 11:00AM - 7:00PM</p>
              </div>
              <div className='typesOfMarket_content'>
                <div className='typesOfMarket_box_img03'></div>
                <p className={lora.className}>Food Hall Hours: <br />Mon – Sun: 11:00AM - 8:00PM</p>
              </div>
            </div>
          </SectionTypeOfMarkets>
          <SectionMarketEvents>
            <div className='marketEvent_title'>
              <svg fill="#000000" width="100px" height="100px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g id="Outline">
                  <g data-name="Outline" id="Outline-2">
                    <path d="M40.707,23.293a1,1,0,0,0-1.414,0L32,30.586l-7.293-7.293a1,1,0,0,0-1.414,1.414L29.586,31H26a1,1,0,0,0,0,2h5v2H26a1,1,0,0,0,0,2h5v8a1,1,0,0,0,2,0V37h5a1,1,0,0,0,0-2H33V33h5a1,1,0,0,0,0-2H34.415l6.292-6.292A1,1,0,0,0,40.707,23.293Z" />
                    <path d="M32,2A30,30,0,1,0,62,32,30.034,30.034,0,0,0,32,2Zm0,58A28,28,0,1,1,60,32,28.032,28.032,0,0,1,32,60Z" />
                    <path d="M49.655,16.793a3.172,3.172,0,1,0-3.172,3.172,3.137,3.137,0,0,0,1.263-.266A19.994,19.994,0,0,1,22.692,49.707a1,1,0,0,0-.933,1.77,21.987,21.987,0,0,0,27.47-33.125A3.141,3.141,0,0,0,49.655,16.793Zm-4.344,0a1.172,1.172,0,1,1,1.172,1.172A1.172,1.172,0,0,1,45.311,16.793Z" />
                    <path d="M16.793,44.034a3.157,3.157,0,0,0-.692.081A19.78,19.78,0,0,1,12,32,20.023,20.023,0,0,1,32,12a19.811,19.811,0,0,1,8.463,1.874,1,1,0,0,0,.848-1.812,21.99,21.99,0,0,0-26.922,33.1,3.158,3.158,0,1,0,2.4-1.126Zm0,4.345a1.173,1.173,0,1,1,1.172-1.172A1.172,1.172,0,0,1,16.793,48.379Z" />
                  </g></g>
              </svg>
              <h3 className={playfair_display.className}>Market <br /> Events</h3>
              <svg fill="#000000" width="100px" height="100px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g id="Outline">
                  <g data-name="Outline" id="Outline-2">
                    <path d="M40.707,23.293a1,1,0,0,0-1.414,0L32,30.586l-7.293-7.293a1,1,0,0,0-1.414,1.414L29.586,31H26a1,1,0,0,0,0,2h5v2H26a1,1,0,0,0,0,2h5v8a1,1,0,0,0,2,0V37h5a1,1,0,0,0,0-2H33V33h5a1,1,0,0,0,0-2H34.415l6.292-6.292A1,1,0,0,0,40.707,23.293Z" />
                    <path d="M32,2A30,30,0,1,0,62,32,30.034,30.034,0,0,0,32,2Zm0,58A28,28,0,1,1,60,32,28.032,28.032,0,0,1,32,60Z" />
                    <path d="M49.655,16.793a3.172,3.172,0,1,0-3.172,3.172,3.137,3.137,0,0,0,1.263-.266A19.994,19.994,0,0,1,22.692,49.707a1,1,0,0,0-.933,1.77,21.987,21.987,0,0,0,27.47-33.125A3.141,3.141,0,0,0,49.655,16.793Zm-4.344,0a1.172,1.172,0,1,1,1.172,1.172A1.172,1.172,0,0,1,45.311,16.793Z" />
                    <path d="M16.793,44.034a3.157,3.157,0,0,0-.692.081A19.78,19.78,0,0,1,12,32,20.023,20.023,0,0,1,32,12a19.811,19.811,0,0,1,8.463,1.874,1,1,0,0,0,.848-1.812,21.99,21.99,0,0,0-26.922,33.1,3.158,3.158,0,1,0,2.4-1.126Zm0,4.345a1.173,1.173,0,1,1,1.172-1.172A1.172,1.172,0,0,1,16.793,48.379Z" />
                  </g></g>
              </svg>
            </div>
            <div className='marketEvent_body'>
              <div className='informations'>
                <p className={`${lora.className} text`} >
                  <b> 09/21 </b><br /><br />
                  Small Business Retail Pop Up Weekend!
                </p>
                <p className={`${lora.className} text`} >
                  <b> 02/07 </b><br /><br />
                  New Balance x Paperboy Paris by Greenhouse @ Canal Street Market
                </p>
                <p className={`${lora.className} text`} >
                  <b> 12/11 </b><br /><br />
                  Hack City 12/11
                </p>
              </div>
              <button className={lora.className}><i>see all</i></button>
            </div>
          </SectionMarketEvents>
          <SectionMap>
            <div className='card txt'>
              <p className={lora.className}>265 Canal St. New York, NY</p>
            </div>
            <div className='card'>
              <div className='map'></div>
            </div>
          </SectionMap>
          <BecomeVendor color='black' padding={true} />
          <Footer color='black' />
        </div>
      </HomeStyle>
    </>
  );
}
