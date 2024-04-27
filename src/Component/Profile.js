const Profile = () => {
    return <h1>Profile</h1>
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