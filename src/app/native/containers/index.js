import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
} from 'react-native';
import {connect} from 'react-redux';
import {Link} from 'react-router-native';

import * as actions from '../../actions/index';
import Instructions from '../components/instructions';

class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {this.props.intl.messages['welcome.to.r3']}
                </Text>
                <Instructions/>
                <Link to="/other">
                    <Text style={styles.link}>
                        {this.props.intl.messages['show.other.component']}
                    </Text>
                </Link>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    link: {
        margin: 10      
    }
});

export default connect((state) => {
    return state;
}, actions)(Index);
