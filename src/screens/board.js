import React, { Component } from 'react'
import { View } from 'react-native'
import styles from '../styles'

class Board extends Component {
    render () {
        return (
            <View>
                <View style={ styles.boardRow }>
                    <View style={ styles.boxEven } />
                    <View style={ styles.boxOdd } />
                    <View style={ styles.boxEven } />
                    <View style={ styles.boxOdd } />
                    <View style={ styles.boxEven } />
                </View>
                <View style={ styles.boardRow }>
                    <View style={ styles.boxEven } />
                    <View style={ styles.boxOdd } />
                    <View style={ styles.boxEven } />
                    <View style={ styles.boxOdd } />
                    <View style={ styles.boxEven } />
                </View>
                <View style={ styles.boardRow }>
                    <View style={ styles.boxEven } />
                    <View style={ styles.boxOdd } />
                    <View style={ styles.boxEven } />
                    <View style={ styles.boxOdd } />
                    <View style={ styles.boxEven } />
                </View>
                <View style={ styles.boardRow }>
                    <View style={ styles.boxEven } />
                    <View style={ styles.boxOdd } />
                    <View style={ styles.boxEven } />
                    <View style={ styles.boxOdd } />
                    <View style={ styles.boxEven } />
                </View>
                <View style={ styles.boardRow }>
                    <View style={ styles.boxEven } />
                    <View style={ styles.boxOdd } />
                    <View style={ styles.boxEven } />
                    <View style={ styles.boxOdd } />
                    <View style={ styles.boxEven } />
                </View>
            </View>
        )
    }

}

export default Board