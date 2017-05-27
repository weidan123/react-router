import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class User extends Component {
    constructor(props) {
      super(props);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="User">
                <h5>User</h5>
            </div>
        )
    }
}
export default User