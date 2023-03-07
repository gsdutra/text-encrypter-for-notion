import styled from 'styled-components';

export default function TextInput(){
	return(
		<TextInputStyled>
			<a>Text to encrypt/decrypt:</a>
			<textarea></textarea>
		</TextInputStyled>
	)
}

const TextInputStyled = styled.div`
	margin-top: 7px;
    width: 100%;
	display: flex;
	flex-direction: column;
	width: 100%;
	textarea{
		height: 70px;
		resize: vertical;
	}
`