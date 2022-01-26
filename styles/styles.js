import { StyleSheet } from 'react-native';
import { Colors } from './colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 2,
        marginHorizontal:10,

    },
    view:{
        marginTop:2,
        paddingVertical:5,
        justifyContent:'flex-end',
        alignContent:'center',
        height:85,
        maxHeight:85,
        width:'100%'
    },
    card: {
        width:'100%',
        maxWidth:'100%',
        height:120,
        maxHeight:150,
        padding: 10,
        borderBottomColor: Colors.GrayOne,
        borderBottomWidth: 1
    },
    row: {
        flexDirection: 'row'
    },
    column: {
        flexDirection: 'column',
        padding:2,
        backgroundColor:Colors.Tealish,
        marginVertical:2
    },
    image:{
        width:'100%',
        height:'100%'
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:Colors.GrayThree
    },
    subtitle:{
        fontSize:18,
        color:Colors.GrayTwo
    },
    icon:{
        fontSize:30,
        color:Colors.GrayTwo
    }

});