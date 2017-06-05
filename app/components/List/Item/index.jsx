import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router-dom'

import './style.less'

class Item extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		const data = this.props.data;
		return (
				<div className="list-item clear-fix">
					<Link to={'/detail/'+data.id}>
						<div className="item-img-container float-left">
							<img src={data.img} alt={data.title}/>
						</div>
						<div className="item-content">
							<div className="item-title-container clear-fix">
								<h3 className="float-left">合水人家才是真正的</h3>
								<span className="float-right">100m</span>
							</div>
							<p className="item-sub-title">
								很早之前合水人家就是我们向往的美食集合点
							</p>
							<div className="item-price-container clear-fix">
								<span className="price float-left">￥100</span>
								<span className="number float-right">已售{data.number}</span>
							</div>
						</div>
					</Link>
				</div>
			)
	}
}

export default Item