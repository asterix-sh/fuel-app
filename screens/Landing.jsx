import { Pressable, TextInput, Text, View } from 'react-native';
import { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import '../global.css'

export default function Landing() {
    const navigation = useNavigation();

    return (
        <View className='w-100% h-full flex flex-col items-center justify-center mx-5'>
            <Text className='text-black font-bold text-5xl'>Fuel</Text>

            <Pressable onPress={() => navigation.navigate('Setup')} className='mt-10 bg-primary active:bg-accent px-4 py-2 rounded-lg w-full items-center'>
                <Text className='text-white font-bold text-2xl'>Get Started</Text>
            </Pressable>
        </View>
    );
}
