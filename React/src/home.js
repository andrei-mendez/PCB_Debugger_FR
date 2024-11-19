import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
    const { loggedIn, email, setLoggedIn } = props;
    const navigate = useNavigate();

    const onButtonClick = () => {
        if (loggedIn) {
          // Log out the user
          setLoggedIn(false); // Update the logged-in state
        } else {
          // Redirect to the login page
          navigate('/login');
        }
      };

return(
    <div className="mainContainer">
        <div className={'titleContainer'}>
            <div>Welcome!</div>
        </div>
        <div>This is the homepage.</div>
        <div className={'buttonContainer'}>
            <input
             className={'inputButton'}
             type="button"
             onClick={onButtonClick}
             value={loggedIn ? 'Log out' : 'Log in'}
            />
            {loggedIn ? <div>Your email address is {email}</div> : <div />}
       </div>
    </div>
   );
};

export default Home;