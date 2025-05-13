import { Link } from "react-router-dom";
import type { iAlbumUserCell } from "./interface";
import { Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";


export default function AlbumUserCell(p: iAlbumUserCell) {
    return (
        <tr className="bg-white text-sm ">
            <td>{p.id}</td>
            <td>{p.title}</td>
            <td>
                <Link to={'/albums/' + p.id} >
                    <Button
                        variant="outlined"
                        type="default"
                        icon={<EyeOutlined/>}
                    >
                        Show
                    </Button>
                </Link>

            </td>
        </tr>
    )
}