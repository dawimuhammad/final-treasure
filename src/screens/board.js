import React, { Component } from 'react'
import { View, Button, Text } from 'react-native'
import styles from '../styles'
// import Icon from 'react-native-vector-icons/FontAwesome'

class Board extends Component {
    constructor() {
        super()
        this.state = {
            board: [],
            randomNumber: 5
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
                            <View>
                                <Text style={ styles.boardNumber }>21</Text>
                            </View>
                            <View>
                            {
                                (this.state.randomNumber === 21) && (
                                    <Text style={ styles.player }>o</Text>
                                )
                            }
                            </View>
                            <View>
                                <Text>  </Text>
                            </View>
                        </View>

                        <View style={ styles.boxOdd } >
                            <View>
                                <Text style={ styles.boardNumber }>22</Text>
                            </View>
                            <View>
                            {
                                (this.state.randomNumber === 22) && (
                                    <Text style={ styles.player }>o</Text>
                                )
                            }
                            </View>
                            <View>
                                <Text>  </Text>
                            </View>
                        </View>

                        <View style={ styles.boxEven } >
                            <View>
                                <Text style={ styles.boardNumber }>23</Text>
                            </View>
                            <View>
                            {
                                (this.state.randomNumber === 23) && (
                                    <Text style={ styles.player }>o</Text>
                                )
                            }
                            </View>
                            <View>
                                <Text>  </Text>
                            </View>
                        </View>

                        <View style={ styles.boxOdd } >
                            <View>
                                <Text style={ styles.boardNumber }>24</Text>
                            </View>
                            <View>
                            {
                                (this.state.randomNumber === 24) && (
                                    <Text style={ styles.player }>o</Text>
                                )
                            }
                            </View>
                            <View>
                                <Text>  </Text>
                            </View>
                        </View>

                        <View style={ styles.boxEven } >
                            <View>
                                <Text style={ styles.boardNumber }>25</Text>
                            </View>
                            <View>
                            {
                                (this.state.randomNumber === 25) && (
                                    <Text style={ styles.player }>o</Text>
                                )
                            }
                            </View>
                            <View>
                                <Text>  </Text>
                            </View>
                        </View>

                    </View>
                
                    <View style={ styles.boardRow }>

                        <View style={ styles.boxOdd }>
                            <View>
                                <Text style={ styles.boardNumber }>20</Text>
                            </View>
                            <View>
                            {
                                (this.state.randomNumber === 20) && (
                                    <Text style={ styles.player }>o</Text>
                                )
                            }
                            </View>
                            <View>
                                <Text>  </Text>
                            </View>
                        </View>

                        <View style={ styles.boxEven }>
                            <View>
                                <Text style={ styles.boardNumber }>19</Text>
                            </View>
                            <View>
                            {
                                (this.state.randomNumber === 19) && (
                                    <Text style={ styles.player }>o</Text>
                                )
                            }
                            </View>
                            <View>
                                <Text>  </Text>
                            </View>
                        </View>

                        <View style={ styles.boxOdd }>
                            <View>
                                <Text style={ styles.boardNumber }>18</Text>
                            </View>
                            <View>
                            {
                                (this.state.randomNumber === 18) && (
                                    <Text style={ styles.player }>o</Text>
                                )
                            }
                            </View>
                            <View>
                                <Text>  </Text>
                            </View>
                        </View>

                        <View style={ styles.boxEven }>
                            <View>
                                <Text style={ styles.boardNumber }>17</Text>
                            </View>
                            <View>
                            {
                                (this.state.randomNumber === 17) && (
                                    <Text style={ styles.player }>o</Text>
                                )
                            }
                            </View>
                            <View>
                                <Text>  </Text>
                            </View>
                        </View>

                        <View style={ styles.boxOdd }>
                            <View>
                                <Text style={ styles.boardNumber }>16</Text>
                            </View>
                            <View>
                            {
                                (this.state.randomNumber === 16) && (
                                    <Text style={ styles.player }>o</Text>
                                )
                            }
                            </View>
                            <View>
                                <Text>  </Text>
                            </View>
                        </View>

                    </View>

                    <View style={ styles.boardRow }>

                        <View style={ styles.boxEven } >
                            <View>
                                <Text style={ styles.boardNumber }>11</Text>
                            </View>
                            <View>
                            {
                                (this.state.randomNumber === 11) && (
                                    <Text style={ styles.player }>o</Text>
                                )
                            }
                            </View>
                            <View>
                                <Text>  </Text>
                            </View>
                        </View>
                        <View style={ styles.boxOdd } >
                            <View>
                                <Text style={ styles.boardNumber }>12</Text>
                            </View>
                            <View>
                            {
                                (this.state.randomNumber === 12) && (
                                    <Text style={ styles.player }>o</Text>
                                )
                            }
                            </View>
                            <View>
                                <Text>  </Text>
                            </View>
                        </View>
                        <View style={ styles.boxEven } >
                            <View>
                                <Text style={ styles.boardNumber }>13</Text>
                            </View>
                            <View>
                            {
                                (this.state.randomNumber === 13) && (
                                    <Text style={ styles.player }>o</Text>
                                )
                            }
                            </View>
                            <View>
                                <Text>  </Text>
                            </View>
                        </View>
                        <View style={ styles.boxOdd } >
                            <View>
                                <Text style={ styles.boardNumber }>14</Text>
                            </View>
                            <View>
                            {
                                (this.state.randomNumber === 14) && (
                                    <Text style={ styles.player }>o</Text>
                                )
                            }
                            </View>
                            <View>
                                <Text>  </Text>
                            </View>
                        </View>
                        <View style={ styles.boxEven } >
                            <View>
                                <Text style={ styles.boardNumber }>15</Text>
                            </View>
                            <View>
                            {
                                (this.state.randomNumber === 15) && (
                                    <Text style={ styles.player }>o</Text>
                                )
                            }
                            </View>
                            <View>
                                <Text>  </Text>
                            </View>
                        </View>
                    
                    </View>

                    <View style={ styles.boardRow }>

                        <View style={ styles.boxOdd }>
                            <View>
                                <Text style={ styles.boardNumber }>10</Text>
                            </View>
                            <View>
                            {
                                (this.state.randomNumber === 10) && (
                                    <Text style={ styles.player }>o</Text>
                                )
                            }
                            </View>
                            <View>
                                <Text>  </Text>
                            </View>
                        </View>

                        <View style={ styles.boxEven }>
                            <View>
                                <Text style={ styles.boardNumber }>9</Text>
                            </View>
                            <View>
                            {
                                (this.state.randomNumber === 9) && (
                                    <Text style={ styles.player }>o</Text>
                                )
                            }
                            </View>
                            <View>
                                <Text>  </Text>
                            </View>
                        </View>

                        <View style={ styles.boxOdd }>
                            <View>
                                <Text style={ styles.boardNumber }>8</Text>
                            </View>
                            <View>
                            {
                                (this.state.randomNumber === 8) && (
                                    <Text style={ styles.player }>o</Text>
                                )
                            }
                            </View>
                            <View>
                                <Text>  </Text>
                            </View>
                        </View>

                        <View style={ styles.boxEven }>
                            <View>
                                <Text style={ styles.boardNumber }>7</Text>
                            </View>
                            <View>
                            {
                                (this.state.randomNumber === 7) && (
                                    <Text style={ styles.player }>o</Text>
                                )
                            }
                            </View>
                            <View>
                                <Text>  </Text>
                            </View>
                        </View>

                        <View style={ styles.boxOdd }>
                            <View>
                                <Text style={ styles.boardNumber }>6</Text>
                            </View>
                            <View>
                            {
                                (this.state.randomNumber === 6) && (
                                    <Text style={ styles.player }>o</Text>
                                )
                            }
                            </View>
                            <View>
                                <Text>  </Text>
                            </View>
                        </View>
                    </View>

                    <View style={ styles.boardRow }>
                        <View style={ styles.boxEven } >
                            <View>
                                <Text style={ styles.boardNumber }>1</Text>
                            </View>
                            <View>
                            {
                                (this.state.randomNumber === 1) && (
                                    <Text style={ styles.player }>o</Text>
                                )
                            }
                            </View>
                            <View>
                                <Text>  </Text>
                            </View>
                        </View>

                        <View style={ styles.boxOdd } >
                            <View>
                                <Text style={ styles.boardNumber }>2</Text>
                            </View>
                            <View>
                            {
                                (this.state.randomNumber === 2) && (
                                    <Text style={ styles.player }>o</Text>
                                )
                            }
                            </View>
                            <View>
                                <Text>  </Text>
                            </View>    
                        </View>

                        <View style={ styles.boxEven } >
                            <View>
                                <Text style={ styles.boardNumber }>3</Text>
                            </View>
                            <View>
                            {
                                (this.state.randomNumber === 3) && (
                                    <Text style={ styles.player }>o</Text>
                                )
                            }
                            </View>
                            <View>
                                <Text>  </Text>
                            </View>  
                        </View>

                        <View style={ styles.boxOdd } >
                            <View>
                                <Text style={ styles.boardNumber }>4</Text>
                            </View>
                            <View>
                            {
                                (this.state.randomNumber === 4) && (
                                    <Text style={ styles.player }>o</Text>
                                )
                            }
                            </View>
                            <View>
                                <Text>  </Text>
                            </View>
                        </View>

                        <View style={ styles.boxEven } >
                            <View>
                                <Text style={ styles.boardNumber }>5</Text>
                            </View>
                            <View>
                            {
                                (this.state.randomNumber === 5) && (
                                    <Text style={ styles.player }>o</Text>
                                )
                            }
                            </View>
                            <View>
                                <Text>  </Text>
                            </View>
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