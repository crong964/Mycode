import { useState } from "react";
import type { iPhoto } from "./interface";
import { Image } from 'antd';

export default function Photos(p: { ls: iPhoto[] }) {
    return (
        <div className="grid grid-cols-7 text-sm mt-4">
            <Image.PreviewGroup>
                {p.ls.map((v) => {
                    return (
                        <div
                            className="col-span-1 self-center relative">
                            <Image src={v.thumbnailUrl} alt={v.title} srcSet="" />
                        </div>
                    )
                })}
            </Image.PreviewGroup>

        </div>
    )
}