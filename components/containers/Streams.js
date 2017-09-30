import React from 'react';
import { getState } from 'redux';
import Loader from '../presentationals/Loader';
import StreamCard from '../presentationals/StreamCard';
import Alert from '../presentationals/Alert';
import RequestApi from '../../actions/RequestApi';

//Provider/Container React Component
class Streams extends React.Component {
    componentWillMount () {
        this.props.store.subscribe(this.forceUpdate.bind(this));
        this.props.store.dispatch(RequestApi());
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