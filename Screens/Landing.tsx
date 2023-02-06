import React, { useState } from "react";
import { getData, storeData } from "./Storage";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
const Landing = () => {
    const [name, Setname] = useState<string>('');
    const [email, Setemail] = useState<string>('');
    const [mobileNumber, SetMobileNumber] = useState<string>('');
    const [age, SetAge] = useState<string>('');
    const [aadharNumber, SetAadharnumber] = useState<string>('');
 
    type myDataType= {
        Name: string;
        Email: string;
        MobileNo: string;
        Age: string;
        AadharNo: string;
      }

  const myData : myDataType = {
    Name : name,
    Email: email,
    MobileNo : mobileNumber,
    Age : age,
    AadharNo :aadharNumber,
  }

    const myFunction=async()=>{
            
            let data = await getData('userInfo');
            if(data.length==0)
            {
                data.push(myData);
                storeData('userInfo', data);
            }
            else
            {
                
                data.push(myData);
                storeData('userInfo', data);
            }
            let data3 = await getData('userInfo');
            console.log(data3);
            

            
            
            
    }
   
    
    return (
        <View>
            <Text style={styles.inputTitle}>Name</Text>
            <TextInput 
                style={styles.textInput} 
                onChangeText={Setname}
                value={name} />
            <Text style={styles.inputTitle}>Email</Text>
            <TextInput 
                style={styles.textInput}
                onChangeText={Setemail}
                value={email} />
            <Text style={styles.inputTitle}>Mobile Number</Text>
            <TextInput 
                style={styles.textInput} 
                keyboardType="numeric"
                onChangeText={SetMobileNumber}
                value={mobileNumber} />
            <Text style={styles.inputTitle}>Age</Text>
            <TextInput 
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={SetAge} />
            <Text style={styles.inputTitle} >Aadhar Number</Text>
            <TextInput 
               style={styles.textInput} 
               keyboardType="numeric"
               onChangeText={SetAadharnumber} />
            <TouchableOpacity onPress={()=>myFunction()} style={{backgroundColor:'pink'}} >
                
                <Text style={styles.submitButton}>Submit Here</Text>
               
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    inputTitle: {
        color: 'black',
        marginLeft: 12,
    },
    submitButton: {
        color: 'black',
        borderWidth: 1,
        textAlign: 'center',
        margin: 15,
        padding: 10,
        width: 110,
        borderRadius: 10,
        alignSelf: 'center',
       


    }
})
export default Landing;