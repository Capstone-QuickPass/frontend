import { Button } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { ButtonContainer, Container } from './styled';

const Welcome: React.FC = (): ReactElement => {
    const history = useHistory();
    
    return (
        <Container>
            <ButtonContainer>
                <Button  color="primary" onClick={() => {history.push("/login")}}>
                    Login
                </Button>
                <Button color="secondary" onClick={() => {history.push("/signup")}}>
                    Sign Up
                </Button>
            </ButtonContainer>
            
        </Container>
    );
}

export default Welcome;