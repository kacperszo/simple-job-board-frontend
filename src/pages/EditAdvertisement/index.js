import {connect} from "react-redux";
import {userActionsType} from "../../store/actions/userActions";
import EditAdvertisement from "./EditAdvertisement"

const mapStateToProps = state => ({user: state.user})
const mapDispatchToProps = dispatch => {
    return {
        addToken: (token) => dispatch({type: userActionsType.ADD_TOKEN, token}),
        removeToken: () => dispatch({type: userActionsType.REMOVE_TOKEN}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditAdvertisement)