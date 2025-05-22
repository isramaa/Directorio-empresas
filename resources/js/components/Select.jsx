import React, { useEffect, useState } from 'react'
import Config from '../Config'

const Select = ({ selected, value }) => {
    const [options, setOptions] = useState([])

    useEffect(() => {
        getOptions()
    }, [])

    const getOptions = async () => {
        const response = await Config.GetCategoriaAll()
        setOptions(response.data)
    }

    return (
        <select className="form-control" value={value} onChange={(e) => selected(e.target.value)}>
            <option value="">Seleccione una categoría</option>
            {options.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.nombre}
                </option>
            ))}
        </select>
    )
}

export default Select
