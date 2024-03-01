import BecomeVendor from '@/components/becomeVendor'
import { playfair_display, lora, work_sans } from '../app/fonts'
import { CommunityStyle } from './styles/community'
import { useEffect } from 'react'

interface Props {
    id: string
}

export default function Community(props: Props) {
    useEffect(() => {
        if (window.location.pathname == '/community') {
            console.log('Community')
        }
    })
    return (
        <CommunityStyle className={props.id}>
            <div className='top'>
                <h1 className={playfair_display.className}>Canal St. Community</h1>
            </div>
            <div className='marketEvents'>
                <div className='communityMarketEvents'>
                    <div className='border column'>
                        <span className={`${work_sans.className} date`}>09/21 (past)</span>
                        <span className={`${work_sans.className} event`}>Small Business Retail Pop Up Weekend!</span>
                    </div>
                    <div className='border'>

                    </div>
                    <div className='border'>

                    </div>
                    <div className='border column'>
                        <span className={`${work_sans.className} date`}>02/07 (past)</span>
                        <span className={`${work_sans.className} event`}>New Balance x Paperboy Paris by Greenhouse @ Canal Street Market</span>
                    </div>
                </div>
                <div className='communityMarketEvents'>
                    <div className='borderY column'>
                        <span className={`${work_sans.className} date`}>09/21 (past)</span>
                        <span className={`${work_sans.className} event`}>Small Business Retail Pop Up Weekend!</span>
                    </div>
                    <div className='borderBottom'>

                    </div>
                    <div className='borderBottom'>

                    </div>
                    <div className='borderY column'>
                        <span className={`${work_sans.className} date`}>02/07 (past) aaa</span>
                        <span className={`${work_sans.className} event`}>New Balance x Paperboy Paris by Greenhouse @ Canal Street Market</span>
                    </div>
                </div>
                <h2 className={playfair_display.className}>Market Events</h2>
                <button>view all</button>
            </div>
            <div className='features'>
                <h3 className={playfair_display.className}>Features</h3>
                <div className='featuresPost'>
                    <div className='post'>
                        <div className='imgBox'>
                            <img src="./feature01.jpg" alt="" />
                        </div>
                        <div className='text singleLine'>
                            <span>CSM Community - AMDC</span>
                        </div>
                    </div>
                    <div className='post'>
                        <div className='imgBox'>
                            <img src="./feature02.jpg" alt="" />
                        </div>
                        <div className='text doubleLine'>
                            <span>CSM Community - Joe's Steam Rice Rolls</span>
                        </div>
                    </div>
                    <div className='post'>
                        <div className='imgBox'>
                            <img src="./feature03.jpg" alt="" />
                        </div>
                        <div className='text singleLine'>
                            <span>CSM Community - Bereop Tech</span>
                        </div>
                    </div>
                    <div className='post'>
                        <div className='imgBox'>
                            <img src="./feature04.jpg" alt="" />
                        </div>
                        <div className='text singleLine'>
                            <span>CSM Community - Izakaya</span>
                        </div>
                    </div>
                </div>
                <button>view all stories</button>
            </div>
            <div className='marketRadio'>
                <div className='marketRadio-content'>
                    <div className='marketRadio-svg'>
                        <img src="./truck.png" alt="truck icon" />
                    </div>
                    <div className='marketRadio-box'>
                        <h2 className={`${playfair_display.className} marketRadio-title`}>Market <br /> Radio</h2>
                        <span className={work_sans.className}>All under one roof!</span>
                    </div>
                    <div className='marketRadio-svg'>
                        <img src="./truck.png" alt="truck icon" />
                    </div>
                </div>
            </div>
        </CommunityStyle>
    )
}