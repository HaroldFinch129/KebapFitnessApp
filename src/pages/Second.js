import React from "react";
import { Button, SafeAreaView,Button,Text } from "react-native";

const Second = (props) => {
    function backToFirst(){
        props.navigation.goBack();

    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Hello Second</Text>
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