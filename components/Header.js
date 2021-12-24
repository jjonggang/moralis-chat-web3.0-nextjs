import { useMoralis } from "react-moralis";
import Image from "next/image"
import LoginLogo from "../assets/siba.png"
import Avatar from "./Avatar";
import ChangeUserName from "./ChangeUserName";

function Header() {
    const { user } = useMoralis();

    return (
        <div className="text-pink-500">
            <div>
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    {/* Header */}
                    <Image
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                        src={LoginLogo}
                    />
                </div>
                <div className="text-left lg:text-center">
                    <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
                        {/* Avatar */}
                        <Avatar logoutOnPress />
                        {/* username */}

                        {/* change username */}
                    </div>
                    {/* Welcome Message */}
                    <h1 className="text-3xl">Welcome</h1>
                    <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

                    {/*Change username component*/}
                    <ChangeUserName />
                </div>
            </div>
        </div>
    )
}

export default Header;