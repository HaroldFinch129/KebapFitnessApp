import React from "react";
import { Button, SafeAreaView,Text,StyleSheet } from "react-native";

const Second = (props) => {
    function backToFirst(){
        props.navigation.goBack();

    }
    const respect = props.route.params.salute
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text} >Hello Second</Text>
            <Text >{respect}</Text>

            <Button title="Go Back" onPress={backToFirst}/>
        </SafeAreaView>
    )
};

export default Second;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
    },
    text:{
        fontSize:40,
        fontWeight:'bold',
    },
})