import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from "react-router-dom"
import SearchInput from '../SearchInput'
import './style.less'
class HomeHeader extends Component {
    constructor(props) {
      super(props);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="Home_header">
                <div className="float-left header_item"><Link to="/city">{this.props.cityName}
                    <i className="icon-angle-down"></i></Link>
                </div>
                <div className="float-right header-search_item">
                    <i className="icon-user"></i>
                </div>
                <SearchInput handler={this.handler.bind(this)}/>
            </div>
        )
    }
    handler() {
        this.props.history.push("./search")
    }
}
export default HomeHeader