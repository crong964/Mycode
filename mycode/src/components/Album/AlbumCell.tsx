import { Link } from "react-router-dom";
import type { iAlbum } from "./interface";
import { Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";


export default function AlbumCell(p: iAlbum) {
    return (
        <tr className="bg-white">
            <td>{p.id}</td>
            <td>{p.title}</td>
            <td className="flex items-center space-x-2">
                <img className="size-7.5"
                    src={`https://ui-avatars.com/api/?name=${p.name.replace(" ", "+")}&background=random&rounded=true`}
                    alt={p.title} srcSet="" />
                <Link className="text-blue-400" to={'/user/' + p.userId}>{p.name}</Link>
            </td>
            <td>
                <Link to={'/albums/' + p.id}  >
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