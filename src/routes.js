import Home from './routes/Home.svelte'
import Example from './routes/Example.svelte'
import NotFound from './routes/NotFound.svelte'

export const routes = {
    // Exact path
    '/': Home,

    // Using named parameters, with last being optional
    '/example': Example,

    // Catch-all
    // This is optional, but if present it must be the last
    '*': NotFound,
}