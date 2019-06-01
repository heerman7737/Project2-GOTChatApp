import React from 'react'
import './SendMessage.css'
import { Button , Input , Form , Label , Icon} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


const WriteMessage = ({ handleFormSubmit, handleInputChange, username, message }) =>
  <Form style={{display:"flex"}} id="sendMsg">
    <label htmlFor='title' id='username' value={username} />
    <Label  color='black' htmlFor='title' id='send'>
    <Label.Detail as="h3" id="msg"> Message:
    </Label.Detail>
    </Label>
    <Input style={{flexGrow:1}} type='text' id='WriteMessage' placeholder="Valar Morghulis"value={message} onChange={handleInputChange} />
    <Button color='black'  onClick={handleFormSubmit}>Send</Button>
  </Form>





export default WriteMessage
