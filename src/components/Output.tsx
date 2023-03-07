import React, {useState} from 'react';
import styled from 'styled-components';
import AES from 'crypto-js/aes';
import CryptoJS from 'crypto-js';

interface Props {
	text: string;
	password: string;
}

const Output: React.FC<Props> = ({text, password}) => {

	const [outputText, setOutText] = useState<string>("");

	function encryptText(): void{
		const encryptedText = AES.encrypt(text, password).toString();
        setOutText(encryptedText);
	}

	function decryptText(): void{
		const decryptedText = AES.decrypt(outputText, password).toString(CryptoJS.enc.Utf8);
        setOutText(decryptedText);
	}

	return(
		<OutputStyle>
			<Flex>
			<a>Output:</a>
			<Buttons>
				<button onClick={() => {navigator.clipboard.writeText(outputText)}}>Copy Output</button>
				<button onClick={encryptText}>Encrypt</button>
                <button onClick={decryptText}>Decrypt</button>
			</Buttons>
			</Flex>
			<OutputStyled><a>{outputText}</a></OutputStyled>
		</OutputStyle>
	)
}

export default Output;

const OutputStyled = styled.div`
	margin-top: 12px;
	overflow-wrap: break-word;
`

const OutputStyle = styled.div`
	margin-top: 7px;
    display: flex;
	flex-direction: column;
	width: 100%;
`

const Flex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
	button{
		border-radius: 7px;
		border: none;
		margin-left: 9px;
		background-color: #8989ff;

		transition: .2s;
		&:hover{
			transform: scale(1.05);
			transition: .2s;
			cursor: pointer;
		}
	}
`