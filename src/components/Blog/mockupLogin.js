
componentDidMount () {
    axios.get(https://mydomain.com/login')
    


}


componentDidUpdate() {
    axios.get (https://mydomain.com/account)
     .then(res => {
      this.setState({ post: res.data });
    })
    .catch(error => {
        console.log(error);
    });
    }
}

