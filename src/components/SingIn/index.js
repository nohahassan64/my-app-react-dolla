import React from 'react'
import { SingContainer , FormWrap , Icon , FormContent , Form , FormH1 , FormLabel , FormInput , FormButton , Text } from './SingInStyle'

const SingIn = () => {
    return (
        <>
        <SingContainer>
            <FormWrap>
                <Icon to="/">dolla</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sing in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type="email" required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type="password" required />
                        <FormButton type="submit">Continue</FormButton>
                        <Text>Forget Password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </SingContainer>
            
        </>
    )
}

export default SingIn
