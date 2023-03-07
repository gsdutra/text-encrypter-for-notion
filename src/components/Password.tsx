import styled from "styled-components"

export default function Password(){
	return(
		<PasswordStyled>
			<a>Password</a>
			<input>
			</input>
		</PasswordStyled>
	)
}

const PasswordStyled = styled.div`
    display: flex;
	flex-direction: column;
	color: #d4d4d4;
	width: 100%;
	a{
		margin-bottom: 3px;
	}
`