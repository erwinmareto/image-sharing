import Pictures from "@/components/Pictures";

const UserPage = ({userData}) => {
    return (
        <div className="container">
            <h1 className="text-4xl my-5">{userData.username}</h1>
            <Pictures imageData={userData.Image} />
        </div>
    )
}

export default UserPage;