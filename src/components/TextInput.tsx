import styled from 'styled-components';

interface Props {
	text: string;
	setText: (text: string) => void;
}

const TextInput: React.FC<Props> = ({text, setText}) => {
	return(
		<TextInputStyled>
			<a>Text to encrypt/decrypt:</a>
			<textarea value={text} onChange={event => setText(event.target.value)}></textarea>
		</TextInputStyled>
	)
}

export default TextInput;

const TextInputStyled = styled.div`
	margin-top: 7px;
    width: 100%;
	display: flex;
	flex-direction: column;
	width: 100%;
	textarea{
		height: 70px;
		resize: vertical;

		font-size: 14px;
		border-radius: 6px;
		line-height: 1.5;
		padding: 5px 10px;
		transition: box-shadow 100ms ease-in, border 100ms ease-in, background-color 100ms ease-in;
		border: 2px solid #dee1e2;
		color: rgb(14, 14, 16);
		background: #dee1e2;
		display: block;
		:hover {
			border-color: #ccc;
		}
		:focus{
			border-color: #9147ff;
			background: #fff;
		}  
	}
`