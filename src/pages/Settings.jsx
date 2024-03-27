import ChnageProfilePicture from "../components/settings/ChnageProfilePicture"
import DeleteAccount from "../components/settings/DeleteAccount"
import EditProfile from "../components/settings/EditProfile"
import UpdatePassword from "../components/settings/UpdatePassword"

const Settings = () => {
  return (
    <div>
      <h1 className="mb-4 md:mb-14 text md:text-2xl font-bold text-richblack-5"> Edit Profile </h1>
      <ChnageProfilePicture /> 
      <EditProfile/>
      <UpdatePassword/>
      <DeleteAccount/>           
    </div>
  )
}

export default Settings


