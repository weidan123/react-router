import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

const data1 = [
    {"name":"小红"},{"name":"小名"},{"name":"小明"}
]
class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
           data:[]
        }
    }
    render() {
        let data = this.state.data;
        return (
            <div>Home
                {
                    data.map(function(item,index){
                        return <div key={index}>Hello, {item.name}!<button onClick={this.clickHandle.bind(this, index)}>删除</button></div>
                    },this)
                }
                <Link to="/city">city</Link>
                
            </div>
        )
    }
     componentDidMount() {
       this.setState({
           data:data1
       })
        
    }
    clickHandle(index) {
        console.log(index);
        let data = this.state.data;
        data.splice(index,1);
        this.setState({
            data:data
        })
    }
}
export default User