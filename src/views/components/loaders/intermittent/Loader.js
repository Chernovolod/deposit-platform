import React from 'react'

const Loader = ({ classes }) => (
	<div className={`${classes || ''} d-flex justify-content-center intermittent spinner-border text-primary mx-auto`} style={{ width: '5em', height: '5em' }} role="status"> {/* TODO сделать новый класс для спиннера, а  не переопределять этот в custom.scss*/}
		<span className="sr-only" />
	</div>
)

export default Loader
