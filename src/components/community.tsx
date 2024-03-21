import BecomeVendor from '@/components/becomeVendor'
import { playfair_display, lora, work_sans } from '../app/fonts'
import { CommunityStyle } from './styles/community'
import Footer from './footer'

interface Props {
    id: string
}

export default function Community(props: Props) {

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
                <button className='communityButton'>view all</button>
            </div>
            <div className='features'>
                <h3 className={playfair_display.className}>Features</h3>
                <div className='featuresPost'>
                    <div className='post'>
                        <div className='imgBox'>
                            <img src="./feature01.png" alt="" />
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
                <button className='communityButton'>view all stories</button>
            </div>
            <div className='marketRadio'>
                <div className='marketRadio-content'>
                    <div className='marketRadio-svg'>
                        <img src="./truck.png" alt="truck icon" />
                    </div>
                    <div className='marketRadio-box'>
                        <h2 className={`${playfair_display.className} marketRadio-title`}>Market <br /> Radio</h2>
                        <span className={work_sans.className}>Podcasted from the market</span>
                    </div>
                    <div className='marketRadio-svg'>
                        <img src="./truck.png" alt="truck icon" />
                    </div>
                </div>
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
                <button className={`${lora.className} btn`}><i>see all</i></button>
            </div>
            <BecomeVendor color='white' padding={false} />
            <Footer color='white' />
        </CommunityStyle>
    )
}