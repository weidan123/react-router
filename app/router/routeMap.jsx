import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

//redux流
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import HomeContainer from '../containers/Home'
import FooterContainer from '../components/Footer'
import LocalStore from '../util/localStore'
import { CITYNAME } from '../config/localStorekey'


import CityContainer from '../containers/City'
import SearchContainer from '../containers/Search'
import UserContainer from '../containers/user'
import DetailContainer from '../containers/Detail'
import NotFoundContainer from '../containers/NotFound'



class RouteMap extends Component{
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false,
            cityName:''
        }
    }
    render() {
        const history = createBrowserHistory();
        return (
            <Router>
            {
                this.state.initDone
                ?   <div id="app">
                        <Switch>
                            <Route exact path="/" component={HomeContainer} cityName={this.state.cityName}/>
                            <Route exact 
                                path="/city"  component={CityContainer} cityName={this.state.cityName}/>
                            <Route 
                                path="/search"  component={SearchContainer}/>
                            <Route 
                                path="/detail" component={DetailContainer}/>
                            <Route path="/user" component={UserContainer}/>
                            <Route component={NotFoundContainer}  />
                        </Switch>
                        <FooterContainer history={history}/>
                    </div>
                :   <div>正在加载...</div>
            }
            </Router>
        )
    }
    componentDidMount(){
        let cityName = LocalStore.getItem(CITYNAME)
        if(cityName == null){
            cityName = '上海'
        }
        LocalStore.setItem(CITYNAME,cityName)
        this.setState({
            initDone:true,
            cityName:cityName
        })
    }
}

export default RouteMap