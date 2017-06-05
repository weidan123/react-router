import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader'

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
                <p>111</p>
                <Category/>
                <Ad/>
            </div>
        )
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