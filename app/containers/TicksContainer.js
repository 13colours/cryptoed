import { connect } from 'react-redux'
import { fetchTickFromAPI } from '../reducers/ticks'
import Ticks from '../components/Ticks'

const mapStateToProps = state => ({
  ticks: state.ticks
})

const mapDispatchToProps = dispatch => ({
  getTicks: assetClass => dispatch(fetchTickFromAPI(assetClass))
})

export default connect(mapStateToProps, mapDispatchToProps)(Ticks)
