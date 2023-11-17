import {useState} from 'react'
import styled from "styled-components/native"
import Button from './components/Button'

const MainBlock = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`

const TextBox = styled.TextInput`
  font-size: 18px;
  border-bottom-width: 2px;
  border-color: #ccc;
  margin-top: 20px;
  max-width: 200px;
  width: 100%;
  text-align: center;
`

const BlockBtns = styled.View`
  margin-top: 30px;
  flex-direction: row;
  gap: 10px
`

const Label = styled.Text`
  border: 1px solid #000;
  min-width: 150px;
  padding: 10px;
  margin-top: 20px;
  text-align: center;
  font-size: 18px;
`

export default function App() {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [updateText, setUpdateText] = useState('Данные, введенные с инпутов');

  const clearInput = () => {
    setText('')
    setText2('')
  }

  const updateInputFunc = () => setUpdateText(`${text}\n${text2}`)

  return (
    <MainBlock>
      <TextBox placeholder='Введите текст' value={text} onChangeText={setText} />
      <TextBox placeholder='Введите текст' value={text2} onChangeText={setText2}/>

      <BlockBtns>
        <Button backStyle={{backgroundColor: "red"}} press={clearInput} textBtn={"Сбросить"}></Button>
        <Button backStyle={{backgroundColor: "#9eb1ec"}} press={updateInputFunc} textBtn={"Вставить"}></Button>
      </BlockBtns>

      <Label>{updateText}</Label>
    </MainBlock>
  )
}