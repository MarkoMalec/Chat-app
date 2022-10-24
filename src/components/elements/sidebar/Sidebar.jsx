import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import ChatContext from '../../context/ChatContext';
import './Sidebar.scss';

const Sidebar = () => {
    const { user } = useContext(UserContext);
    const { membersArray } = useContext(ChatContext);
    console.log(membersArray);
    return (
    <section className='sidebar'>
        <div className='users_container'>
            <p className='users_list_title'>
                Current Users in room
            </p>
            <ul>
                {membersArray.map(member => (
                    <>
                    {member.clientData.username !== user.username ? <li>{member.clientData.username}</li> : ''}
                    </>
                ))}
            </ul>
        </div>
    </section>
    )
}

export default Sidebar;