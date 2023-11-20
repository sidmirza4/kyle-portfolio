import resolveConfig from 'tailwindcss/resolveConfig'
const tailwindConfig = require('../../tailwind.config')

const fullConfig = resolveConfig(tailwindConfig)

export const getBreakpoints = () => {
	const { xs, sm, md, lg, xl } = fullConfig.theme.screens
	return {
		xs: parseInt(xs.replace('px', '')),
		sm: parseInt(sm.replace('px', '')),
		md: parseInt(md.replace('px', '')),
		lg: parseInt(lg.replace('px', '')),
		xl: parseInt(xl.replace('px', '')),
	}
}
