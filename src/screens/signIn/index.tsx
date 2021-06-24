import React, { useState } from "react";
import {View, Text, TextInput} from 'react-native';
import { styles } from './styles';

export function SignIn(){
    const model = {
        input: ''
    };

    const [getInput, setInput] = useState(model.input);

    return (
    <View style={ styles.container }>
        <Text>Screen SignIn</Text>
        
        <TextInput 
        style={styles.input} 
        value={getInput} 
        onChangeText={setInput}
        />

        <Text>
            Você digitou: {getInput}
        </Text>
    </View>
    );
}