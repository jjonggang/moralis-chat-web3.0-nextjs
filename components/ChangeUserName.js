import { useMoralis } from "react-moralis"

function ChangeUserName() {
    const { setUserData, isUserUpdating, userError, user } = useMoralis()

    const setUsername = () => {
        const username = prompt(`새로운 이름을 입력하세요.. 이름에 따라 아바타가 변경됩니다!(현재이름: ${user.getUsername()})`);
        if (!username) return;
        setUserData({
            username: username,
        })

    }

    return (
        <div className="text-sm absolute top-5 right-5">
            <button
                disabled={isUserUpdating}
                className="hover:text-pink-700"
                onClick={setUsername}
            >
                이름 변경
            </button>
        </div>
    )
}

export default ChangeUserName
