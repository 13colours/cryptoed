/* Constants */
const FETCHING_TICK = 'FETCHING_TICK'
const FETCHING_TICK_SUCCESS = 'FETCHING_TICK_SUCCESS'
const FETCHING_TICK_FAILURE = 'FETCHING_TICK_FAILURE'

const API_BASE_URL = 'https://api.btcmarkets.net'

/* Thunk */
export function fetchTickFromAPI(assetClass = 'BTC/AUD') {
  return dispatch => {
    getTick()
    fetch(`${API_BASE_URL}/market/${assetClass}/tick`)
      .then(res => res.json())
      .then(json => dispatch(getTickSuccess(json)))
      .catch(err => dispatch(getTickFailure(err)))
  }
}

/* Actions */
const getTick = () => ({
  type: FETCHING_TICK
})

const getTickSuccess = data => ({
  type: FETCHING_TICK_SUCCESS,
  data
})

const getTickFailure = () => ({
  type: FETCHING_TICK_FAILURE
})

/* Reducers */
const initialState = {
  ticks: {},
  isFetching: false,
  error: false
}

export default function tickReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_TICK:
      return {
        ...state,
        isFetching: true,
        ticks: {}
      }

    case FETCHING_TICK_SUCCESS:
      const tickKey = `${action.data.instrument}/${action.data.currency}`

      return {
        ...state,
        isFetching: false,
        ticks: { ...state.ticks, [tickKey]: action.data }
      }

    case FETCHING_TICK_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }

    default:
      return state
  }
}
