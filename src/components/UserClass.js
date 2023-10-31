import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
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
            </div>)
    }
}

export default UserClass;