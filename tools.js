export async function getCurrentWeather({ location }) {
    try {
        const weatherUrl = new URL("https://apis.scrimba.com/openweathermap/data/2.5/weather")
        weatherUrl.searchParams.append("q", location)
        weatherUrl.searchParams.append("units", "imperial")
        const res = await fetch(weatherUrl)
        const data = await res.json()
        return JSON.stringify(data)
    } catch(err) {
        console.error(err.message)
    }
}

export async function getLocation() {
    try {
        const response = await fetch('https://ipapi.co/json/')
        const text = await response.json()
        return JSON.stringify(text)
    } catch (err) {
        console.error(err.message)
    }
}

export async function searchRecipes({ query }) {
    try {
        const recipeUrl = new URL("https://www.themealdb.com/api/json/v1/1/search.php")
        recipeUrl.searchParams.append("s", query)
        const res = await fetch(recipeUrl)
        const data = await res.json()
        return JSON.stringify(data)
    } catch(err) {
        console.error(err.message)
    }
}

export async function getRandomJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single')
        const data = await response.json()
        return JSON.stringify(data)
    } catch (err) {
        console.error(err.message)
    }
}

export const functions = [
    {
        function: getCurrentWeather,
        parse: JSON.parse,
        parameters: {
            type: "object",
            properties: {
                location: {
                    type: "string",
                    description: "The name of the city from where to get the weather"
                }
            },
            required: ["location"]
        }
    },
    {
        function: getLocation,
        parameters: {
            type: "object",
            properties: {}
        }
    },
    {
        function: searchRecipes,
        parse: JSON.parse,
        parameters: {
            type: "object",
            properties: {
                query: {
                    type: "string",
                    description: "The name of the dish to search for recipes, e.g., 'Arrabiata' or 'Chicken Curry'"
                }
            },
            required: ["query"]
        }
    },
    {
        function: getRandomJoke,
        parameters: {
            type: "object",
            properties: {}
        }
    },
]
