import { useContext } from "react";
import { AuthContext } from "../App";



const Profile = ( {userdata}) => {

    const {logout} = useContext(AuthContext)


    console.log(userdata)
    return (
        <div style={{color:"white "}}>
            <h1>Profile</h1>
            {
                userdata && (
                    <div>
                        <p>Full Name: {userdata.fullname}</p>
                        <p>Email: {userdata.Email}</p>
                        <p>Password: {userdata.Password}</p>
                    </div>    
                )
            }
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Profile;


// const LoginWrapper = ({ children }) => {
//     const { isLoggedIn } = useContext(AuthContext);

//     if (!isLoggedIn) {
//         return (
//             <BrowserRouter>
//                 <Routes>
//                     <Route
//                         path="login"
//                         element={
//                             <PageLoadingWrapper>
//                                 <Login />
//                             </PageLoadingWrapper>
//                         }
//                     />
//                     <Route
//                         path="signup"
//                         element={
//                             <PageLoadingWrapper>
//                                 <Signup />
//                             </PageLoadingWrapper>
//                         }
//                     />
//                     <Route path="*" element={<NotFound />} />
//                 </Routes>
//             </BrowserRouter>
//         );
//     }

//     return <>{children}</>;
// }