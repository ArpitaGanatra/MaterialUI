import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight:345,
    maxWidth: 345,
    marginTop:'25px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  
}));

export default function InstaCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleLikeClick=()=>{
    alert('You liked the post!')
  }

  const handleShareClick=()=>{
    alert('You shared the post!')
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { avatarUrl, title, subtitle, description, imageUrl } = props;
return (
  <Card className={classes.root}>
    <CardHeader
     
        avatar={<Avatar src={avatarUrl} />}
      
      
      
      title={title}
      subheader={subtitle}
    />
    <CardMedia
      className={classes.media}
      image={imageUrl}
      title="Paella dish"
    />
    <CardContent>
      <Typography noWrap variant="body2" color="textSecondary" component="p">
      {description}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon onClick={handleLikeClick}/>
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon onClick={handleShareClick}/>
      </IconButton>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>Method:</Typography>
        <Typography paragraph>
          {description}
        </Typography>
    
      </CardContent>
    </Collapse>
  </Card>
);
}



