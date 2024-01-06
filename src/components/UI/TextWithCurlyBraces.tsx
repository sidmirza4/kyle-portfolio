import React from 'react'

const TextWithCurlyBraces = ({ children }) => {
	return (
		<span className="text-brand-blue whitespace-nowrap">
			&nbsp;&#123;{children}&#125;&nbsp;
		</span>
	)
}

export default TextWithCurlyBraces
