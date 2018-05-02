import React from 'react'

function healthyHoc(WrappedComponent, ...props) {
    return class extends React.Component {
        render() {
            return (
                <WrappedComponent {...props} />
            )
        }
    }
}

export default healthyHoc