import Login from "./Login";
import {connect} from "react-redux";
import {userActionsType} from "../../store/actions/userActions";

const mapStateToProps = state => ({user: state.user})
const mapDispatchToProps = dispatch => {
    return {
        addToken: (token) => dispatch({type: userActionsType.ADD_TOKEN, token}),
        removeToken: () => dispatch({type: userActionsType.REMOVE_TOKEN}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)