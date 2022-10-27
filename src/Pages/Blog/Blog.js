import React from "react";
import Header from "../Shared/Header/Header";

const Blog = () => {
  return (
    <div>
      <Header></Header>
      <div className="w-75 mx-auto">
        <div className="m-5 text-center">
          <h1> Blog feature</h1>
        </div>
        <div>
          <h3> What is CORS And used for?</h3>
          <p>
            CORS stands for Cross-Origin Resource Sharing (CORS) simply it's all
            about the security applied to an API. it is an HTTP-header-based
            mechanism or Access-Control-Allow-Origin headers which specify which
            origins can access the API or that allows a server to indicate any
            origins (domain, scheme, or port) other than its own from which a
            browser should permit loading resources.
          </p>
        </div>
        <div>
          <h3>
            Why are people using `firebase`? What other options do have to
            implement authentication?
          </h3>
          <p>
            Firebase is basically a Google-backed app development platform. core
            features – Build, Release & Monitor, Engage, authentication.Firebase
            is a popular cloud service and backend development platform, which
            is popular because of its advantages Some advantages:
            <ol>
              <li>
                {" "}
                Reliable & Extensive Databases (Realtime Database, Cloud
                Firestore)
              </li>
              <li> Fast & Safe Hosting</li>
              <li> Provides A Free Start to Newbies</li>
              <li> Google Analytics</li>
              <li> Firebase Cloud Messaging for Cross-Platform</li>
              <li> Free Multi-Platform Firebase Authentication</li>
              <li> Firebase Testing Services to Improve App Quality</li>
              <li> Increment in Revenues with App Indexing API</li>
              <li> Free Use of Firebase Dynamic Links</li>
              <li> Machine Learning Capabilities</li>
            </ol>
            Firebase Authentication It is also a magical advantage of Firebase
            and is known as Firebase Machine Learning or ML Kit. With dedicated
            APIs, you can use ML Kit for barcode scanning, recognizing text,
            labeling images, and face detection etc. Firebase ML provides
            prepared cloud-based APIs which works with the power of Google
            Cloud’s ML technology. This Google Cloud’s Machine Learning
            technology also ensures perfection. eBay Motors has adopted this
            Firebase ML Kit to improve user experience to localized searches and
            classify images.
          </p>
        </div>
        <div>
          <h3>How does the private route work?</h3>
          <p>
            The private route component is similar to the public route, the only
            change is the redirect URL and authenticates condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in) The private route component is used to protect selected
            pages in a React app from unauthenticated users.
          </p>
        </div>
        <div>
          <h3>What is Node? How does Node work?</h3>
          <p>
            Node.js is a lean, fast, open-source backend javascript runtime
            environment. It is a used as backend service where javascript works
            on the server side of the application. This way javascript is used
            on both the front end and back end. Node.js runs on the chrome v8
            engine which converts javascript code into machine code, it is
            highly scalable, lightweight, fast, and data-intensive. Working of
            Node.js: Node.js accepts the request from the clients and sends the
            response, while working with the request node.js handles them with a
            single thread. To operate I/O operations or requests node.js use the
            concept of threads. A thread is a sequence of instructions that the
            server needs to perform. It runs parallel on the server to provide
            the information to multiple clients. Node.js is an event loop
            single-threaded language. It can handle concurrent requests with a
            single thread without blocking it for one request. Node.js basically
            works on two concept Asynchronous Non-blocking I/O Non-blocking I/o:
            Non-blocking i/o means working with multiple requests without
            blocking the thread for a single request. I/O basically interacts
            with external systems such as files, and databases. Node.js is not
            used for CPU-intensive work means for calculations, and video
            processing because a single thread cannot handle the CPU works.
            Asynchronous: Asynchronous is executing a callback function. The
            moment we get the response from the other server or database it will
            execute a callback function. Callback functions are called as soon
            as some work is finished and this is because the node.js uses an
            event-driven architecture. The single thread doesn’t work with the
            request instead it sends the request to another system which
            resolves the request and it is accessible for another request. To
            implement the concept of the system to handle the request node.js
            uses the concept of Libuv. Libuv is an open-source library built-in
            C. It has a strong focus on asynchronous and I/O, this gives node
            access to the underlying computer operating system, file system, and
            networking. Libuv implements two extremely important features of
            node.js Event loop Thread poo Event loop: The event loop contains a
            single thread and is responsible for handling easy tasks like
            executing callbacks and network I/O. When the program is to
            initialize all the top-level code is executed, the code is not in
            the callback function. All the applications code that is inside
            callback functions will run in the event loop. EventLoop is the
            heart of node.js. When we start our node application the event loop
            starts running right away. Most of the work is done in the event
            loop. Nodejs use event-driven-architecture. Events are emitted.
            Event loop picks them up. Callbacks are called. Event queue: As soon
            as the request is sent the thread places the request into a queue.
            It is known as an event queue. The process like app receiving HTTP
            request or server or a timer will emit event as soon as they are
            done with the work and event loop will pick up these events and call
            the callback functions that are associated with each event and
            response is sent to the client. The event loop is an indefinite loop
            that continuously receives the request and processes them. It checks
            the queue and waits for the incoming request indefinitely. Thread
            pool: Though node.js is single-threaded it internally maintains a
            thread pool. When non-blocking requests are accepted there are
            processed in an event loop, but while accepting blocking requests it
            checks for available threads in a thread pool, assigns a thread to
            the client’s request which is then processed and send back to the
            event loop, and response is sent to the respective client.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
