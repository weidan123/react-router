import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader'
import List from '../../components/List'
import Category from '../../components/Category'
import { CITYNAME } from '../../config/localStorekey'
import LocalStore from '../../util/localStore'
import Ad from './subpage/Ad'
import './style.less'
class Home extends Component {
    constructor(props) {
      super(props);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state = {
        cityName:'',
        data:[],
        value:''
      }
    }
    render() {
        return (
            <div id="Home">
                <HomeHeader cityName={this.state.cityName} history={this.props.history}/>
                <Category/>
                <Ad/>
                <input type="text" placeholder="添加用户" onKeyUp={this.keyupHandler.bind(this)} value={this.state.value} onChange={this.changeHandler.bind(this)}/>
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
      let cityName = LocalStore.getItem(CITYNAME)
      if(cityName == "undefined"){
        cityName = "上海"
      }
      LocalStore.setItem(CITYNAME,cityName)
      this.setState({
          cityName:cityName
      })
    }
}


export default Home