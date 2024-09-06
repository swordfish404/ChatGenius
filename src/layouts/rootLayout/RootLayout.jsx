    import {Link, Outlet} from "react-router-dom";
    import './RootLayout.css';
    import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
    const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

    if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
    }

        

        const RootLayout = () => {
            return (
                // for cleark authenication
                <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
                <div className='rootLayout'>
                <header>
                    <Link to="/" className="logo">
                    <img src="black.jpg" alt="" />
                    <span>ChatGenius</span>
                    </Link>
                    <div className="user">
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    </div>
                </header>

                <main>
                <Outlet/>
                </main>
                </div>
                </ClerkProvider>
            );
        }

        export default RootLayout;
