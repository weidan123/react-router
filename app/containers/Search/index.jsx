import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Search extends Component {
    constructor(props) {
      super(props);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="Search">
                <h5>Search</h5>
            </div>
        )
    }
}
export default Search