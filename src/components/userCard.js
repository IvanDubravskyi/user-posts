import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class UserCard extends React.Component {
    handleClick = () => {
        this.props.getPosts(this.props.user.id);
    };

    render() {
        return (
            <Card className="card">
                <CardActionArea>
                    <CardMedia
                        className='cardMedia'
                        image="https://source.unsplash.com/random"
                        title="Image title"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.user.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Username: {this.props.user.username}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Email: {this.props.user.email}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Phone: {this.props.user.phone}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Website: {this.props.user.website}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={this.handleClick} size="small" color="primary">
                        Show Posts
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default UserCard;

