export interface IPost {
    userName: string,
    typeUser: string,
    userImage: string,
    createDate: string
    descraptions: string,
    postImage?: string,
    postVideo?: string,
    comments: Array<IComments>
    likes: ILikes
}

export interface IComments {
    userName: string,
    userImage: string,
    createDate: string
    userNameReply?: string
    text: string,
    list_reply: Array<IComments>
}

export interface ILikes {
    listUserReacts: Array<{
        name: string
    }>,
    typeReacts: Array<{
        type: number | string
    }>
}