import { useEffect, useState } from "react"
import useGetApi from "../../hook/useGetAPi"
import type { iAlbum } from "../../components/Album/interface"
import AlbumCell from "../../components/Album/AlbumCell"
import { Link, useSearchParams } from "react-router-dom"
import { Button, Pagination, Spin } from "antd";
import Loading from "../../components/Loadind/Loading"
export default function Albums() {
    const [searchParams, setSearchParams] = useSearchParams();
    const pageSize = parseInt(searchParams.get("pageSize") || "20")
    const current = parseInt(searchParams.get("current") || "1")

    const uapi = useGetApi("https://jsonplaceholder.typicode.com/users")
    const alapi = useGetApi(`https://jsonplaceholder.typicode.com/albums?_start=${(current - 1) * pageSize}&_limit=${pageSize}`)

    const [u, SetU] = useState<{ [key: string]: { name: string, id: string } }>({})
    const [al, SetAl] = useState<iAlbum[]>([])

    useEffect(() => {
        if (!alapi.data || !uapi.data) {
            return
        }


        let us: { [key: string]: { name: string, id: string } } = {}
        for (let i = 0; i < (uapi.data as []).length; i++) {
            const element = uapi.data[i] as any;

            us[element.id] = { id: "", name: "" }
            us[element.id].id = element.id
            us[element.id].name = element.name

        }
        SetU(us)
        SetAl(alapi.data)
        return () => {

        };
    }, [alapi.data, uapi.data]);
    console.log(100 / pageSize);

    return (
        <div className="p-6 min-h-90 ">
            <table className="table-auto w-full text-sm mt-3">
                <thead className="text-start">
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>User</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {(uapi.loading || alapi.loading) ?
                        <Loading /> :
                        al.map((v) => {
                            return <AlbumCell {...v} name={u[v.userId].name}></AlbumCell>
                        })
                    }
                </tbody>
            </table>

            {
                (uapi.loading || alapi.loading) ? <></> :
                    <div className=" mt-4">
                        <Pagination itemRender={(page, type) => {
                            if (type == "page") {
                                return (
                                    <Link to={`/albums?pageSize=${pageSize}&current=${page}`}>
                                        {page}
                                    </Link>
                                )
                            }
                            if (type == "jump-next") {
                                return (
                                    <Link to={`/albums?pageSize=${pageSize}&current=${page}`}>
                                        ...
                                    </Link>
                                )
                            }
                            if (type == "jump-prev") {
                                return (
                                    <Link to={`/albums?pageSize=${pageSize}&current=${page}`}>
                                        ...
                                    </Link>
                                )
                            }

                            if (type == "prev") {
                                return (
                                    <Button type="link" className="flex justify-center items-center" href={`/albums?pageSize=${pageSize}&current=${page}`}>
                                        <svg viewBox="64 64 896 896" focusable="false" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg>
                                    </Button>
                                )
                            }
                            if (type == "next") {
                                return (
                                    <Button type="link" className="flex justify-center items-center" href={`/albums?pageSize=${pageSize}&current=${page}`}>
                                        <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg>
                                    </Button>
                                )
                            }
                        }} align="end" onShowSizeChange={(p, s) => {
                            location.href = `/albums?pageSize=${s}&current=${p}`

                        }} showTitle={true} pageSize={pageSize} defaultCurrent={1} current={current} total={100}></Pagination>

                    </div>
            }
        </div >
    )
}