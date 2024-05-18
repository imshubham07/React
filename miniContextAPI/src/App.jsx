import LogIn from "./Component/LogIn"
import Profile from "./Component/Profile"
import UserContexProvider from "./context/UserContexProvider"


function App() {
  

  return (
    <UserContexProvider>
      <h1>Learning React and topic Name is miniContexAPI </h1>
      <LogIn/>
      <Profile/>
    </UserContexProvider>
  )
}

export default App
