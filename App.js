import React from 'react';
import './App.css';
import './output.css';
import Spiner from './Assets/Spinners/Spiner';

//Routing
import { Routes, Route } from 'react-router-dom';
import AboutPage from './Component/pages/AboutPage';
import ProfilePage from './Component/pages/ProfilePage';
import {
  ProtectedRoute,
  ProtectedRouteLogRes,
} from './Component/protected/ProtectedRoute';
import GoogleAuthCallback from './Component/pages/GoogleAuthCallback';
const HomePage = React.lazy(() => import('./Component/pages/HomePage'));
const DetailForumPage = React.lazy(() =>
  import('./Component/pages/DetailForumPage')
);
const NotFound = React.lazy(() => import('./Component/pages/NotFound'));
const DetailBlogPage = React.lazy(() =>
  import('./Component/pages/DetailBlogPage')
);
const CreateBlogPage = React.lazy(() =>
  import('./Component/pages/CreateBlogPage')
);
const BlogPage = React.lazy(() => import('./Component/pages/BlogPage'));
const ForumPage = React.lazy(() => import('./Component/pages/ForumPage'));
const CreateForumPage = React.lazy(() =>
  import('./Component/pages/CreateForumPage')
);
const FaqPage = React.lazy(() => import('./Component/pages/FaqPage'));
const LoginPage = React.lazy(() => import('./Component/pages/LoginPage'));
const RegisterPage = React.lazy(() => import('./Component/pages/RegisterPage'));

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense
              fallback={
                <div>
                  <Spiner />
                </div>
              }
            >
              <HomePage />
            </React.Suspense>
          }
        />

        {/* forumPage */}
        <Route path="forum">
          <Route
            index
            element={
              <React.Suspense
                fallback={
                  <div>
                    <Spiner />
                  </div>
                }
              >
                <ForumPage />
              </React.Suspense>
            }
          />
          <Route element={<ProtectedRoute />}>
            <Route
              path="createforum"
              element={
                <React.Suspense
                  fallback={
                    <div>
                      <Spiner />
                    </div>
                  }
                >
                  <CreateForumPage />
                </React.Suspense>
              }
            />
          </Route>
          <Route
            path="detailforum/:idforum"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <Spiner />
                  </div>
                }
              >
                <DetailForumPage />
              </React.Suspense>
            }
          />
        </Route>

        {/* blogPage */}
        <Route path="blog">
          <Route
            index
            element={
              <React.Suspense
                fallback={
                  <div>
                    <Spiner />
                  </div>
                }
              >
                <BlogPage />
              </React.Suspense>
            }
          />
          <Route element={<ProtectedRoute />}>
            <Route
              path="createblog"
              element={
                <React.Suspense
                  fallback={
                    <div>
                      <Spiner />
                    </div>
                  }
                >
                  <CreateBlogPage />
                </React.Suspense>
              }
            />
          </Route>
          <Route
            path="detailblog/:idblog"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <Spiner />
                  </div>
                }
              >
                <DetailBlogPage />
              </React.Suspense>
            }
          />
        </Route>
        {/* AboutPage */}
        <Route
          path="about"
          element={
            <React.Suspense
              fallback={
                <div>
                  <Spiner />
                </div>
              }
            >
              <AboutPage />
            </React.Suspense>
          }
        />
        {/* FaqPage */}
        <Route
          path="faq"
          element={
            <React.Suspense
              fallback={
                <div>
                  <Spiner />
                </div>
              }
            >
              <FaqPage />
            </React.Suspense>
          }
        />
        {/* ProfilePage */}
        <Route
          path="profile"
          element={
            <React.Suspense
              fallback={
                <div>
                  <Spiner />
                </div>
              }
            >
              <ProfilePage />
            </React.Suspense>
          }
        />

        {/* LoginPage */}
        <Route element={<ProtectedRouteLogRes />}>
          <Route
            path="login"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <Spiner />
                  </div>
                }
              >
                <LoginPage />
              </React.Suspense>
            }
          />
        </Route>
        {/* RegisterPage */}
        <Route element={<ProtectedRouteLogRes />}>
          <Route
            path="register"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <Spiner />
                  </div>
                }
              >
                <RegisterPage />
              </React.Suspense>
            }
          />
        </Route>

        {/* LoginGoogle */}
        <Route
          path="auth/google/callback"
          element={
            <React.Suspense
              fallback={
                <div>
                  <Spiner />
                </div>
              }
            >
              <GoogleAuthCallback />
            </React.Suspense>
          }
        />

        <Route
          path="*"
          element={
            <React.Suspense
              fallback={
                <div>
                  <Spiner />
                </div>
              }
            >
              <NotFound />
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
