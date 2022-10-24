import { createContext } from "react";

const UserContext = createContext();

export default UserContext;

// const UserContextProvider = ({ user, drone, children }) => {
    
//     const [currentUser, setCurrentUser] = useState(user);
//     const [currentDrone, setCurrentDrone] = useState(drone);

//     return(
//         <UserContext.Provider value={{ currentUser }}>
//             {children}
//         </UserContext.Provider>
//     )

// }

// export { UserContext, UserContextProvider };