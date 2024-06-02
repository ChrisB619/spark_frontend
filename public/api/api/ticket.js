export const getTicket = () => {
    return fetch("dummyjson.com/ticket/1").then((res) => res.json())
}