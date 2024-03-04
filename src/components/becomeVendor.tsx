import { BecomeVendorStyle } from './styles/becomeVendor'
import { playfair_display, lora } from '../app/fonts'

interface Props {
    color: string,
    padding: boolean,
}

export default function BecomeVendor(props: Props) {
    return (
        <BecomeVendorStyle>
            <div className={props.padding == true ? 'paddingOn' : 'paddingOff'}>
                <div className={props.color == 'white' ? 'bodyDiv white' : 'bodyDiv black'}>
                    <p className={playfair_display.className}>Interested in becoming a vendor?</p>
                    <button className={lora.className}><i>click here</i></button>
                </div>
            </div>
        </BecomeVendorStyle>
    )
}