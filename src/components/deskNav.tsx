import { DeskNavStyle } from "./styles/nav"
import { mockfood, mockRetail } from '@/components/data/mocks';
import { playfair_display, lora, work_sans } from '../app/fonts'
import NavChild from "./navChild";
import Community from "./community";

function callNavItem(idParent: string) {
    // window.history.pushState(null, '-', `/${idParent}`)

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

export default function DeskNav() {
    return (
        <DeskNavStyle>
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
        </DeskNavStyle>
    )
}