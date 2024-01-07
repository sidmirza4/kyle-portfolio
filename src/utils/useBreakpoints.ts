import { useState, useEffect } from 'react'

const breakpoints = {
	xs: 360,
	sm: 640,
	md: 900,
	lg: 1370,
	xl: 1500,
}

const useBreakpoint = () => {
	// Function to get current breakpoint
	const getBreakpoint = (width: number) => {
		if (width < breakpoints.sm) return 'xs'
		else if (width >= breakpoints.sm && width < breakpoints.md) return 'sm'
		else if (width >= breakpoints.md && width < breakpoints.lg) return 'md'
		else if (width >= breakpoints.lg && width < breakpoints.xl) return 'lg'
		return 'xl'
	}

	// Initialize state with current breakpoint
	const [breakpoint, setBreakpoint] = useState(getBreakpoint(window.innerWidth))

	useEffect(() => {
		const handleResize = () => {
			setBreakpoint(getBreakpoint(window.innerWidth))
		}

		// Add event listener
		window.addEventListener('resize', handleResize)

		// Clean up
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return breakpoint
}

export default useBreakpoint
