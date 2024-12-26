import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const navigate = useNavigate();

  const onSubmitLogin = (e: any) => {
    e.preventDefault();
    localStorage.setItem('id', userName)
    localStorage.setItem('password', userPassword)
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen m-0">
      <div className="flex flex-col items-center bg-aliceblue p-5 border border-burlywood rounded shadow-md w-90">
        <h1 className="text-lg text-orange-800 my-5 ">Hotelify: Manage Your Stay with Ease</h1>

        <div className="w-full flex flex-col">
          <form onSubmit={onSubmitLogin}>
            <input
              className="p-2 mb-2 w-full border border-black box-border rounded h-10"
              type="text"
              onChange={e => setUserName(e.target.value)}
              placeholder="Enter Name"
              value={userName}
            />
            <input
              className="p-2 mb-2 w-full border border-black box-border rounded h-10"
              type="password"
              onChange={e => setUserPassword(e.target.value)}
              placeholder="Enter password"
              value={userPassword}
            />
            <button className="py-2 mt-2 w-full text-white bg-orange-800 rounded cursor-pointer" type="submit" onClick={onSubmitLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
