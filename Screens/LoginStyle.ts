import { DynamicColorIOS, StyleSheet } from "react-native";
import Dimention from "./Dimention";
const COLORS = {
    BLACK: 'black',
    WHITE: 'white',
};
const borderWidth = 3;
const borderRadius = 12;
export const Styles = StyleSheet.create({
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
    mainContainer: {
        flex: 1,
        // backgroundColor:'pink'
    },
    title: {
        fontSize: 20,
        color: '#333333',
        paddingLeft: 20,
        fontFamily: 'Poppins-SemiBold'



    },
    des: {
        fontSize: 14,
        color: '#000000',
        // paddingTop:Dimention.n(0),
        paddingLeft: 20,
        fontFamily: 'Poppins-Regular'




    },
    cardData: {
        marginTop: Dimention.n(190),
        marginLeft: Dimention.n(19),
        color: '#ffffff',
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold'
    },
    cardDes: {
        fontSize: 14,
        color: '#ffffff',
        marginLeft: Dimention.n(19),
        fontFamily: 'Poppins-Regular'


    },
    FlatePadding: {
        paddingLeft: Dimention.n(16),
        paddingRight: Dimention.n(16),
        // backgroundColor:'pink',

    },
    clickButton: {
        alignSelf: 'center',

    },
    linearGradient: {
        width: '100%',
        height: Dimention.n(430)
    },
    renderUpcommingDataCard: {
        height: Dimention.n(300),
        width: Dimention.n(250),
        backgroundColor: '#FFFFFF',
        margin: Dimention.n(4),
        borderRadius: Dimention.n(15),
        elevation: 19,
        marginTop: Dimention.n(24),
    },
    upcommindDataCard: {
        paddingLeft: Dimention.n(19),
        paddingRight: Dimention.n(19),
    },
    imageCard: {
        // width:'100%',
        // height:'100%',
        borderRadius: Dimention.n(15),
        // width:Dimention.n(240),
        height: Dimention.n(221),
        margin: Dimention.n(4),
        // backgroundColor:'pink'

    },
    cityName: {
        // margin:Dimention.n(15),
        fontSize: Dimention.n(16),
        fontFamily: 'Poppins-SemiBold',
        color: "#333333",
    },
    contentBox: {
        margin: Dimention.n(15),
    },
    dateContent: {
        fontSize: Dimention.n(14),
        color: '#757575',
        fontFamily: 'Poppins-Regular'
    },
    upcommindDataCardtitle: {
        fontSize: Dimention.n(20),
        marginLeft: Dimention.n(20),
        fontFamily: 'Poppins-SemiBold',
        color: '#333333',
        marginTop: Dimention.n(8)
        // padding:Dimention.n(4)
    },
    upcommindDataCardDes: {
        color: '#333333',
        fontFamily: 'Poppins-Regular',
        marginLeft: Dimention.n(20),
    },
    textColor: {
        color: "#333333",
        fontFamily: 'Poppins-SemiBold',
        fontSize: Dimention.n(12)
    },
    textColor2: {
        fontFamily: "Poppins-Medium",
        color: "gray",
        fontSize: Dimention.n(12)
    },
    container: {
        marginLeft: Dimention.n(20),
        marginRight: Dimention.n(20)
    },
    thumb: {
        backgroundColor: "#F4F6F7",
        borderRadius: Dimention.n(33),
        height: Dimention.n(22),
        borderWidth: Dimention.n(1.3),
        shadowColor: COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        borderColor: '#169EDE',
        shadowOpacity: 0.35,
        shadowRadius: Dimention.n(2),
        width: Dimention.n(22),
    },
    track: {
        backgroundColor: '#BAEBFF',
        borderRadius: Dimention.n(30),
        height: Dimention.n(20),
    },
    activeMark: {
        borderColor: 'white',
        borderWidth,
        borderRadius,
        shadowColor: '#31a4db',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: Dimention.n(5),
        shadowRadius: Dimention.n(2),
        left: Dimention.n(5),
    },
    inactiveMark: {
        borderColor: 'black',
        borderWidth,
        borderRadius,
    },
})

