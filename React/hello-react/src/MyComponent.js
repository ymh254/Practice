import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name, children}) => {
    return (
        <div>
            hi, my name is {name}! <br/>
            children is {children}!
        </div>
    );
};
MyComponent.defaultProps = {
    name: '기본이름'
};
MyComponent.propTypes = {
    name: PropTypes.string
};

export default MyComponent;