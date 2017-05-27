import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import List from '../Home/subpage/List'
class Detail extends Component {
    constructor(props) {
      super(props);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="Detail">
                <h5>Detail</h5>
            </div>
        )
    }
}
export default Detail