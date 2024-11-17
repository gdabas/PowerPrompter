import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useStore from "../store/userStore";
import { onAuthStateChangedListener } from "../api/firebaseAuth";

const authCheck = (WrappedComponent: React.ComponentType) => {
  const ComponentWithAuth = (props: any) => {
    const setUser = useStore((state) => state.setUser);
    const user = useStore((state) => state.user);
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const unsubscribe = onAuthStateChangedListener((authUser) => {
        if (authUser) {
          setUser(authUser);
          setLoading(false);
        } else {
          setUser(null);
          router.push("/login");
        }
      });

      return () => unsubscribe();
    }, [setUser, router]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return <WrappedComponent {...props} />;
  };

  // Add display name
  ComponentWithAuth.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;
  
  return ComponentWithAuth;
};

// Helper function to get the display name of a component
function getDisplayName(WrappedComponent: React.ComponentType) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default authCheck;