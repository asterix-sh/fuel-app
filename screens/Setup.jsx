import { Pressable, TextInput, Text, View } from 'react-native';
import { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import '../global.css'

export default function Setup() {
  const navigation = useNavigation();
  const [age, setAge] = useState(0)



  return (
    <View className='w-100% h-full flex flex-col mx-5'>
      <View className='flex flex-row mt-20'>
        <Pressable onPress={() => navigation.navigate('Landing')}>
          <FontAwesomeIcon size={30} icon={faAngleLeft}/>
        </Pressable>

      </View>

      <Text className='mt-8 text-black text-2xl font-bold'>What is your date of birth?</Text>

      <View className='flex flex-row w-full justify-center gap-2'>
        <TextInput className='mt-4 bg-zinc-200 basis-1/4 px-4 py-3 rounded-lg' placeholder='Month'></TextInput>
        <TextInput className='mt-4 bg-zinc-200 basis-1/4 px-4 py-3 rounded-lg' placeholder='Day'></TextInput>
        <TextInput className='mt-4 bg-zinc-200 basis-2/4 px-4 py-3 rounded-lg' placeholder='Year'></TextInput>
      </View>

      <Pressable className='bg-primary active:bg-accent text-white text-center items-center py-2 rounded-lg mt-3'>
        <Text className='text-white font-bold text-xl'>Continue</Text>
      </Pressable>
    </View>
  );
}