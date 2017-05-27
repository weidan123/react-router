import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeList from '../Home/subpage/List'
import Header from '../../components/Header'
import { getListData } from '../../fetch/home/home'
import ListData from '../../../mock/home/list'
import { CITYNAME } from '../../config/localStorekey'
import LocalStore from '../../util/localStore'
class Detail extends Component {
    constructor(props) {
      super(props);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state = {
        hasMore:true,
        data:[],
        page:0
      }
    }
    render() {
        return (
            <div id="Detail">
                <Header title="详情"/>
                <HomeList data={this.state.data}/>
            </div>
        )
    }
    componentDidMount(){
        const cityName = LocalStore.getItem(CITYNAME)
        const result = getListData(cityName,0)
        this.resultHandle(result)
    }
    //处理数据
    resultHandle(result){
        result.then(res=>{
            if(res.ok){
                return res.json()               
            }else{
                return ListData;
            }
        }).then(json=>{
            const data = json.data;
            this.setState({
                data:this.state.data.concat(data)
            })
            console.log(this.state.data)

        }).catch(err=>{
            console.log(err.message);
        })
    }
}
export default Detail