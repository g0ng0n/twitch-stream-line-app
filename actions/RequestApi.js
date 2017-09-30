import axios from 'axios';

import FetchRequest from '../../actions/FetchRequest';
import FetchSuccess from '../../actions/FetchSuccess';
import FetchFailure from '../../actions/FetchFailure';


function RequestApi() {

    return (dispatch) => {
        axios.get('https://api.twitch.tv/kraken/streams/featured?&client_id=xxxx')
            .then(response => {
                this.dispatchFetchSuccess(response.data.featured.map(function(feat) {
                    return feat.stream;
                }));
                //dispatch FetchSuccess, order 2
                dispatch(FetchSuccess(streams))
            })
            .catch(e => {
                //dispatch FetchFailure, order 3
                dispatch(FetchFailure(e))
            });
        //dispatch FetchRequest, order 1
        dispatch(FetchRequest())
    }
}
export default RequestApi