import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


import './style.less'
class SearchInput extends Component {
    constructor(props) {
      super(props);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state = {
        value:''
      }
    }
    render() {
        return (
            <div className="search-container">
                <input type="text" placeholder="请输入关键字" onClick={this.focusHandler.bind(this)}/>
            </div>
        )
    }
    focusHandler(){
        this.props.handler();
    }   
}
export default SearchInput