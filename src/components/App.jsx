import react, {Component} from 'react'
import Modal from './Modal'
import Clock from './Clock'
import Tabs from './Tabs/Tabs'
import tabsLink from '../components/tabs.json'
import IconButton from './ButtonsAll/IconButton'
import {ReactComponent as LookIcon} from '../img/door.svg'
class App extends Component{
  state={
    showModal: false
  }
  changeToggleModal = () =>{
    console.log("Нажали на кнопку открыть модалку")
   this.setState(({showModal})=>({
     showModal: !showModal
   }))
  }
  render(){
    const {showModal}=this.state
    return(
      <>
     
      {showModal && <Modal onChangeToggleModal={this.changeToggleModal}>
       <Clock />
      </Modal>}
      <Tabs onTabs={tabsLink}/>
      <IconButton onClick={this.changeToggleModal}>Open
      <LookIcon width="32" heitgh="32"/>
      </IconButton>
      </>
    
    )
  }
}
export default App
