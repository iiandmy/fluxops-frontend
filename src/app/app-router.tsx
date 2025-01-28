import { useAppSelector } from "~/hooks/index";
import { ReactElement } from "react"
import { createBrowserRouter, Navigate } from "react-router-dom";
import { ClientPage } from "~/modules/dashboard/pages/page";
import { selectIsAuthorized } from "~/store/session/slice";
import { baseLayout } from "./layout";

type GuestGuardedProps = {
  children: ReactElement;
}

function GuestGuard({ children }: GuestGuardedProps) {
  // MOCK
  const isAuthorized = useAppSelector(selectIsAuthorized);

  if (!isAuthorized) {
    return <Navigate to="/login" />
  }

  return children;
}

type AuthGuardedProps = {
  children: ReactElement;
}

function AuthGuard({ children }: AuthGuardedProps) {
  const isAuthorized = useAppSelector(selectIsAuthorized);

  if (isAuthorized) {
    return <Navigate to="/" />
  }

  return children;
}

export const appRouter = () => 
    createBrowserRouter([
      {
        element: baseLayout,
        errorElement: <div>error</div>,
        loader: async () => {
          return await <>123</>
        },
        children: [
          {
            path: '/login',
            element: (
              <AuthGuard>
                <div>login</div>
              </AuthGuard>
            ),
          },
          {
            path: '/',
            element: (
              <GuestGuard>
                <ClientPage />
              </GuestGuard>
            )
          }
        ]
      }
    ])