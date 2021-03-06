import React, { useState } from "react";
import {View, Image, Text, StatusBar} from 'react-native';
import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png';
import ButtonIcon from "../../components/ButtonIcon";

export function SignIn(){

    const [text, setText] = useState('');

    return (
    <View style={ styles.container }>
        <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
        />
       <Image 
       source={ IllustrationImg } 
       style={styles.image} 
       resizeMode='stretch'
       ></Image>

       <View style={styles.content}>
        <Text style={styles.title}>
            Organize{`\n`}
            suas jogatinas{`\n`}
            facilmente{`\n`}
        </Text>
        <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com amigos{`\n`}
        </Text>

        <ButtonIcon 
        title='Entre com Discord'
        activeOpacity={0.7}
        />
       </View>
    </View>
    );
}