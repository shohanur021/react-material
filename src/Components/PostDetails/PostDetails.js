import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Comments from '../Comments/Comments';
// import fakeImage from '../../fakeImage';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

const PostDetails = () => {
    const img = "https://lh3.googleusercontent.com/El8xMEfygbkIBZvNo3TLkEgNL1bcYeUOgop5rETtQteoRNXITwa0wR-RdoFLjj7peiS_GkGZruMpNWN0UGdtLDNQGGx8p7mE1XqYOMkVMLS5SxEg4wH6PtuSEEKhHF3ecxFeEcHX1Q=w2400";
    // const images = fakeImage.img;
    // const [images, setImages] = useState(fakeImage);
    const { id } = useParams();
    const [post, setPost] = useState({});
    const classes = useStyles();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, []);
    return (
        <div className="my-30">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{post.title}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{post.body}</Typography>
                    </CardContent>
                </CardActionArea>
                <Comments id={id} img={img}></Comments>
            </Card>
        </div>
    );
};

export default PostDetails;
