//banco de dados

export type Video = {
    videoURL: string;
    imageURL: string;
    description: string;
}

const videos: Video[] = [
    {
        videoURL: "video/video01.mp4",
        imageURL: "image/image01.jpg",
        description: "Harry Potter and the Philosopher's Stone"
    },
    {
        videoURL: "video/video02.mp4",
        imageURL: "image/image02.jpg",
        description: "Harry Potter and the Chamber of Secrets"
    },
    {
        videoURL: "video/video03.mp4",
        imageURL: "image/image03.jpg",
        description: "Harry Potter and the Prisoner of Azkaban"
    },
    {
        videoURL: "video/video04.mp4",
        imageURL: "image/image04.jpg",
        description: "Harry Potter and the Goblet of Fire"
    },
    {
        videoURL: "video/video05.mp4",
        imageURL: "image/image05.jpg",
        description: "Harry Potter and the Order of the Phoenix"
    },
    {
        videoURL: "video/video06.mp4",
        imageURL: "image/image06.jpg",
        description: "Harry Potter and the Half-Blood Prince"
    },
    {
        videoURL: "video/video07.mp4",
        imageURL: "image/image07.jpg",
        description: "Harry Potter and the Deathly Hallows"
    }

]

export default videos;