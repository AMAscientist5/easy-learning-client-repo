import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaStar, FaFileDownload, FaUserTie } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';


import Pdf from "react-to-pdf";
const ref = React.createRef();

const AllTopics = () => {
    const categoryTopic = useLoaderData();
    console.log(categoryTopic)
    return (
        <div>

            <div className='d-flex align-items-center mb-2 w-80 justify-content-center'>
                <h1 className=''> Web Development</h1>
                <Pdf targetRef={ref} filename="code-example.pdf">
                 {({ toPdf }) => <Button onClick={toPdf} className='ms-5' variant="outline-primary"><FaFileDownload></FaFileDownload> Download</Button>}
                </Pdf>
                
            </div>
           
          <Card ref={ref} className="mb-5 w-75 mx-auto">
            <Card.Header className=''>
             <h2>{categoryTopic.title}</h2>
           </Card.Header>
            <Card.Body>
    
        <Card.Img variant="top" src={categoryTopic.image_url}/>
        <Card.Text className='p-3'>
                <p>{categoryTopic.details}</p>
                <Link to={`/topic/${categoryTopic._id}`}><Button variant="outline-primary" className=' rounded fw-bolder'>Get premium access</Button></Link>

        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between justify-items-center ">
               
                <div className='d-flex justify-items-center'>          
                    <span>Total Enrolled: {categoryTopic.total_enrolled}</span>                
                    <FaUserTie className='ms-2 mt-1'></FaUserTie>
                </div>
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{categoryTopic?.rating?.number}</span>
                </div>
                <div>
                    <p><small> Started: {categoryTopic.author.published_date}</small></p>
                </div>
            </Card.Footer>
    </Card>
        </div>
    );
};


export default AllTopics;