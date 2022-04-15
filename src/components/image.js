import Imej from './style-image'
import Hina from '../image/hina.png'
import Hoshino from '../image/hoshino.png'
import Tsurugi from '../image/tsurugi.png'

function Muter(props) {
    switch(props.gambar){
        case 'hina':
            return (
                <div>
                    <Imej className="App-logo" src={Hina} alt=""/>
                </div>
            )
        case 'tsurugi':
            return (
                <div>
                    <Imej className="App-logo" src={Tsurugi} alt=""/>
                </div>
            )
        case 'hoshino':
            return (
                <div>
                    <Imej className="App-logo" src={Hoshino} alt=""/>
                </div>
            )
        default:
            return(<></>)
    }
}

export default Muter