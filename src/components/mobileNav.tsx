import { NavMobileStyle } from '@/components/styles/navMobile'
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useState } from 'react';
import { lora } from '@/app/fonts'
import Footer from './footer'

export default function NavMobile() {
    const [mobileMenuBodyOpen, setMobileMenuBodyOpen] = useState(false)

    function mobileMenuOpen(icon: string) {
        if (icon == 'menuOpenIcon') {
            document.querySelector(`.menuOpenIcon`)?.setAttribute('style', 'transform:translateX( 3vh ); opacity: 0;  transition: opacity .0.5s, transform .0.5s')
            document.querySelector(`.menuCloseIcon`)?.setAttribute('style', 'transform:translateX( -1vh ); opacity: 1; transition: opacity .0.5s')
            setMobileMenuBodyOpen(true)

            setTimeout(() => {
                document.querySelector(`.homeBox`)?.setAttribute('style', 'opacity: 1; transition: 0.5s')
            }, 200)

            setTimeout(() => {
                document.querySelector(`.foodBox`)?.setAttribute('style', 'opacity: 1; transition: 0.5s')
            }, 400)

            setTimeout(() => {
                document.querySelector(`.retailBox`)?.setAttribute('style', 'opacity: 1; transition: 0.5s')
            }, 600)

            setTimeout(() => {
                document.querySelector(`.communityBox`)?.setAttribute('style', 'opacity: 1; transition: 0.5s')
            }, 800)

            setTimeout(() => {
                document.querySelector(`.menufooter`)?.setAttribute('style', 'opacity: 1; transition: 0.5s')
            }, 1000)

        } else if (icon == 'menuCloseIcon') {
            document.querySelector(`.menuOpenIcon`)?.setAttribute('style', ' transform:translateX( -1vh ); opacity: 1; transition: opacity .0.5s, transform .0.5s')
            document.querySelector(`.menuCloseIcon`)?.setAttribute('style', 'transform:translateX( 1vh ); opacity: 0; transition: 0.5s')
            setMobileMenuBodyOpen(false)
            document.querySelector(`.homeBox`)?.setAttribute('style', 'opacity: 0')
            document.querySelector(`.foodBox`)?.setAttribute('style', 'opacity: 0')
            document.querySelector(`.retailBox`)?.setAttribute('style', 'opacity: 0')
            document.querySelector(`.communityBox`)?.setAttribute('style', 'opacity: 0')
            document.querySelector(`.menufooter`)?.setAttribute('style', 'opacity: 0')
        }
    }

    return (
        <NavMobileStyle >
            <div className={mobileMenuBodyOpen ? 'open' : 'close'}>
                <div className="icons">
                    <IoCloseOutline size={50} onClick={() => mobileMenuOpen('menuCloseIcon')} className="menuCloseIcon" />
                    <IoMenuOutline size={50} onClick={() => mobileMenuOpen('menuOpenIcon')} className="menuOpenIcon" />
                </div>
                <div className={mobileMenuBodyOpen ? 'option' : 'option hide'}>
                    <div className='row'>
                        <div className='homeBox'>
                            <span className={lora.className}>Home</span>
                        </div>
                        <div className='foodBox'>
                            <span className={lora.className}>Food</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='retailBox'>
                            <span className={lora.className}>Retail</span>
                        </div>
                        <div className='communityBox'>
                            <span className={lora.className}>Community</span>
                        </div>
                    </div>
                    <div className='menufooter'>
                        <button className={lora.className}><i>become a vender</i></button>
                        <div className='row'>
                            <div className=' row text'>
                                <span className={lora.className}>265 Canal Street</span>
                                <span className={lora.className}>New York, New York</span>
                            </div>
                            <div className=' row text'>
                                <span className={lora.className}>Food Hall Hours:</span>
                                <span className={lora.className}>Mon - Sun: 11AM - 8PM</span>
                            </div>
                            <div className=' row text'>
                                <span className={lora.className}>Retail Market Hours:</span>
                                <span className={lora.className}>Thurs - Sun: 11AM - 7PM</span>
                            </div>
                            <div className='footer footerWhite'>
                                <span>By Amanda Furuta - 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NavMobileStyle>
    )
}
