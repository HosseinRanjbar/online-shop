import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  let userInfo = {
    userName: username,
    email: email,
    password: password,
    phone: number,
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(userInfo);
    setUsername("");
    setpassword("");
    setemail("");
    setnumber("");
  };
  return (
    <>
      <div className="min-h-screen">
        <div className="flex flex-col justify-center items-center min-h-[80vh]">
          <div className="min-w-96 min-h-fit md:w-96 lg:w-1/3 xl:w-1/4 border flex flex-col justify-around items-center gap-2">
            <div className="text-3xl font-semibold mt-4">signup</div>
            <div className="w-3/4">
              <form onSubmit={submitHandler} className="flex flex-col justify-between gap-5 w-full">
                <TextField
                  className="w-full"
                  variant="standard"
                  label={"username"}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  className="w-full"
                  variant="standard"
                  label={"password"}
                  type="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <TextField
                  className="w-full"
                  variant="standard"
                  label={"email"}
                  type="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                <TextField
                  className="w-full "
                  variant="standard"
                  label={"phone"}
                  type="number"
                  value={number}
                  onChange={(e) => setnumber(e.target.value)}
                />

                <Button type="submit" className="w-full" variant="contained">
                  login
                </Button>
              </form>
            </div>
            <div className="flex flex-col items-start my-4">
              <Link className="flex items-start" to={"/login"}>
                have an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
