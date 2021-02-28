import React,{useState} from 'react';
import { Text, View } from 'react-native'
import styles from '../style/style'

export default function Footer(){
        return(
            <View style={styles.footer}>
                <Text style={styles.author}>
                   Author: Agnes Eberhardt
                </Text>
            </View>
        )
}
