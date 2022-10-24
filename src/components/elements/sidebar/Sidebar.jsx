import './Sidebar.scss';

const Sidebar = () => {
    return (
    <section className='sidebar'>
        <div className='personal_container'>
            <ul>
                <li>Your nickname</li>
            </ul>
        </div>
        <div className='users_container'>
            <ul>
                <li>username</li>
                <li>username</li>
                <li>username</li>
                <li>username</li>
                <li>username</li>
                <li>username</li>
            </ul>
        </div>
    </section>
    )
}

export default Sidebar;