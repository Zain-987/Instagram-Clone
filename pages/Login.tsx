import { Button, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import InputComponent from '../components/InputComponent'

const LoginSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum"),
})
const Login = () => {
  return (
    <SafeAreaView>
      <Formik
      validationSchema={LoginSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, errors, touched, isValid, values }) => (
          <View>
            {/* <View>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                
                style={{borderWidth : errors.email && touched.email && 0.5 , borderColor : errors.email && touched.email && "red" }}
              />

              {errors.email && touched.email && (
                <span style={{color : 'red'}}>{errors.email}</span>
              )}
            </View> */}
            <KeyboardAvoidingView>
            <InputComponent handleChange={handleChange} handleBlur={handleBlur} values={values} errors={errors} touched={touched}  label="Email"/>
            <InputComponent handleChange={handleChange} handleBlur={handleBlur} values={values} errors={errors} touched={touched}  label="Password" secure={true}/>
            <Button onPress={handleSubmit} title="Submit" />
            </KeyboardAvoidingView>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({})