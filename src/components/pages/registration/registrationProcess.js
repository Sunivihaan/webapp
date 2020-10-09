import React from "react";

import Pagination from "react-bootstrap/Pagination";

class RegistrationProcess extends React.Component {

    render() {
        let items = [];

        for (let number = 1; number <= 3; number++) {
            if(number <= this.props.current) {
                items.push(
                    <Pagination.Item page-active key={number} active={number <= this.props.current}>
                        ●
                    </Pagination.Item>,
                );
            } else {
                items.push(
                    <Pagination.Item key={number} active={number <= this.props.current}>
                        ∘
                    </Pagination.Item>,
                );
            }
        }
        return(
            <div id="page-wrapper">
                <Pagination>{items}</Pagination>
            </div>
        );
    }
}

export default RegistrationProcess;
