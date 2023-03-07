import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';

import Header from './components/Header';
import Password from './components/Password';
import TextInput from './components/TextInput';
import Output from './components/Output';

function App() {
	return (
		<Content>
			<GlobalStyle/>
			<Header/>
			<BodyStyled>
				<Password/>
				<TextInput/>
				<Output/>
			</BodyStyled>
		</Content>
	);
}
const Content = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #191919;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const BodyStyled = styled.div`
    width: 100%;
	max-width: 800px;
    height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-left: 20px;
	padding-right: 20px;
	padding-top: 10px;
	box-sizing: border-box;
`

export default App;

