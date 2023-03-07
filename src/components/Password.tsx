import styled from "styled-components"

export default function Password(){
	return(
		<PasswordStyled>
			<a>Password:</a>
			<input type="text"/>
		</PasswordStyled>
	)
}

const PasswordStyled = styled.div`
    display: flex;
	flex-direction: column;
	width: 100%;
`