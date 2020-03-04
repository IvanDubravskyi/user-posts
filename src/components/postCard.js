import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class PostCard extends React.Component {
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
                            {this.props.post.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.props.post.body}
                        </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

export default PostCard;

