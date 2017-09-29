import React from 'react';
import { getState } from 'redux';

import FetchRequest from '../../actions/FetchRequest';
import FetchSuccess from '../../actions/FetchSuccess';
import FetchFailure from '../../actions/FetchFailure';

//Provider/Container React Component
class Streams extends React.Component {
    render() {
        const stateProps = this.props.store.getState();

        return (
            <div>

            </div>
        )
    }
}

export default Streams