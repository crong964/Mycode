import { useEffect, useState } from "react";

export default function useGetApi(url: string) {
    const [loading, SetL] = useState(true)
    const [data, SetData] = useState()

    useEffect(() => {
        SetL(true)
        fetch(url)
            .then((v) => {
                return v.json()
            })
            .then((v) => {
                setTimeout(() => {
                    SetData(v)
                    SetL(false)
                }, 300);
            })
        return () => {

        };
    }, [url]);
    return { loading, data }
}