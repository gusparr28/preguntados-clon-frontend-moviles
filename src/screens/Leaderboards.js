import React from 'react';
import { View, Text } from 'react-native';

import { leaderboardsStyle } from '../styles/screens/Leaderboards';

const Leaderboards = () => {
    return (
        <View style={leaderboardsStyle.container}>
            <Text style={leaderboardsStyle.title}>Top 10 Ranking</Text>
        </View>
    )
}

export default Leaderboards;