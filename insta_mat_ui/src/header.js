import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { InstantSearch, SearchBox} from 'react-instantsearch-dom';
import { createConnector } from "react-instantsearch";
import algoliasearch from 'algoliasearch/lite';
import logo from './logo.png';
import SearchIcon from '@material-ui/icons/Search';

const searchClient = algoliasearch('X88UHRH60L', '068bd4fe4637bcb940cf68938d2bb8ed');

const useStyles = makeStyles((theme) => ({
    logoStyle:{
        height:"35px"
    },

    grow: {
      flexGrow: 1,
    },
    
    title: {

      fontSize:'30px',
      marginLeft:'10px',
      [theme.breakpoints.up('sm')]: {
        display:'inline-flex'
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: '20px',
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      color:'#000000',
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
        
      color: 'inherit',
    },
    inputInput: {
        
        
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    
    
  }));

const MyHits = createConnector({
    displayName: "ConditionalQuery",
    getProvidedProps(props, searchState, searchResults) {
      const { query, hits } = searchResults.results ? searchResults.results : {};
      return { query, hits };
    }
  })(({ query, hits }) => {
    const hs = hits && query ? hits.map((hit) => <div>Name:{hit.Name}, Company Name:{hit.Company}</div>) : null;
    return <div id="hits">{hs}</div>;
  });

const Header = () => {
    const classes=useStyles()
    return(
       
        <AppBar position='static'>
            <Toolbar>
                <img className={classes.logoStyle} src={logo} alt='logo'/>
                <Typography className={classes.title} className={classes.grow} variant="h6" >Instagram</Typography>
                
  
                <InstantSearch 
                searchClient={searchClient}
                indexName="Demo">
                <header className="header">
                <SearchBox translations = {{placeholder:'Search for Names'}}/> 
                <MyHits/>
                </header>
                </InstantSearch>

          
            <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <IconButton className={classes.grow} color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            </div>
            
               
          
            </Toolbar>
        </AppBar>
    )

}
export default Header