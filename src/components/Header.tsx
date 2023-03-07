import styled from "styled-components"

export default function Header(){
	return(
		<HeaderStyled>
			<Name>
				<a href="https://github.com/gsdutra/text-encrypter-for-notion"
				target="blank">
					Text Encrypter for Notion
				</a>
			</Name>
		</HeaderStyled>
	)
}

const HeaderStyled = styled.div`
	height: 35px;
	width: 100%;
	background-color: #0E51C4;
	display: flex;
    padding-left: 8px;
	align-items: center;
`

const Name = styled.h1`
    color: #fff;
    font-size: 1.3rem;
    font-weight: 700;
	@import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');
	font-family: 'Secular One';
	cursor: hover;
	a{
		text-decoration: none;
	}
`