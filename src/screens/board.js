import React, { Component } from 'react'
import { View, Button, Text } from 'react-native'
import styles from '../styles'
// import Icon from 'react-native-vector-icons/FontAwesome'

class Board extends Component {
    constructor() {
        super()
        this.state = {
            board: [],
            randomNumber: 1
        }

        this.rollDice = this.rollDice.bind(this)
    }

    rollDice() {
        console.log(Math.floor(Math.random() * 7))
    }

    

    render () {
        return (
            <View style={ styles.board }>
                <View style={ styles.boardColumn}>
                    <View style={ styles.boardRow }>
                        <View style={ styles.boxEven } >
                        </View>
                        <View style={ styles.boxOdd } >
                        </View>
                        <View style={ styles.boxEven } >
                        </View>
                        <View style={ styles.boxOdd } >
                        </View>
                        <View style={ styles.boxEven } >
                        </View>
                    </View>
                
                    <View style={ styles.boardRow }>
                        <View style={ styles.boxOdd }>
                        </View>
                        <View style={ styles.boxEven }>
                        </View>
                        <View style={ styles.boxOdd }>
                        </View>
                        <View style={ styles.boxEven }>
                        </View>
                        <View style={ styles.boxOdd }>
                        </View>
                    </View>

                    <View style={ styles.boardRow }>
                        <View style={ styles.boxEven } >
                        </View>
                        <View style={ styles.boxOdd } >
                        </View>
                        <View style={ styles.boxEven } >
                        </View>
                        <View style={ styles.boxOdd } >
                        </View>
                        <View style={ styles.boxEven } >
                        </View>
                    </View>


                    <View style={ styles.boardRow }>
                        <View style={ styles.boxOdd }>
                        </View>
                        <View style={ styles.boxEven }>
                        </View>
                        <View style={ styles.boxOdd }>
                        </View>
                        <View style={ styles.boxEven }>
                        </View>
                        <View style={ styles.boxOdd }>
                        </View>
                    </View>

                    <View style={ styles.boardRow }>
                        <View style={ styles.boxEven } >
                            {
                                (this.state.randomNumber === 1) && (
                                    // <Icon name="grunt"></Icon>
                                    <Text style={ styles.player }>o</Text>
                                )
                            }
                        </View>
                        <View style={ styles.boxOdd } >
                        </View>
                        <View style={ styles.boxEven } >
                        </View>
                        <View style={ styles.boxOdd } >
                        </View>
                        <View style={ styles.boxEven } >
                        </View>
                    </View>
                    
                    <View style={ styles.buttonView }>
                        <Button onPress={ () => this.rollDice() } title="Roll Dice" color="teal">
                        </Button>
                    </View>
                </View>
                
            </View>
        )
    }

}

export default Board