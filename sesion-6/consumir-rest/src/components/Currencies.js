import Currency from "./Currency"
import { useEffect, useState } from 'react'

export default function Currencies() {
    const [currencies, setCurrencies] = useState({})


    useEffect(() => {
        const URL_API = 'https://api.coindesk.com/v1/bpi/currentprice.json'

        fetch(URL_API)
            .then(response => response.json())
            .then((json) => json.bpi)
            .then(curre => {
                console.log(curre);
                setCurrencies(curre)
            })
    }, [])

    return <div>
        <h2>Currencies</h2>
        <Currency {...currencies['EUR']} />
        <Currency {...currencies['GBP']} />
        <Currency {...currencies['USD']} />
    </div>
}