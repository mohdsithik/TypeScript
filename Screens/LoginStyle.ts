import { StyleSheet } from "react-native";
import Dimention from "./Dimention";

const Styles = StyleSheet.create({
    imageBackground: { 
        // padding: 20, 
        width: Dimention.n(163), 
        height: Dimention.n(250), 
        borderRadius: Dimention.n(15), 
        margin: Dimention.n(4), 
        marginTop: Dimention.n(24), 
        overflow: 'hidden',
        // backgroundColor:'pink'
        // marginLeft:20 
    },
    mainContainer:{
        flex:1,
        // backgroundColor:'pink'
    },
    title:{
        fontSize:20,
        color:'#333333',
        paddingLeft:20,
        fontFamily:'Poppins-SemiBold'
        
        

    },
    des:{
        fontSize:14,
        color:'#000000',
        // paddingTop:Dimention.n(0),
        paddingLeft:20,
        fontFamily:'Poppins-Regular'
       

        

    },
    cardData:{
        marginTop:Dimention.n(190),
        marginLeft:Dimention.n(19),
        color:'#ffffff',
        fontSize:16,
        fontFamily:'Poppins-SemiBold'
    },
    cardDes:{
         fontSize:14,
         color:'#ffffff',
         marginLeft:Dimention.n(19),
         fontFamily:'Poppins-Regular'
         

    },
    FlatePadding:{
        paddingLeft:Dimention.n(16),
        paddingRight:Dimention.n(16),
        // backgroundColor:'pink',
        
    },
    clickButton:{
       alignSelf:'center',
       
    },
    linearGradient:{
        width:'100%',
        height:Dimention.n(350)
    },
    renderUpcommingDataCard:{
        height:Dimention.n(300),
        width:Dimention.n(250),
        backgroundColor:'#FFFFFF',
        margin:Dimention.n(4),
        borderRadius: Dimention.n(15),
        elevation:19,
        marginTop:Dimention.n(24),
    },
    upcommindDataCard:{
        paddingLeft:Dimention.n(19),
        paddingRight:Dimention.n(19),
    },
    imageCard:{
        // width:'100%',
        // height:'100%',
        borderRadius: Dimention.n(15),
        // width:Dimention.n(240),
        height:Dimention.n(221),
        margin:Dimention.n(4),
        // backgroundColor:'pink'

    },
    cityName:{
        // margin:Dimention.n(15),
        fontSize:Dimention.n(16),
        fontFamily:'Poppins-SemiBold',
        color:"#333333",
    },
    contentBox:{
        margin:Dimention.n(15),
    },
    dateContent:{
        fontSize:Dimention.n(14),
        color:'#757575',
        fontFamily:'Poppins-Regular'
    },
    upcommindDataCardtitle:{
        fontSize:Dimention.n(20),
        marginLeft:Dimention.n(20),
        fontFamily:'Poppins-SemiBold',
        color:'#333333',
        marginTop:Dimention.n(8)
        // padding:Dimention.n(4)
    },
    upcommindDataCardDes:{
        color:'#333333',
        fontFamily:'Poppins-Regular',
        marginLeft:Dimention.n(20),
    }
})
export default Styles;