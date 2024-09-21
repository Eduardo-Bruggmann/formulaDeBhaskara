import React, { useState } from 'react';
import { calculateRoots } from '../utils/CalculateRoots';

export default function Form() {
    const [values, setValues] = useState({ value1: '', value2: '', value3: '' });
    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { value1, value2, value3 } = values;
        const res = calculateRoots(Number(value1), Number(value2), Number(value3));
        setResult(res);
    };

    return (
        <div className="flex flex-col bg-green-700 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-8">
            <h2 className="text-center text-2xl font-semibold mb-6 text-white">Calcule as Raízes</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                <label className="block text-white">
                    Valor 1:
                    <input 
                        type="number" 
                        name="value1" 
                        value={values.value1} 
                        onChange={handleChange} 
                        className="mt-1 block w-full px-3 py-2 bg-green-500 border border-green-900 rounded-md text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-green-300"
                        placeholder="Digite um valor qualquer"
                        required
                    />
                </label>
                <label className="block text-white">
                    Valor 2:
                    <input 
                        type="number" 
                        name="value2" 
                        value={values.value2} 
                        onChange={handleChange} 
                        className="mt-1 block w-full px-3 py-2 bg-green-500 border border-green-900 rounded-md text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-green-300"
                        placeholder="Digite um valor qualquer"
                        required
                    />
                </label>
                <label className="block text-white">
                    Valor 3:
                    <input 
                        type="number" 
                        name="value3" 
                        value={values.value3} 
                        onChange={handleChange} 
                        className="mt-1 block w-full px-3 py-2 bg-green-500 border border-green-900 rounded-md text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-green-300"
                        placeholder="Digite um valor qualquer"
                        required
                    />
                </label>
                <button type="submit" className="mt-4 px-4 py-2 bg-green-900 text-white rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-300">
                    Calcular
                </button>
            </form>
            {result && (
                <div className="mt-6 p-4 bg-green-200 rounded-lg">
                    {typeof result === 'string' ? result : `X1 = ${result.x1}, X2 = ${result.x2}`}
                </div>
            )}
        </div>
    );
}