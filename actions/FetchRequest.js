// Define action within an action creator

function FetchRequest() {
    console.log("0 seconds in");
    const FETCH_REQUEST = 'FETCH_REQUEST';

    return (dispatch) => {
        const FETCH_REQUEST_OBJ = {
            type: FETCH_REQUEST,
            status: "loading"
        }
        setTimeout(() => {
            console.log("2 seconds in");
            dispatch(FETCH_REQUEST_OBJ)
        }, 2000)
    }
}

export default FetchRequest