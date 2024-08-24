/**
 * @returns {'auto'|'dark'|'light'}
 */
globalThis.getTheme = () => {
	/** @type {any} */
	let theme = globalThis.localStorage.getItem('theme')
	if (theme !== 'auto' && theme !== 'dark' && theme !== 'light') {
		theme = 'auto'
		globalThis.localStorage.setItem('theme', theme)
	}
	return theme
}

/**
 * @param {'auto'|'dark'|'light'|undefined} [theme]
 */
globalThis.setTheme = (theme = undefined) => {
	if (!theme) theme = globalThis.getTheme()
	else {
		if (theme !== 'auto' && theme !== 'light' && theme !== 'dark') {
			theme = 'auto'
		}
		globalThis.localStorage.setItem('theme', theme)
	}
	const root = globalThis.document.querySelector(':root')
	const deviceTheme = globalThis.matchMedia('(prefers-color-scheme: dark)')

	if (theme === 'dark') {
		deviceTheme.onchange = null
		root?.removeAttribute('auto-theme')
		root?.setAttribute('theme', 'dark')
	} else if (theme === 'light') {
		deviceTheme.onchange = null
		root?.removeAttribute('auto-theme')
		root?.setAttribute('theme', 'light')
	} else {
		root?.setAttribute('auto-theme', 'true')
		if (deviceTheme.matches === true) root?.setAttribute('theme', 'dark')
		else root?.setAttribute('theme', 'light')
		deviceTheme.onchange = e => {
			if (e.matches) root?.setAttribute('theme', 'dark')
			else root?.setAttribute('theme', 'light')
		}
	}
}

globalThis.setTheme()
