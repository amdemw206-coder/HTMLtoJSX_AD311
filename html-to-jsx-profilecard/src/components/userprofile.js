const userProfile = {
    name: "Jane Doe", 
    email: "jane.doe@example.com"  
}

export function UserProfile({userProfile}){
    return(
        <div className='profile-card'>
            <h2>User Profile</h2>
            <img 
                src='https://example.com/user-photo.jpg' 
                alt='User Photo' className='photo'/>
            <p>Name: {userProfile.name}</p>
            <p>Email: {userProfile.email}</p>
            <a href={"mailto:${userProfile.email}"}>Send Email</a>
        </div>
    )
}