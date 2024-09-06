import './signinpage.css';
import { SignIn } from '@clerk/clerk-react';

const Signinpage = () => {
    return (
        <div className='signInpage'>

            <SignIn path="/sign-in" signUpUrl="/sign-up"/>
        </div>
    );
}

export default Signinpage;
