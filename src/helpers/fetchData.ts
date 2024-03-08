export const fetchData = async (url: string) => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        return await res.json()
    } catch (error) {
        console.log(error);
    }
}