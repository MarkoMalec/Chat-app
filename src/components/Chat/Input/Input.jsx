import './Input.scss';
import React, {useContext, useState} from 'react';
import ChatContext from '../../context/ChatContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


const Input = () => {

    const { sendMessage } = useContext(ChatContext);

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
            {/* <input type="file" accept="image/*" onChange={onImageChange} /> */}
            <button>
                <FontAwesomeIcon className='send-icon' icon={faPaperPlane} />
            </button>
        </form>
    </section>
    )
}

export default Input;