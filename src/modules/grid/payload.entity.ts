export default interface Payload{
    title: string,
    payload: Chunk
}

interface Chunk{
    type: string,
    data: any
}