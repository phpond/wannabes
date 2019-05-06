import React, {Component} from 'react';
import axios from "axios";
import 'font-awesome/css/font-awesome.min.css';
import '../css/menu.css';

class MenuContent extends Component {

    state = {
        menus: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        // axios.get('http://localhost:8083/category/{type}/menu')
            .then(res => {
                console.log(res);
                this.setState({menus: res.data});
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="site-content">
                <div className="wrapper-menu">
                    <div className="row">
                        {this.state.menus.map(menus => (
                        <a className="column white" href="/menu/detail">
                            <h2>Tum Yum Kung | {menus.id}</h2>
                            {/*<h2>Tum Yum Kung | {menus.foodName}</h2>*/}
                            <div className="cat_star">
                                <a className="cat_name" title=""><h7>ต้ม</h7></a>
                                <div className="reviews_short">
                                    <span title="5.00 Yıldız" className="stars_given">
                                        {/*<span style="width: 100%"></span>*/}
                                    </span>
                                </div>
                            </div>
                            <figure className="space-line">
                                <img width="294" height="196"
                                     src="http://www.thaifoodheritage.com/uploads/recipe_list/gallery/e3de5-jpg.jpeg"/>
                            </figure>
                            <div className="other_details space-line">
                                <div className="view">
                                    <i className="fa fa-eye"></i> 13.2B
                                </div>
                                <div className="likes">
                                    <i className="fa fa-heart"></i> 120
                                </div>
                                <div className="user">
                                    <h7>{menus.username}</h7>
                                    {/*<h7>{menus.memberId}</h7>*/}
                                </div>
                            </div>
                        </a>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuContent;