import react, {Component} from 'react'
class Clock extends Component{
    state={
        time: new Date().toLocaleTimeString(),
    }
  intervalId = null
    componentDidMount(){
        this.intervalId = setInterval(()=>this.setState({
            time: new Date().toLocaleTimeString()
        }), 1000)
    }
    componentWillUnmount(){
        clearInterval(this.intervalId)
    }
    render(){
        return <div>{this.state.time}</div>
    }
}
export default Clock