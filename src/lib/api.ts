export async function fetchUserDetails() {
    const timeout = Math.random() * 6000
    await new Promise((resolve) => setTimeout(resolve, timeout))
    console.log(`Selected timeout: ${timeout}`)
    return {
        timestamp: Date.now(),
        price: "$50.00"
    }
}