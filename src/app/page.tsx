'use client'
import Link from 'next/link'
import {
  NavStyle,
  Logo,
  HomeStyle,
  SectionTop,
  SectionBanner,
  SectionTypeOfMarkets,
  SectionMarketEvents,
  SectionMap,
  Footer
} from "@/components/styles/home";
import { playfair_display, lora, work_sans } from './fonts'
import { useEffect, useState } from 'react';
import BecomeVendor from '@/components/becomeVendor';
import NavChild from '@/components/navChild';
import Community from '@/components/community'
import { mockfood, mockRetail } from '@/components/data/mocks';

function callNavItem(idParent: string) {
  window.history.pushState(null, '-', `/${idParent}`)

  if (idParent == 'food' || idParent == 'retail' || idParent == 'community') {
    document.querySelector('.body')?.classList.add('hide')
    document.querySelector(`.logo`)?.classList.add('logoMoved')

  }

  if (idParent == 'food') {
    // Open menu
    document.querySelector(`.${idParent}`)?.setAttribute('style', 'transition: 2s; width:calc(100vw - 200px)')
    document.querySelector(`.retail`)?.setAttribute('style', 'transition: 2s; width:60px')
    document.querySelector(`.community`)?.setAttribute('style', 'transition: 2s; width:60px')

    // When food page is open
    setTimeout(() => {
      document.querySelector(`.topContentFood`)?.classList.add('cardContentShow')
    }, 1500)

    document.querySelector(`.topContentRetail`)?.classList.remove('cardContentShow')
    document.querySelector(`.topContentCommunity`)?.classList.remove('cardContentShow')

  } else if (idParent == 'retail') {
    document.querySelector(`.${idParent}`)?.setAttribute('style', 'transition: 2s; width:calc(100vw - 200px)')
    document.querySelector(`.food`)?.setAttribute('style', 'transition: 2s; width:calc(100vw - 200px)')
    document.querySelector(`.community`)?.setAttribute('style', 'transition: 2s; width:60px')

    // When Retail page is open  
    setTimeout(() => {
      document.querySelector(`.topContentRetail`)?.classList.add('cardContentShow')
    }, 1500)

    document.querySelector(`.topContentCommunity`)?.classList.remove('cardContentShow')


  } else if (idParent == 'community') {
    document.querySelector(`.food`)?.setAttribute('style', 'transition: 2s; width:calc(100vw - 200px)')
    document.querySelector(`.retail`)?.setAttribute('style', 'transition: 2s; width:calc(100vw - 200px)')
    document.querySelector(`.${idParent}`)?.setAttribute('style', 'transition: 2s; width:calc(100vw - 200px)')

    // When Community page is open  
    setTimeout(() => {
      document.querySelector(`.topContentCommunity`)?.classList.add('cardContentShow')
    }, 1500)

  } else if (idParent == '') {
    document.querySelector(`.food`)?.setAttribute('style', 'transition: 2s; width:60px')
    document.querySelector(`.retail`)?.setAttribute('style', 'transition: 2s; width:60px')
    document.querySelector(`.community`)?.setAttribute('style', 'transition: 2s; width:60px')
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
      if (window.scrollY >= 550 && window.scrollY < 1700) {
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
      }, 600)

      const timerFood = setTimeout(() => {
        document.querySelector('.food')?.setAttribute('style', 'transition: height 1s ease-in-out;')
        document.querySelector('.food')?.classList.add('visible')
      }, 700)

      return () => {
        clearTimeout(timer)
        clearTimeout(timerRetail)
        clearTimeout(timerFood)
      }
    }

    if (window.location.pathname == '/') {
      handleOpen()
    }

    window.addEventListener("scroll", handleScroll);

  }, [state])

  return (
    <>
      <NavStyle>
        <div className='stripe food widthNormal' onClick={() => callNavItem('food')}>
          <div className='title'>
            <h4 className={work_sans.className}>Food</h4>
          </div>
          <div className='content'>
            <NavChild id='topContentFood' title='The Food Hall' image='localimg3.png' mock={mockfood} />
          </div>
        </div>

        <div className='stripe retail widthNormal' onClick={() => callNavItem('retail')}>
          <div className='title'>
            <h4 className={work_sans.className}>Retail</h4>
          </div>
          <div className='content'>
            <NavChild id='topContentRetail' title='The Retail Market' image='localimg2.png' mock={mockRetail} />
          </div>
        </div>

        <div className='stripe community widthNormal' onClick={() => callNavItem('community')}>
          <div className='title'>
            <h4 className={work_sans.className}>Community</h4>
          </div>
          <div className='content'>
            <Community id='topContentCommunity' />
          </div>
        </div>
      </NavStyle>
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
            <h1 className={playfair_display.className}>Canal Street Market is a carefully curated retail market, food hall & community space open year-round at 265 Canal Street. Support Small Business this weekend!</h1>
          </SectionTop>
          <SectionBanner>
            <div className='banner'></div>
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
          <Footer>
            <BecomeVendor />
            <div className='socialMedia'>
              <Link href=''>
                <div className='box'>
                  <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                    width="30px" height="30px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" >
                    <path fill="#231F20" d="M62.828,12.482L51.514,1.168c-1.562-1.562-4.093-1.562-5.657,0.001c0,0-44.646,44.646-45.255,45.255
                        C-0.006,47.031,0,47.996,0,47.996l0.001,13.999c0,1.105,0.896,2,1.999,2.001h4.99c0.003,0,9.01,0,9.01,0s0.963,0.008,1.572-0.602
                        s45.256-45.257,45.256-45.257C64.392,16.575,64.392,14.046,62.828,12.482z M37.356,12.497l3.535,3.536L6.95,49.976l-3.536-3.536
                        L37.356,12.497z M8.364,51.39l33.941-33.942l4.243,4.243L12.606,55.632L8.364,51.39z M3.001,61.995c-0.553,0-1.001-0.446-1-0.999
                        v-1.583l2.582,2.582H3.001z M7.411,61.996l-5.41-5.41l0.001-8.73l14.141,14.141H7.411z M17.557,60.582l-3.536-3.536l33.942-33.94
                        l3.535,3.535L17.557,60.582z M52.912,25.227L38.771,11.083l2.828-2.828l14.143,14.143L52.912,25.227z M61.414,16.725l-4.259,4.259
                        L43.013,6.841l4.258-4.257c0.782-0.782,2.049-0.782,2.829-0.002l11.314,11.314C62.195,14.678,62.194,15.943,61.414,16.725z"/>
                  </svg>
                  <p className={lora.className}>Email us</p>
                </div>
              </Link>
              <Link href=''>
                <div className='box'>
                  <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#0F0F0F" />
                  </svg>
                  <p className={lora.className}>Follow us <br /> on Facebook</p>
                </div>
              </Link>
              <Link href=''>
                <div className='box'>
                  <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F" />
                    <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F" />
                  </svg>
                  <p className={lora.className}>
                    Follow us <br /> on Instagram
                  </p>
                </div>
              </Link>
            </div>

            <div className='footer'>

            </div>
          </Footer>
        </div>
      </HomeStyle>
    </>
  );
}
