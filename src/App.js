import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import UserCard from "./components/userCard";
import PostCard from "./components/postCard";
import Button from '@material-ui/core/Button';

class App extends React.Component {
    state = {
        usersView: true,
        users: [],
        posts: []
    };

    constructor(props) {
        super(props);
        fetch(`https://jsonplaceholder.typicode.com/users`).then(
            response => {
                response.json().then(data => {
                    this.setState( {users: data});
                })
            })
    }

    getPosts = async (userId) => {
        const users = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        this.setState({posts: await users.json(), usersView: false});
        console.log(this.state)
    };

    backToUsersView = async () => {
        this.setState({usersView: true});
    };

    render() {
        return (
            <div>
                {this.state.usersView &&
                <Container className='cardGrid' maxWidth="md">
                    <Grid container spacing={4}>
                        {this.state.users.map(user => (
                            <Grid item key={user.id} xs={12} sm={6} md={4}>
                                <UserCard user = {user} getPosts = {this.getPosts}/>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                }

                {!this.state.usersView &&
                    <div>
                        <Button id={'backToUsersView'} onClick={this.backToUsersView}>
                            Users
                        </Button>
                        <Container className='cardGrid' maxWidth="md">
                            <Grid container spacing={4}>
                                {this.state.posts.map(post => (
                                    <Grid item key={post.id} xs={12} sm={12} md={12}>
                                        <PostCard post = {post}/>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </div>
                }
            </div>
        )
    }
}

export default App;
