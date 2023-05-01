import 'react-native-gesture-handler';
import { View, Text, StyleSheet, Button, SafeAreaView, FlatList, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react'
import Routes from './src/Routes';
const App = () => {

    return (
        <>
            <Routes />
        </>
    )
}

export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});
