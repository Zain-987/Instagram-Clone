import { Button, KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import InputComponent from '../components/InputComponent'

const LoginSchema = yup.object().shape({
  username : yup.string().matches(/^[a-zA-Z0-9_]*$/, "Password Does not Matches the Required Format !").required("Username is Required !"),
  email: yup.string().email().required("Email is required"),
  password: yup.string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum"),
})
const Register = () => {
  return (
    <SafeAreaView>
      <Formik
      validationSchema={LoginSchema}
        initialValues={{username : '', email: '', password: '' }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, errors, touched, isValid, values }) => (
          <View>
           
            <KeyboardAvoidingView>
            <InputComponent handleChange={handleChange} handleBlur={handleBlur} values={values} errors={errors} touched={touched}  label="Username"/>
            <InputComponent handleChange={handleChange} handleBlur={handleBlur} values={values} errors={errors} touched={touched}  label="Email"/>
            <InputComponent handleChange={handleChange} handleBlur={handleBlur} values={values} errors={errors} touched={touched}  label="Password" secure={true}/>
            {/* <Button onPress={handleSubmit} title="Submit"  /> */}
            <Pressable onPress={handleSubmit}
            style={{paddingHorizontal : 10 , paddingVertical : 5 , backgroundColor : "blue"}}
            >
                <Text style={{color : "white"}}>Login</Text>
            </Pressable>
            </KeyboardAvoidingView>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({})