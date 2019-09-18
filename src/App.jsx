import React, { useState } from "react";
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';

Amplify.configure(awsconfig);

const listBlogs = `query listBlogs {
  listBlogs{
    items{
      id
      name
    }
  }
}`;

const createBlog = `mutation createBlog($name:String!) {
  createBlog(input:{
    name:$name
  }){
    id
    name
  }
}`;

const App = () => {
  const [blogTitle, setBlogTitle] = useState('');

  const blogMutation = async () => {
    const blogDetails = {
      name: blogTitle
    };
    
    const newBlog = await API.graphql(graphqlOperation(createBlog, blogDetails));
    alert(JSON.stringify(newBlog));
  }

  const listQuery = async () => {
    const allBlogs = await API.graphql(graphqlOperation(listBlogs));
    alert(JSON.stringify(allBlogs));
  }

  return (
    <div className="div">
      <label htmlFor="blog-title">Blog Title</label>
      <input id="blog-title" value={blogTitle} onChange={(e) => (setBlogTitle(e.target.value))} />
      <button onClick={blogMutation}>Create Blog</button>
      <button onClick={listQuery}>List Blogs</button>      
    </div>
  );

};

export default withAuthenticator(App, true);
