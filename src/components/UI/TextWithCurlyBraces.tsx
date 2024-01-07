import React from 'react'

const TextWithCurlyBraces = ({ children }) => {
	return (
		<span className="text-brand-blue whitespace-nowrap">
			&#123;{children}&#125;
		</span>
	)
}

export default TextWithCurlyBraces
