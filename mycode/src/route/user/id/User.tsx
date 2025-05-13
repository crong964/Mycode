import { NavLink, useParams } from "react-router-dom";
import useGetApi from "../../../hook/useGetAPi";
import { useEffect, useState } from "react";
import type { iUser } from "../../../components/User/interface";
import type { iAlbumUserCell } from "../../../components/Album/interface";
import AlbumUserCell from "../../../components/Album/AlbumUserCell";
import Loading from "../../../components/Loadind/Loading";
import { Button } from "antd";
import UserInfor from "../../../components/User/UserInfor";

export default function UserId() {
    let params = useParams();
    const u = useGetApi(`https://jsonplaceholder.typicode.com/users?id=${params.id}`)
    const al = useGetApi(`https://jsonplaceholder.typicode.com/albums?userId=${params.id}`)
    const [userdata, setUserData] = useState<iUser>()
    const [aldata, setAlData] = useState<iAlbumUserCell[]>()
    useEffect(() => {
        if (u.data && al.data) {
            setUserData(u.data[0])
            setAlData(al.data)
        }
    }, [u.data, al.data])
    return (
        <div className="min-h-90 p-6">
            <div className="flex space-x-2">
                <NavLink
                    to="/user"
                    className={({ isActive, isPending }) => {
                        let v = 'flex items-center space-x-2 '
                        if (isPending) {
                            return v
                        }
                        if (isActive) {
                            return `${v} `
                        }
                        return v
                    }}
                >
                    <svg className="fill-[#00000061]" viewBox="64 64 896 896" focusable="false" data-icon="idcard" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136V232h752v560zM610.3 476h123.4c1.3 0 2.3-3.6 2.3-8v-48c0-4.4-1-8-2.3-8H610.3c-1.3 0-2.3 3.6-2.3 8v48c0 4.4 1 8 2.3 8zm4.8 144h185.7c3.9 0 7.1-3.6 7.1-8v-48c0-4.4-3.2-8-7.1-8H615.1c-3.9 0-7.1 3.6-7.1 8v48c0 4.4 3.2 8 7.1 8zM224 673h43.9c4.2 0 7.6-3.3 7.9-7.5 3.8-50.5 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H522a8 8 0 008-8.4c-2.8-53.3-32-99.7-74.6-126.1a111.8 111.8 0 0029.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 00-74.6 126.1c-.4 4.6 3.2 8.4 7.8 8.4zm149-262c28.5 0 51.7 23.3 51.7 52s-23.2 52-51.7 52-51.7-23.3-51.7-52 23.2-52 51.7-52z"></path></svg>
                    <div className="text-sm text-[#00000061] hover:text-black px-0.5 hover:bg-[#dedede]">
                        User
                    </div>
                </NavLink>
                <div>/</div>
                <div>Show</div>
            </div>
            <div className="flex items-center space-x-3.5 py-3 px-3">

                <Button
                    onClick={() => {
                        history.back();
                    }}
                    type="text"
                    icon={<svg viewBox="64 64 896 896" focusable="false" data-icon="arrow-left" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>}>
                </Button>
                <div className="text-lg font-semibold">
                    Show User
                </div>

            </div>
            <div className="p-6 bg-white min-h-90 ">
                <div className="p-6 border-2 border-[#00000006]">
                    {
                        userdata ? <UserInfor link={false} {...userdata}></UserInfor> : <></>
                    }

                    <div className="mt-6">

                    </div>
                    <div className="mt-6 border-t-2 border-[#00000006]">

                    </div>
                    <div className="py-6 text-lg font-semibold">
                        Albums
                    </div>
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                al.loading ?
                                    <Loading></Loading> :
                                    aldata?.map((v) => {
                                        return <AlbumUserCell key={v.id} {...v} />
                                    })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}