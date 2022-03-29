import react, {Component} from 'react'
import {createPortal} from 'react-dom'
import '../Modal/Modal.css'
const rootModal = document.querySelector('#root_modal')
console.log(react)
class Modal extends Component{
    componentDidMount(){
        console.log("Компонент смонтировался")
        window.addEventListener('keydown', this.keyDown)
    }
    componentWillUnmount(){
        window.removeEventListener('keydown', this.keyDown)
    }
    keyDown = (e)=>{
        if(e.code === "Escape"){
            this.props.onChangeToggleModal()
        }
    }
    clickBackDrop=(e)=>{
     if(e.target === e.currentTarget){
         this.props.onChangeToggleModal()
     }
      
    }
    render(){
        return(
            createPortal(<div className='modal_backDrop' onClick={this.clickBackDrop}>
            <div className="modal_window">
                {this.props.children}
                <button type="button" onClick={this.props.onChangeToggleModal}>Закрыть</button>
            </div>
        </div>, rootModal)
            
        )
    }
}
export default Modal