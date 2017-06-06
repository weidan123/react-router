import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
const data1 = [
    {"name":"小红","sex":"男"},{"name":"小名","sex":"女"},{"name":"小明","sex":"男"}
]
class User extends Component{
    constructor(props) {
        super(props);
        this.state = {
           data:[]
        }
    }
    render() {
        let data = this.state.data;
        return (
            <div id="user">
                {
                    data.map(function(item,index){
                        return <table key={index}><tbody><tr><td>{item.name}</td><td>{item.sex}</td><td><button onClick={this.clickHandle.bind(this, index)}>删除</button></td></tr></tbody></table>
                    },this)
                }
                
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