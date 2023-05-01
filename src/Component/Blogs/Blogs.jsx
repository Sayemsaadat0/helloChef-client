import React from 'react';

const Blogs = () => {
    return (
        <div className=' md:mx-20  gap-10 gp'>
            <div className="card w-full bg-base-100 shadow-xl mb-10">
                <div className="card-body">
                    <h2 className="card-title">Differences between uncontrolled and controlled components</h2>
                    <p> <span className='font-bold'>Controlled Component : </span>
                        A controlled component is bound to a value, and its changes will be handled in code by using event-based callbacks. Here, the input form element is handled by the react itself rather than the DOM. In this, the mutable state is kept in the state property and will be updated only with setState() method.
                    </p>
                    <p> <span className='font-bold'>Uncontrolled Component : </span>
                        It is similar to the traditional HTML form inputs. Here, the form data is handled by the DOM itself. It maintains their own state and will be updated when the input value changes. To write an uncontrolled component, there is no need to write an event handler for every state update, and you can use a ref to access the value of the form from the DOM.
                    </p>

                </div>
            </div>

            <div className="card w-full bg-base-100 shadow-xl mb-10">
                <div className="card-body">
                    <h2 className="card-title">How to validate React props using PropTypes?</h2>
                   <ul className='list-item list-disc'>
                    <li>Installing the prop-types Library and Basic Usage</li>
                    <li>Validate React Entity Types</li>
                    <li>Validate Objects</li>
                    <li>Validate Enum Value</li>
                    <li>Validate Props That Can Be One of Multiple Types</li>
                    <li>Custom Validators</li>
                    <li>Required Props</li>
                   </ul>
                </div>
            </div>

            <div className="card w-full bg-base-100 shadow-xl mb-10">
            <div className="card-body">
                    <h2 className="card-title">Dfference between nodejs and express js.</h2>
                    <div>
                    <h2 className='text-2xl font-semibold'>Node js</h2>
                   <ul className='list-item list-disc'>
                    <li>Node.js introduced JavaScript to a new level. While JavaScript is an application-side language for development, Node.js covers server-side programming. Because of Node.js, JavaScript has become an all-purpose full-stack language for development.</li>
                    <li>The JS front and the Node.js backend are simpler to maintain sync due to the use of a single language across each side of an application. In addition, Node.js lets your applications create programs in JavaScript and then execute them by the servers.</li>
                    <li> Node.js has grown to be an extremely sought-after tool for backend development. Enterprise firms like eBay, Netflix, and Uber have embraced using Node.js using a personal case</li>
                    <li>Jeff Harrell, the director of engineering at PayPal, has spoken out about Node.js. He explained, "Node.js powers our web applications and has enabled our teams to go much faster in bringing their concepts into reality."</li>
                   </ul>
                   
                    </div>
                    <div>
                    <h2 className='text-2xl font-semibold'>Express js</h2>
                   <ul className='list-item list-disc'>
                    <li>Express.js is a lightweight open-source, flexible, and flexible Node.js web-based application framework. It can be utilized as an alternative to Node.js to provide better web performance. Express is among the top well-known Node.js web application framework.</li>
                    <li>It offers extensive capabilities to build web-based applications (single or multi-page hybrid). For example, with Express, it is possible to build an application on the web that can take on multiple HTTP requests from a specific URL.</li>
                    <li>Flexibility is evident in a variety of components that are available on the package manager. The components are automatically incorporated into Express.js.</li>
                   
                   </ul>
                    </div>
                </div>
            </div>

            <div className="card w-full bg-base-100 shadow-xl mb-10">
                <div className="card-body">
                    <h2 className="card-title">What is a custom hook, and why will you create a custom hook?</h2>
                    <p>Custom Hooks are reusable functions. Custom React hooks are an essential tool that lets you add exceptional, unique functionality to your React applications. Using custom hooks, you can fulfill missing functionalities of your React projects.</p>
                    <p>
                    Reusable : React custom hooks can be used repeatedly, reducing the time for writing the code twice..
                    </p>
                    <p>
                    Less Complexity : Custom hooks provide a cleaner codebase that helps to reduce complexity and redundancy.
                    </p>
                    <p>
                    Limitless hooks : Following the ReactJS hook standards, you can create any number of custom hooks as per your requirement. Also, lots of custom hooks are available on the internet, which you can use.
                    </p>

                </div>
            </div>

        </div>
    );
};

export default Blogs;