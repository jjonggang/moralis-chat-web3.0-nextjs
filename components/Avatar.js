import { useMoralis } from "react-moralis"
import Image from "next/image"

function Avatar({ userName, logoutOnPress }) {

    const { user, logout } = useMoralis();
    return (
        <Image
            className="rounded-full bg-black cursor-pointer hover:opacity-75"
            src={`https://avatars.dicebear.com/api/pixel-art/${userName || user.get("username")}hello.svg`}
            onClick={() => logoutOnPress && logout()}
            layout="fill"
        />
    )
}

export default Avatar