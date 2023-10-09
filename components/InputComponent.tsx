import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputComponent = ({ secure=false,handleChange , handleBlur , values , errors , touched , label} : any) => {
  return (

      <View>
        <Text>{label}</Text>
              <TextInput
                onChangeText={handleChange(label.toLowerCase())}
                onBlur={handleBlur(label.toLowerCase())}
                value={values[label.toLowerCase()]}
                secureTextEntry={secure}
                style={{borderWidth : errors[label.toLowerCase()] && touched[label.toLowerCase()] && 0.5 , borderColor : errors[label.toLowerCase()] && touched[label.toLowerCase()]  && "red" }}
              />

              {errors[label.toLowerCase()] && touched[label.toLowerCase()]  && (
                <Text style={{color : 'red'}}>{errors[label.toLowerCase()]}</Text>
              )}
            </View>
  )
}

export default InputComponent

const styles = StyleSheet.create({})