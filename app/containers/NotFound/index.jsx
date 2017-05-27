import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class NotFound extends Component {
    constructor(props) {
      super(props);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="notfound">
                <h5>404</h5>
            </div>
        )
    }
}
export default NotFound