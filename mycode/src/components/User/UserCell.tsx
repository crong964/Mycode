import { Link } from "react-router-dom";
import type { iUser } from "./interface";
import { Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";

export default function UserCell(p: iUser) {
    return (
        <tr className="bg-white">
            <td>{p.id}</td>
            <td><img className="rounded-full size-7.5" src={`https://ui-avatars.com/api/?name=${p.name.replace(" ", "+")}&background=random`} alt={p.name} srcSet="" /></td>
            <td>{p.name}</td>
            <td className="text-blue-400 ">
                <a className="cursor-pointer" href={`mailto:${p.email}`}>{p.email}</a>.<br></br>
            </td>
            <td className="text-blue-400">
                <a href={`tel:${p.phone}`} className="cursor-pointer">
                    {p.phone}
                </a>
            </td>
            <td className="text-blue-400">
                <a target="_blank" className="cursor-pointer" href={`http://${p.website}`}>{p.website}</a>
            </td>
            <td>
                <Link to={'/user/' + p.id}  >
                    <Button
                        variant="outlined"
                        type="default"
                        icon={<EyeOutlined />}
                    >
                        Show
                    </Button>
                </Link>
            </td>
        </tr>
    )
}