export const MakeTripStyle=StyleSheet.create({
    titleDate:{
        fontFamily: 'Poppins-SemiBold',
        color:"#333333",
        fontSize:Dimention.n(14),
        height:20,
        // backgroundColor:'pink',
        width:Dimention.n(102),
        // marginLeft:Dimention.n(20)
        
    },
    profileIcon:{
        width:Dimention.n(48),
        height:Dimention.n(48),
        marginLeft:Dimention.n(20),
        borderRadius:Dimention.n(34),
        marginRight:Dimention.n(16),
       alignContent:'center'
       
    },
    childAdult:{
        color:"#757575",
        fontFamily:'Poppins-Medium',
        fontSize:Dimention.n(12),
    },
    userName:{
        color:'#333333',
        fontFamily:'Poppins-SemiBold',
        fontSize:Dimention.n(16),
    },
    dateLineContent:{
        flexDirection: 'row',
        marginTop:Dimention.n(24), 
        justifyContent: 'space-evenly',
        marginLeft:Dimention.n(1),
        // backgroundColor:'red'
    },
    lineBorder:{
        height: Dimention.n(1.5), 
        backgroundColor: '#E0E0E0', 
        width: Dimention.n(200),
        marginTop: Dimention.n(8), 
        // marginLeft:Dimention.n(1)
    },
    profileContentStyle:{
        justifyContent:'flex-start',
        flexDirection:'row',
        height:Dimention.n(48),
        marginTop:Dimention.n(24),
        // marginLeft:Dimention.n(10)
    }
})

export const SplitBookingCard=StyleSheet.create({
    topCard:{
        backgroundColor:'#DFF3FA',
        width:Dimention.n(335),
        height:Dimention.n(162),
        margin:Dimention.n(20),
        borderRadius:Dimention.n(12),
        elevation:5,
        
  },
  innerCard:{
    backgroundColor:'#169EDE',
        width:Dimention.n(335),
        height:Dimention.n(90),
        borderRadius:Dimention.n(12),
        elevation:5,
  },
  smallCard:{
    backgroundColor:'#DFF3FA',
    width:Dimention.n(118),
    height:Dimention.n(27),
    borderRadius:Dimention.n(6),
    textAlign:'center',
    alignSelf:'center',
    marginTop:Dimention.n(-10),
    elevation:6,
    padding:Dimention.n(3),
    color:"#2E2E2E",
    fontFamily:'Poppins-Medium',
    fontSize:Dimention.n(13)
    
  },
  lineBorder:{
    height:3,
    backgroundColor:'#1DADE3',
    width:81,
    marginTop:2.5,


  },
  lableTitle:{
    color:"#FFFFFF",
    fontSize:Dimention.n(12),
    fontFamily:"Poppins-Regular"
  },
  Content:{
    color:'#FFFFFF',
    fontFamily:'Poppins-SemiBold',
    fontSize:Dimention.n(16)
  },
  outerLableTitle:{
    color:'#757575',
    fontFamily:'Poppins-Regular',
    fontSize:Dimention.n(12),
  },
  outerLableContent:{
    color:'#333333',
    fontSize:Dimention.n(16),
    fontFamily:"Poppins-SemiBold"
  },
  sectionListTitle:{
    marginLeft:20,
    color:"#333333",
    fontSize:Dimention.n(14),
    fontFamily:"Poppins-SemiBold",
    // backgroundColor:'red',
    width:Dimention.n(105),
    height:Dimention.n(20),
    marginTop:Dimention.n(24)
  },
  roomsDetails:{
    width:Dimention.n(101),
    height:Dimention.n(52),
    borderColor:"#1DADE3",
    borderWidth:Dimention.n(1),
    borderRadius:Dimention.n(8),
    marginRight:Dimention.n(8),
    // padding:8
    marginTop:8
    
  },
  BedRooms:{
    color:'#333333',
    fontFamily:"Poppins-SemiBold",
    fontSize:Dimention.n(16),
    marginLeft:12,
    // backgroundColor:'red',
    // width:33,
    height:23,
    marginTop:5
  },
  rooms:{
    color:'#757575',
    fontFamily:'Poppins-Regular',
    fontSize:Dimention.n(14),
    marginLeft:12
  },
  hLine:{
    height:Dimention.n(56),
    width:Dimention.n(1),
    backgroundColor:'gray',
    marginLeft:Dimention.n(16),
    marginRight:Dimention.n(4),
  },
  topBoxTextStyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginLeft: Dimention.n(24),
    marginRight:Dimention.n(24),
    marginTop:Dimention.n(18)
  },
  dotBorder:{
    backgroundColor:'#1DADE3',
    width:Dimention.n(8),
    height:Dimention.n(8),
    borderRadius:Dimention.n(6)
  },
  innerLineAlign:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:Dimention.n(18)
  },
  innerBoxAlign:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginLeft:Dimention.n(24),
    marginRight:Dimention.n(24),
    marginTop:Dimention.n(18)
  }
})

