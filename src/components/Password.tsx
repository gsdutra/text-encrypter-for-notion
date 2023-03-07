import styled from "styled-components"

interface Props {
	password: string;
	setPassword: (password: string) => void;
}

const Password: React.FC<Props> = ({password, setPassword}) => {
	return(
		<PasswordStyled>
			<a>Password:</a>
			<input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
		</PasswordStyled>
	)
}

export default Password;

const PasswordStyled = styled.div`
    display: flex;
	flex-direction: column;
	width: 100%;
	input{
		font-size: 14px;
		border-radius: 6px;
		line-height: 1.5;
		padding: 5px 10px;
		transition: box-shadow 100ms ease-in, border 100ms ease-in, background-color 100ms ease-in;
		border: 2px solid #dee1e2;
		color: rgb(14, 14, 16);
		background: #dee1e2;
		display: block;
		height: 36px;
		:hover {
			border-color: #ccc;
		}
		:focus{
			border-color: #9147ff;
			background: #fff;
		}  
	}
`