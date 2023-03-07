import styled from 'styled-components'

export default function Password(){
	return(
		<OutputStyle>
			<Flex>
			<a>Output:</a>
			<Buttons>
				<button>Copy Output</button>
				<button>Encrypt</button>
                <button>Decrypt</button>
			</Buttons>
			</Flex>
			<Output><a></a></Output>
		</OutputStyle>
	)
}

const Output = styled.div`
	margin-top: 12px;
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
	}
`