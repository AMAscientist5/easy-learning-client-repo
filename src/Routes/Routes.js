import {createBrowserRouter} from 'react-router-dom';
import Main from '../Layot/Main';
import ErrorRoute from '../Pages/404/ErrorRoute';
// import MainSecond from '../LayotSecond/MainSecond';
import AllTopics from '../Pages/AllTopics/AllTopics';
import Blog from '../Pages/Blog/Blog';
import CheckOut from '../Pages/CheckOut/CheckOut';
import Faq from '../Pages/FAQ/Faq';
import GetStarted from '../Pages/GetStarted/GetStarted';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login/Login';
import Register from '../Pages/Login/Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
// import Topic from '../Pages/Topic/Topic';

export const router = createBrowserRouter([
       {
        path: '/',
        element: <Main></Main>,
        children: [
            {
               path: '/',
               element: <Home></Home>          
            },
            {
              path: '/category/:id',
              element: <AllTopics></AllTopics>,
              loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
          },
          {
              path: '/topic/:id',
              element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
              loader: ({params}) => fetch(`http://localhost:5000/topic/${params.id}`)
  
          },
        ]
       },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/faq',
          element: <Faq></Faq>
        },
        {
          path: '/login',
          element: <Login></Login>
         },
         {
          path: '/register',
          element: <Register></Register>
         },
         {
          path: '/getstarted',
          element: <GetStarted></GetStarted>
        },
        {
          path: '*',
          element: <ErrorRoute></ErrorRoute>
        }
])
