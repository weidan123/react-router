import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
class Footer extends Component {
    constructor(props) {
      super(props);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="Footer">
                <Link to="/">首页</Link>
                <Link to="/detail">详情</Link>
                <Link to="/search">发现</Link>
                <Link to="/user">我的</Link>
            </div>
        )
    }
}
export default Footer