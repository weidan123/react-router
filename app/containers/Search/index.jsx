import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import List from '../../components/List'
import Header from '../../components/Header'
import './style.less'
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
      var arr1 = this.state.data;
        return (
            <div id="Search">
                <Header title="搜索"/>
                <div className="search_con">
                <input type="text" placeholder="添加用户" onKeyUp={this.keyupHandler.bind(this)} value={this.state.value} onChange={this.changeHandler.bind(this)} autoFocus/>
                {arr1.map((i,index) =>(
                  <div onClick={this.onDelete.bind(this,index)} key={index}>{i}<a>删除</a></div>
                ))}
              </div>
            </div>
        )
    }
    onDelete(index, e) {
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