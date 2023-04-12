import {Component} from 'react'
class Footer extends Component
{
    // eslint-disable-next-line no-useless-constructor
    constructor(props)
    {
        super(props)
        this.state={hobby:"Long-drive"}
        this.state={hobbi:"music"}
    }
    handleClick()
    {
        this.setState({
            hobby:"music"
        })
    }
    render()
    
    {
        return(
            <div>
               <h1>{this.props.car}</h1> 
               <h1> {this.props.car} Hobbies are  {this.state.hobby}</h1>
               <br></br>
               <button onClick={this.handleClick.bind(this)}>{this.state.hobby} button
               
               
               
               
               
               </button>
            </div>
        )
    }
}
export default Footer;