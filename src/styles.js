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
        justifyContent: 'space-between',
        backgroundColor: 'steelblue'
    },
    buttonView: {
        marginTop: 100,
    },
    player: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    },
    boardNumber: {
        color: 'white',
        fontSize: 13
    }
})

export default style