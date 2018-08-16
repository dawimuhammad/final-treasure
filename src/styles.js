import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    board: {
        marginTop: 75
    },
    boardColumn: {
        flex: 1,
        flexDirection: 'column',
    },
    boardRow: {
        flexDirection: 'row',
    },
    boxOdd: {
        width: 50,
        height: 50,
        alignContent: 'center',
        backgroundColor: 'powderblue'
    },
    boxEven: {
        width: 50,
        height: 50,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'steelblue'
    },
    buttonView: {
        marginTop: 100,
    },
    player: {
        fontSize: 20,
        color: 'white'
    }
})

export default style