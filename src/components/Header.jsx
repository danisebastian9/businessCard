import profileImage from './../assets/profileImage.jpg'


export default function Header() {
    return (
        <header>
            <div className="header--image">
                <img src={profileImage} alt="Business Card profile image" />
            </div>
        </header>
    )
}