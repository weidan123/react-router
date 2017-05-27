import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import CityList from '../../components/CityList'
import { CITYNAME } from '../../config/localStorekey'
import LocalStore from '../../util/localStore'
import './style.less'


class City extends Component {
    constructor(props) {
      super(props);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state = {
        cityName:''
      }
    }
    render() {
        return (
            <div id="city">
                <Header title="选择城市"/>
                <div className="currentCity"><h5>{this.state.cityName}</h5></div>
                <CityList changeFn={this.changeCity.bind(this)}/>
            </div>
        )
    }
    componentDidMount(){
      let cityName = LocalStore.getItem(CITYNAME)
      if(!cityName){
        cityName = "上海"
      }
        this.setState({
            cityName:cityName
        })
    }
    changeCity(value) {
        console.log(value)
        LocalStore.setItem(CITYNAME,value)

        //路由跳转
        this.props.history.push('/');
    }
}
export default City