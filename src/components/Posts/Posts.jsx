import React, { Component } from 'react';
import axios from 'axios';

class Posts extends React.Component {

   
    constructor() {
        super();
        this.state = {
          post: [],
        };
      }
  

  componentDidMount() { 
    axios.get('https://turbotax.intuit.ca/tips/wp-json/wp/v2/posts?count=4')
    .then(res => {
      this.setState({ post: res.data });
    })
    .catch(error => {
        console.log(error);
    });
    }

    render() {
        return (
    
          <div>
            {this.state.post.map(wp => {
                return(
                <div>
                  {wp.title.rendered}
                </div>                                        
                );
            })}
          </div>
        );
      }
}

export default Posts;