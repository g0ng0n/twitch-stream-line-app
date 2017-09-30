import React from 'react';
import { getState } from 'redux';
import axios from 'axios';

import FetchRequest from '../../actions/FetchRequest';
import FetchSuccess from '../../actions/FetchSuccess';
import FetchFailure from '../../actions/FetchFailure';
import Loader from '../presentationals/Loader';
import StreamCard from '../presentationals/StreamCard';
import Alert from '../presentationals/Alert';

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
                this.dispatchFetchFailure(e)
            });
    }

    dispatchFetchFailure (error) {
        this.props.store.dispatch(FetchFailure(error));
    }

    dispatchFetchSuccess (streams) {
        this.props.store.dispatch(FetchSuccess(streams));
    }

    dispatchFetchRequest () {
        this.props.store.dispatch(FetechRequest());
    }

    const streamCardItems = stateProps.streams.map((stream) =>
        <StreamCard
            key = { stream._id }
            streamCover = { stream.preview.medium }
            streamLink = { stream.channel.url }
        />
    );
    render() {
        return (
            <div>
                {status === "loading" ? (
                    <Loader />
                ) : (
                    status === "success" ? (
                        <div  className="stream-cards">
                            {this.streamCardItems}
                        </div>
                    ) : (
                        status === "error" ? (
                            <div>
                                <Alert error = { error } />
                            </div>
                            ) : (
                            <div> </div>
                            )
                        )
                    )
                }
            </div>
        )
    }
}

export default Streams