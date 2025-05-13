export interface iAlbum {
    userId: string,
    name: string,
    id: string,
    title: string
}
export interface iAlbumUserCell {
    name: string,
    id: string,
    title: string
}
export interface iAlbumDetail {
    userId: string,
    id: string,
    title: string
}
export interface iPhoto {
    albumId: string,
    id: string,
    title: string,
    url: string,
    thumbnailUrl: string
}