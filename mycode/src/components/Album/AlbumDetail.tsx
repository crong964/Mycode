import { useEffect, useState } from "react";
import useGetApi from "../../hook/useGetAPi";
import type { iAlbumDetail, iPhoto } from "./interface";
import type { iUser } from "../User/interface";
import Photos from "./Photos";
import Loading from "../Loadind/Loading";
import UserInfor from "../User/UserInfor";

export default function AlbumDetail(p: iAlbumDetail) {
    const userapi = useGetApi(`https://jsonplaceholder.typicode.com/users?id=${p.userId}`)
    const photoapi = useGetApi(`https://jsonplaceholder.typicode.com/photos?albumId=${p.id}&_limit=10`)

    const [user, setUser] = useState<iUser>()
    const [photo, setPhoto] = useState<iPhoto[]>([])
    useEffect(() => {
        if (!userapi.data || !photoapi.data) {
            return
        }

        setUser(userapi.data[0])
        setPhoto(photoapi.data)
        return () => {

        };
    }, [userapi.data, photoapi.data]);
    return (
        <div className="p-6 bg-white min-h-90 ">
            <div className="p-6 border-2 border-[#00000006]">
                {
                    user ? <UserInfor link={true} {...user}></UserInfor> : <></>
                }
                <div className="mt-6">

                </div>
                <div className="mt-6 border-t-2 border-[#00000006]">

                </div>
                <div className="py-6 ">
                    <div className="text-[20px] font-semibold">{p.title}</div>
                    {
                        photoapi.loading ?
                            <Loading></Loading> : <Photos ls={photo} />
                    }
                </div>

            </div>
        </div>
    )
}