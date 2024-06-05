import { Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="flex flex-col justify-around items-center min-h-[80vh]">
          <div className="min-w-96 min-h-72 md:w-96 lg:w-1/3 xl:w-1/4 border flex flex-col justify-around items-center gap-2">
            <div className="text-3xl font-semibold mt-4">
                Login
            </div>
            <div className="flex flex-col justify-between items-center gap-2 w-2/3">
            <TextField className="w-full" variant="standard" label={'username'} />
            <TextField className="w-full" variant="standard" label={'password'} type="password"/>
            </div>
            <div className="w-2/3 my-5">
                <Button className="w-full" variant="contained">
                    login
                </Button>
            </div>
            <div className="flex flex-col justify-between items-start gap-3 w-64 mb-5">
                <Link className="hover:text-gray-500" to={'/signup'}>create an account</Link>
                <Link className="hover:text-gray-500">forget password?</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
