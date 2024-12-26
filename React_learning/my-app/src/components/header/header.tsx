import { useNavigate } from "react-router-dom";

export function HeaderComp() {
    const navigate = useNavigate();
    const onLogout = () => {
        localStorage.clear();
        navigate('/login')
    }
    return (
        <div className="flex justify-between items-center bg-orange-800 w-full h-10 p-2">
            <span className="text-white">Plan your holiday</span>
              <button onClick={onLogout} className="bg-teal-500 text-white hover:bg-teal-600 flex items-center justify-center font-bold w-20 rounded">Sing out</button>  
        </div>

    )
}

