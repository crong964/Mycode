import type { iUserInfor } from "./interface";

export default function UserInfor(p: iUserInfor) {
    return (
        <div className="flex space-x-6">
            <div>
                <img className="rounded-full size-7.5" src={`https://ui-avatars.com/api/?name=${p?.name?.replace(" ", "+")}&background=random`}
                    alt={p.name} srcSet="" />
            </div>
            <div className="flex flex-col text-blue-500 space-y-3">
                {
                    p.link ?
                        <a href={`/user/${p.id}`} className="font-bold">{p.name}</a> :
                        <p className="font-bold text-black">{p.name}</p>
                }
                <a className="text-sm" href={`mailto:${p.email}`}>{p.email}</a>
            </div>
        </div>
    )
}