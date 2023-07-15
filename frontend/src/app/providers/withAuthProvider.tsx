import React, { useEffect, useState } from "react";

import { UsersPermissionsMe } from "@shared/api/models.gen";
import { useCurrentUserQuery } from "@app/api/queries.gen";

type AuthContextPayload = {
  user: UsersPermissionsMe | null;
  setUser: (user: UsersPermissionsMe) => void;
};

export const AuthContext = React.createContext<AuthContextPayload>({
  user: null,
  setUser: () => {},
});

export const withAuthProvider =
  (Component: React.FC): React.FC =>
  () => {
    const [user, setUser] = useState<UsersPermissionsMe | null>(null);

    const { data } = useCurrentUserQuery();

    useEffect(() => {
      if (data?.me) {
        setUser(data.me);
      }
    }, [data?.me]);

    return (
      <AuthContext.Provider value={{ user, setUser }}>
        <Component />
      </AuthContext.Provider>
    );
  };
