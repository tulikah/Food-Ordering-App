import React from 'react';
import { UserContext } from '../utils/UserContext';


class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: '',
                avatar_url: '',
                blog: ''

            }
        }
        console.log('contructor')
    }

    async componentDidMount() {
        const getuser = await fetch('https://api.github.com/users/tulikah22');
        const res = await getuser.json();
        this.setState({
            userInfo: res
        })
        console.log('componentDidMount', this.state.userInfo);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        const { name, avatar_url, blog } = this.state.userInfo;
        console.log('render', this.state.userInfo);
        return (
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>Name: {name}</h2>
                <h3>Location: {blog}</h3>
                <UserContext.Consumer>
                    {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>

        )
    }
}

export default UserClass;