import './Input.scss';
import React, {useContext, useState} from 'react';
import ChatContext from '../../context/ChatContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


const Input = () => {

    const { sendMessage, sendImage } = useContext(ChatContext);

    const [text, setText] = useState('');

    const submitMsg = (e) => {
        e.preventDefault();
        if (text) {
            sendMessage(text);
        } 
        setText('');
    }

    return (
    <section className='input_container'>
        <form onSubmit={e => submitMsg(e)}>
            <input
                onChange={e => setText(e.target.value)}
                placeholder='Message'
                type='text'
                autoFocus={true}
                value={text}
            />
            <button>
                <FontAwesomeIcon className='send-icon' icon={faPaperPlane} />
            </button>
        </form>
        {/* <form onSubmit={e => submitImg(e)}>
            <input type="file" accept="image/*" onChange={onImageChange} />
            <button>send</button>
        </form> */}
    </section>
    )
}

export default Input;