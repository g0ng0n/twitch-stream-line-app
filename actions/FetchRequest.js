// Define action within an action creator

function FetchRequest() {
    const FETCH_REQUEST = 'FETCH_REQUEST';

    return {
        type: FETCH_REQUEST,
        status: 'Loading'
    }
}

export default FetchRequest