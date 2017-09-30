import React from 'react';
import { getState } from 'redux';
import axios from 'axios';

import FetchRequest from '../../actions/FetchRequest';
import FetchSuccess from '../../actions/FetchSuccess';
import FetchFailure from '../../actions/FetchFailure';
import Loader from '../presentationals/Loader';


//Provider/Container React Component
class Streams extends React.Component {
    componentWillMount(){
       this.props.store.subscribe(this.forceUpdate.bind(this));
       this.apiRequest();
       this.dispatchFetchRequest();
    }

    apiRequest() {
        axios.get('https://api.twitch.tv/kraken/streams/featured?&client_id=xxxx')
            .then(response => {
                this.dispatchFetchSuccess(response.data.featured.map(function(feat) {
                    return feat.stream;
                }));
            })
            .catch(e => {
                console.log(e);
            });
    }

    dispatchFetchSuccess (streams) {
        this.props.store.dispatch(FetchSuccess(streams));
    }

    dispatchFetchRequest () {
        this.props.store.dispatch(FetechRequest());
    }

    render() {
        const stateProps = this.props.store.getState();

        return (
            <div>
                {status === "loading" ? (
                    <Loader />
                ) : (
                    <div></div>
                )
            }
            </div>
        )
    }
}

export default Streams