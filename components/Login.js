import Image from "next/image"
import LoginLogo from "../assets/siba.png"


function Login() {
    return (
        <div className="bg-black relative ">
            <h1>I am the login screen</h1>
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
                {/* Logo */}
                <Image className="object-cover rounded-full " src={LoginLogo} height={180} width={180} />

                {/* Login Button */}
                <button className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">Login to the Metaverse</button>
            </div>
            <div className="w-full h-screen">
                {/* background */}
                <Image src="https://links.papareact.com/55n" layout="fill" objectFit="cover" />
            </div>
        </div>
    )
}

export default Login
