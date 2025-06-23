import Desktop from "./Desktop";
import Mobile from "./Mobile";

export default function Nav() {
    return (
        <>
            <Desktop />
            <Mobile />
        </>
    );
}
// This component serves as a wrapper for both the Desktop and Mobile navigation components.
// It allows for a clean separation of concerns, where each navigation type can be managed independently.
// The Desktop component is displayed for larger screens, while the Mobile component is used for smaller screens
// to ensure a responsive design. This approach enhances user experience by providing appropriate navigation options based on
// the device being used. The use of separate components also makes it easier to maintain and update the navigation logic
// without affecting the other component. This modular design is a common practice in React