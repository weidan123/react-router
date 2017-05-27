import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import List from '../../components/List'
import Header from '../../components/Header'
class Search extends Component {
    constructor(props) {
      super(props);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state = {
        data:[],
        value:''
      }
    }
    render() {
        return (
            <div id="Search">
                <Header title="搜索"/>
                <input type="text" placeholder="搜索用户" onKeyUp={this.keyupHandler.bind(this)} value={this.state.value} onChange={this.changeHandler.bind(this)}/>
                <List data={this.state.data} clickDel={this.clickDel.bind(this)}></List>
            </div>
        )
    }
    clickDel(index) {
      this.setState({
        data: this.state.data.filter((elem, i) => index !== i)
      })
    }
    changeHandler(e) {
      this.setState({
          value:e.target.value
        })
    }
    keyupHandler(e){
      let value = e.target.value;
      if(e.keyCode!== 13){
        return;
      } 
      this.setState({
          data:this.state.data.concat(value),
          value:""

        })
      console.log(this.state.data)
    }
    componentDidMount(){
      
    }
}
export default Search