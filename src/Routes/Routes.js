import {createBrowserRouter} from 'react-router-dom';
import Main from '../Layot/Main';
import MainSecond from '../LayotSecond/MainSecond';
import Blog from '../Pages/Blog/Blog';
import CourseCard from '../Pages/CourseCard/CourseCard';
import Faq from '../Pages/FAQ/Faq';
import GetStarted from '../Pages/GetStarted/GetStarted';
import Login from '../Pages/Login/Login/Login';
import Register from '../Pages/Login/Register/Register';

export const router = createBrowserRouter([
       {
        path: '/alltopics',
        element: <Main></Main>,
        children: [
            {
               path: '/alltopics',
               element: <CourseCard></CourseCard>,
               loader: () => fetch('http://localhost:5000/all-topics')
              
            }
        ]
       },
       {
        path: '/',
        element: <MainSecond></MainSecond>,
        children: [
              {
                path: '/',
                element: <GetStarted></GetStarted>
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
        ]
       },
])
