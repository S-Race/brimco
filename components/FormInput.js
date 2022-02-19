const FormInput = ({ label, onChange, value, name, type="text" }) => {
    return (
        <div className="mt-5 mx-0">
            <label className="pointer-events-none" htmlFor={name}>
                <span className="text-lg block text-zinc-800">{label}</span>
            </label>
            <input
                className="bg-transparent border-2 border-solid border-neutral-200 block w-full py-1 px-2
                    text-lg text-zinc-800 focus:outline-none focus:border-blue-300 valid:outline-none
                    valid:border-sky-600 rounded-md"
                type={type} name={name} onChange={onChange} value={value}
                required
            />
        </div>
    );
};

export default FormInput;