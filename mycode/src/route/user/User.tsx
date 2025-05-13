import { useEffect, useState } from "react"
import type { iUser } from "../../components/User/interface";
import UserCell from "../../components/User/UserCell";
import useGetApi from "../../hook/useGetAPi";
import { Spin } from "antd";
import Loading from "../../components/Loadind/Loading";

export default function User() {
    const [d, S] = useState<iUser[]>([])
    const { data, loading } = useGetApi("https://jsonplaceholder.typicode.com/users")


    useEffect(() => {
        if (data != undefined) {
            S(data)

        }
        console.log(data);

    }, [data]);
    return (
        <div className="p-6 min-h-90 ">
            <div className="text-2xl">User</div>
            <table className="table-auto w-full text-sm mt-3">
                <thead className="text-start">
                    <tr>
                        <th>ID</th>
                        <th>
                            Avatar
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Phone
                        </th>
                        <th>Website	</th>
                        <th>Action	</th>
                    </tr>
                </thead>
                {
                    loading ?
                        <Loading></Loading> :
                        <tbody>
                            {
                                d.map((v) => {
                                    return <UserCell key={v.id} {...v} />
                                })
                            }
                        </tbody>
                }

            </table>
        </div>
    )
}