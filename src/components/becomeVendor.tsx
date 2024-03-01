import { BecomeVendorStyle } from './styles/becomeVendor'
import { playfair_display, lora } from '../app/fonts'

export default function BecomeVendor() {
    return (
        <BecomeVendorStyle>
            <p className={playfair_display.className}>Interested in becoming a vendor?</p>
            <button className={lora.className}><i>click here</i></button>
        </BecomeVendorStyle>
    )
}