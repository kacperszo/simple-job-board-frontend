import Home from "./Home";
import {userActionsType} from "../../store/actions/userActions";
import {connect} from "react-redux";

const mapStateToProps = state => ({user: state.user})
const mapDispatchToProps = dispatch => {
    return {
        addToken: (token) => dispatch({type: userActionsType.ADD_TOKEN, token}),
        removeToken: () => dispatch({type: userActionsType.REMOVE_TOKEN}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)