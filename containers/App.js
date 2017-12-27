import React, {Component} from 'react';
import '../css/main.scss'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import MyAwesomeReactComponent from '../components/MyAwesomeReactComponent';

export default class App extends Component {
    render () {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <AppBar title="My AppBar" />
            </MuiThemeProvider>
        )
    }
}
