import { writable } from 'svelte/store';

const u = {}

// TODO
u.loggedIn = JSON.parse(!!localStorage.getItem('isLogin'))

// TODO
// u.isLogin = true

export const user = writable(u)

export const menuToggle = writable(true)