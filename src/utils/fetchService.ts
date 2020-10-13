export default async function fetchService(input: RequestInfo, init?: RequestInit):  Promise<Response> {
    return fetch(input, init)
}