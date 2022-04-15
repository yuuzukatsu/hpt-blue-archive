import Imej from './style-image'

//import image
import Hina from '../image/hina.png'
import Hoshino from '../image/hoshino.png'
import Tsurugi from '../image/tsurugi.png'
import Arona from '../image/arona.png'
import Aru from '../image/aru.png'
import Fuuka from '../image/fuuka.png'
import Hifumi from '../image/hifumi.png'
import Momoi from '../image/momoi.png'

function Muter(props) {
    switch(props.gambar){
        case 'Hina':
            return (
                <div>
                    <Imej className="App-logo" src={Hina} alt=""/>
                </div>
            )
        case 'Tsurugi':
            return (
                <div>
                    <Imej className="App-logo" src={Tsurugi} alt=""/>
                </div>
            )
        case 'Hoshino':
            return (
                <div>
                    <Imej className="App-logo" src={Hoshino} alt=""/>
                </div>
            )
        case 'Arona':
            return (
                <div>
                    <Imej className="App-logo" src={Arona} alt=""/>
                </div>
            )
        case 'Aru':
            return (
                <div>
                    <Imej className="App-logo" src={Aru} alt=""/>
                </div>
            )
        case 'Fuuka':
            return (
                <div>
                    <Imej className="App-logo" src={Fuuka} alt=""/>
                </div>
            )
        case 'Hifumi':
            return (
                <div>
                    <Imej className="App-logo" src={Hifumi} alt=""/>
                </div>
            )
        case 'Momoi':
            return (
                <div>
                    <Imej className="App-logo" src={Momoi} alt=""/>
                </div>
            )
        default:
            return(<></>)
    }
}

export default Muter