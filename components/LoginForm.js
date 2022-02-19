import { useState } from "react";

import FormInput from "./FormInput";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const updateForm = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const login = (e) => {
        e.preventDefault();

        console.log({ email: formData.email, password: formData.password });
    }

    return (
        <form onSubmit={login} className="flex flex-col font-bold lg:w-2/5 md:w-2/3 w-full
            rounded-lg p-6 sm:drop-shadow-lg bg-transparent bg-stone-100 sm:shadow-lg">
            <label className="text-4xl text-zinc-800 my-4">Login</label>
            <FormInput type="email" value={formData.email} name="email" onChange={updateForm} label="Email" />
            <FormInput type="password" value={formData.password} name="password"
                onChange={updateForm} label="Password" />
            <button type="submit" onSubmit={login}
                className="w-full py-2 px-4 text-gray-200 bg-sky-600 rounded-md my-4">Login</button>
        </form>
    );
};

export default LoginForm;