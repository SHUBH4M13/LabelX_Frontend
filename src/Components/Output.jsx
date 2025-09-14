import React from 'react'

export default function Output({ tableData }) {

    return (
        <div className='w-full max-w-4xl border-2 border-white bg-white rounded-xl overflow-hidden shadow-lg'>
            <table className='w-full'>
                <thead className='bg-red-700/30'>
                    <tr>
                        <th className='px-6 py-4 text-left text-sm font-semibold text-red-900 uppercase tracking-wider'>
                            Ingredient
                        </th>
                        <th className='px-6 py-4 text-left text-sm font-semibold text-red-900 uppercase tracking-wider'>
                            Side Effects
                        </th>
                        <th className='px-6 py-4 text-left text-sm font-semibold text-red-900 uppercase tracking-wider'>
                            Banned in
                        </th>
                    </tr>
                </thead>

                <tbody className='bg-amber-500/30 divide-y divide-amber-600/20'>
                    {tableData.map((data, index) => (
                        <tr key={data.index} className='hover:bg-amber-500/40 transition-colors duration-200'>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-amber-800'>
                                {data.Ingredient}
                            </td>
                            <td className='py-4 whitespace-nowrap px-6 text-sm text-amber-800'>
                                {data.SideEffects}
                            </td>
                            <td className='py-4 whitespace-nowrap text-sm text-amber-800'>
                                {data.BannedIn}
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}