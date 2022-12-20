import { useNavigate } from 'react-router-dom';

const useToken = () => {
    const navigate = useNavigate()

    const validateUser = (user) => {
        const token = user.token;
        const data = {
            ...user.data
        }

        localStorage.setItem("accessToken", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/")
    }

    return validateUser;
};

export default useToken;