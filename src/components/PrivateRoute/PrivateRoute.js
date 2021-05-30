import { Redirect, Route } from 'react-router';
import { useStateValue } from '../../Redux/StateProvider';

const PrivateRoute = ({ children, ...rest }) => {
    const [{ user }, dispatch] = useStateValue();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;