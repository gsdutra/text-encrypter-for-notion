import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
function App() {
	return (
		<Content>
			<GlobalStyle/>
				<form>
					<input type="text" placeholder="First Name" />
					<input type="text" placeholder="Last Name" />
				</form>
		</Content>
	);
}
const Content = styled.div`
    display: flex;
	width: 100%;
	height: 100vh;
	background-color: #191919;
`
export default App;

