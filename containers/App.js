import React, {Component} from 'react';
import '../css/main.scss'
import '../css/reset.scss'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import BottomNav from '../components/BottomNav';
import AppBody from '../components/AppBody';

export default class App extends Component {
    render () {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div className="main-container">
                    <AppBar title="My AppBar" />
                    <AppBody />
                    <BottomNav />
                </div>
            </MuiThemeProvider>
        )
    }
}
