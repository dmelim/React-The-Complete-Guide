// This is a trick to avoid "div soup", too many divs that are there only to comply with the JSX requirements. 
//So we make an empty container and only pass the children, so that the content inside can be rendered without needing a div to wrap it

const Wrapper = props => {
    return props.children
};

export default Wrapper;