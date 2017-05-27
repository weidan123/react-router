import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
class AddInput extends Component {
    constructor(props) {
      super(props);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state = {
        value:''
      }
    }
    render() {
        return (
            <div id="add_input">
                <input type="text" placeholder="添加用户" onKeyUp={this.props.keyupHandler} value={this.state.value}/>
            </div>
        )
    }
    componentDidMount(){
      
    }
}


export default AddInput