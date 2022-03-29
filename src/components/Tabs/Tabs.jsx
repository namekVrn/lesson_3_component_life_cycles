import react, {Component} from 'react'
class Tabs extends Component{
    state={
        tabsInd:0
    }
    setIndex = (ind) =>{
        this.setState({
            tabsInd: ind
        })
    }
    shouldComponentUpdate(nextProps, nextState){
        return nextState.tabsInd !== this.state.tabsInd
    }
    render(){

        const {onTabs} = this.props // массив с базой данныйх из пропса
        console.log("re-render")
        const {tabsInd} = this.state // диструктуризация state, хранится индекс 
        const activTab = onTabs[tabsInd] // переменная с активным индексом
        return(
            <>
                <div><h2>практика паттерна активного элемента и метода shouldComponentUpdate </h2>
                    {onTabs.map((item,ind)=>(
                        <button
                        key={item.label}
                        onClick={()=>this.setIndex(ind)}
                        >{item.label}</button>
                    ))}
                </div>
                <div>   
                    <h1>{activTab.label}</h1>
                    <p>{activTab.Content}</p>
                </div>
            </>
        )
    }
}
export default Tabs